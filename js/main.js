// Бургер Меню
(function burger_menu() {
  let bmenu = document.querySelector(".burger-menu");
  let hmenu = document.querySelector(".header__menu");
  let logo = document.querySelector(".logo");
  let body = document.querySelector("body");

  bmenu.onclick = function () {
    this.classList.toggle("burger-menu--active");
    hmenu.classList.toggle("header__menu--active");
    logo.classList.toggle("logo--active");
    body.classList.toggle("noscroll");
  };
})();

// Раскрытие документов
(function open_block() {
  let adt = document.querySelectorAll(".ad-block__top");
  let add = document.querySelectorAll(".ad-block__down");
  for (let i = 0; i < adt.length; i++) {
    adt[i].onclick = function () {
      this.querySelector(".ad-arrow").classList.toggle("ad-arrow--active");
      add[i].classList.toggle("ad-block__down--active");
    };
  }
})();

const gallery = document.getElementById("carouselExampleIndicators");
const carouselItems = gallery.querySelectorAll(".carousel-item");

// Открытие документов
(function open_docs() {
  let overlay = document.querySelector(".overlay");
  let overlay_close = document.querySelector(".overlay-close");
  let ad_block_down = document.querySelectorAll(".ad-block__down");
  let oimg = document.querySelector(".overlay-container > img");

  for (let i = 0; i < ad_block_down.length; i++) {
    ad_block_down[i].onclick = function (event) {
      overlay.classList.add("overlay--active");
      oimg.src = event.target.src;
    };
  }

  overlay_close.onclick = function () {
    overlay.classList.remove("overlay--active");
  };
  window.addEventListener("click", (e) => {
    const target = e.target;
    if (target.closest(".overlay") && !target.closest(".overlay-container")) {
      overlay.classList.remove("overlay--active");
    }
  });
})();
