// ========== ヒーロースライダー ==========
(function () {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dots button');
  if (!slides.length) return;

  let current = 0;
  const total = slides.length;

  function show(idx) {
    slides.forEach((s, i) => s.classList.toggle('active', i === idx));
    dots.forEach((d, i) => d.classList.toggle('active', i === idx));
    current = idx;
  }

  dots.forEach((d, i) => d.addEventListener('click', () => show(i)));

  setInterval(() => show((current + 1) % total), 5000);
})();

// ========== ハンバーガーメニュー ==========
(function () {
  const burger = document.querySelector('.hamburger');
  const navWrap = document.querySelector('.nav-wrap');
  if (!burger || !navWrap) return;

  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    navWrap.classList.toggle('open');
  });

  // 閉じるボタン (動的生成)
  const closeBtn = document.createElement('button');
  closeBtn.className = 'nav-close-btn';
  closeBtn.textContent = '× 閉じる';
  closeBtn.addEventListener('click', () => {
    burger.classList.remove('open');
    navWrap.classList.remove('open');
  });
  navWrap.insertBefore(closeBtn, navWrap.firstChild);

  // ナビ項目クリックで閉じる
  navWrap.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      burger.classList.remove('open');
      navWrap.classList.remove('open');
    });
  });
})();

// ========== サブメニュー (タップ対応) ==========
(function () {
  document.querySelectorAll('.has-submenu > .nav-toggle').forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      if (window.innerWidth <= 960) {
        e.preventDefault();
        const li = toggle.parentElement;
        li.classList.toggle('open');
        const submenu = li.querySelector('.submenu');
        if (submenu) {
          submenu.style.display = li.classList.contains('open') ? 'block' : 'none';
        }
      }
    });
  });
})();

// ========== フォームの簡易バリデーション ==========
(function () {
  const form = document.querySelector('.contact-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('お問い合わせありがとうございます。\n（こちらはデモ画面です。実際の送信機能は後ほど設定します）');
  });
})();
