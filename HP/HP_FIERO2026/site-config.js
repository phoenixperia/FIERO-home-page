/* ================================================================
   FIERO サイト共通設定
   ================================================================
   住所・電話・メール・LINE URLが変わったときは
   このファイルだけ書き換えてください。全ページに自動反映されます。
   ================================================================ */

const FIERO = {
  /* LINE予約URL */
  line: 'https://line.me/R/ti/p/@538mhqlu',

  /* 電話 */
  tel:     '090-4847-0487',
  telHref: 'tel:09048470487',

  /* メール */
  mail:     'fiero878@gmail.com',
  mailHref: 'mailto:fiero878@gmail.com',

  /* 住所 */
  zip:      '〒194-0021',
  address1: '東京都町田市中町1-2-5',
  address2: '3階（BIZcomfort町田 内）',

  /* 営業時間 */
  hours:     '11:00 – 20:00',
  hoursNote: '完全予約制',
};

/* ----------------------------------------------------------------
   DOMContentLoaded — data-fiero-* 属性の要素を一括更新
   ---------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', function () {

  /* LINE CTA */
  document.querySelectorAll('[data-line-cta]').forEach(function (el) {
    el.href = FIERO.line;
  });

  /* 住所ブロック（innerHTML で改行を保持） */
  document.querySelectorAll('[data-fiero-address]').forEach(function (el) {
    el.innerHTML = FIERO.zip + '<br>' + FIERO.address1 + '<br>' + FIERO.address2;
  });

  /* 営業時間 */
  document.querySelectorAll('[data-fiero-hours]').forEach(function (el) {
    el.innerHTML = FIERO.hours + '<br>' + FIERO.hoursNote;
  });

  /* メールリンク */
  document.querySelectorAll('[data-fiero-mail]').forEach(function (el) {
    el.href = FIERO.mailHref;
    el.textContent = FIERO.mail;
  });

  /* 連絡先テキスト（電話は非表示・メールのみ） */
  document.querySelectorAll('[data-fiero-contact]').forEach(function (el) {
    el.innerHTML = FIERO.mail;
  });
});
