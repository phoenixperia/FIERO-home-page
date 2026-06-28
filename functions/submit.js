function sanitizeHeaderValue(value) {
  return String(value).replace(/[\r\n]+/g, ' ').trim();
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

async function verifyTurnstile(token, secretKey, remoteIp) {
  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      secret: secretKey,
      response: token,
      remoteip: remoteIp
    })
  });
  const result = await res.json();
  return result.success === true;
}

export async function onRequestPost(context) {
  const { request, env } = context;

  let data;
  try {
    const contentType = request.headers.get('content-type') || '';
    if (contentType.includes('application/json')) {
      data = await request.json();
    } else {
      const formData = await request.formData();
      data = Object.fromEntries(formData.entries());
    }
  } catch (err) {
    return new Response(JSON.stringify({ error: 'リクエストの形式が正しくありません' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const name = (data.name || '').toString().trim();
  const email = (data.email || '').toString().trim();
  const inquiry = (data.inquiry || '').toString().trim();
  const detail = (data.detail || '').toString().trim();
  const referrer = (data.referrer || '').toString().trim();
  const turnstileToken = (data['cf-turnstile-response'] || '').toString().trim();

  if (!env.TURNSTILE_SECRET_KEY) {
    return new Response(JSON.stringify({ error: 'サーバー設定が未完了です' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  if (!turnstileToken) {
    return new Response(JSON.stringify({ error: 'ボット確認に失敗しました' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const isHuman = await verifyTurnstile(
    turnstileToken,
    env.TURNSTILE_SECRET_KEY,
    request.headers.get('CF-Connecting-IP')
  );
  if (!isHuman) {
    return new Response(JSON.stringify({ error: 'ボット確認に失敗しました' }), {
      status: 403,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  if (!name || !email || !inquiry) {
    return new Response(JSON.stringify({ error: '必須項目が未入力です' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  if (!isValidEmail(email)) {
    return new Response(JSON.stringify({ error: 'メールアドレスの形式が正しくありません' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  if (!env.RESEND_API_KEY || !env.CONTACT_EMAIL) {
    return new Response(JSON.stringify({ error: 'サーバー設定が未完了です' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const bodyText = [
    `お名前: ${name}`,
    `メールアドレス: ${email}`,
    `ご相談内容: ${inquiry}`,
    `ご相談の詳細・ご希望: ${detail || '(未入力)'}`,
    `ご紹介者のお名前: ${referrer || '(未入力)'}`
  ].join('\n');

  const resendRes = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from: 'onboarding@resend.dev',
      to: env.CONTACT_EMAIL,
      subject: `【FIEROお問い合わせ】${sanitizeHeaderValue(name)}様より`,
      text: bodyText
    })
  });

  if (!resendRes.ok) {
    return new Response(JSON.stringify({ error: 'メール送信に失敗しました' }), {
      status: 502,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}
