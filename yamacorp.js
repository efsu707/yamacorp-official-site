window.onload = () => {
  // ===== Hero アニメーション =====
  const heroText = document.querySelector(".hero-h1");
  const heroBtn = document.querySelector(".hero-btn");

  if (heroText && heroBtn) {
    setTimeout(() => {
      heroText.classList.add("show");
    }, 300);

    setTimeout(() => {
      heroBtn.classList.add("show");
    }, 1300);
  } else {
    console.error("要素が見つかりません。クラス名を確認してください。");
  }

  // ===== ハンバーガーメニュー開閉 =====
  const menuToggle = document.querySelector(".menu-toggle");
  const sideMenu = document.querySelector(".side-menu");
  const closeBtn = document.querySelector(".close-btn");

  if (menuToggle && sideMenu && closeBtn) {
    menuToggle.addEventListener("click", () => {
      sideMenu.classList.add("open");
    });

    closeBtn.addEventListener("click", () => {
      sideMenu.classList.remove("open");
    });
  } else {
    console.error("メニュー関連の要素が見つかりません。");
  }
};

// ===== スクロールでヘッダーを隠す・表示する =====
let lastScrollY = window.scrollY;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > lastScrollY) {
    navbar.style.top = "-80px";
  } else {
    navbar.style.top = "0";
  }
  lastScrollY = window.scrollY;
});