let currentGallery = 1;
const currentBox = document.getElementById("gallery-current");
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

const homeCornerPlayer = document.getElementById("home-corner-video");
const cornerPlay = document.getElementById("corner-play");

homeCornerPlayer.play();

homeCornerPlayer.addEventListener("ended", function () {
  homeCornerPlayer.currentTime = 0;
  homeCornerPlayer.play();
});

cornerPlay.addEventListener("click", () => {
  homeCornerPlayer.pause();
});

function onNext() {
  currentGallery += 1;
  if (currentGallery > 7) {
    currentGallery = 1;
  }
  currentBox.innerText = currentGallery;
}

function onPrev() {
  currentGallery -= 1;
  if (currentGallery < 1) {
    currentGallery = 7;
  }
  currentBox.innerText = currentGallery;
}

function onSwitch(index) {
  currentGallery = index;
  currentBox.innerText = index;
}

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

function onContactMap() {
  const menu = document.querySelector(".hmenu__h-menu");
  const contactMap = document.querySelector(".contact-left");
  const openBtn = document.getElementById("open-map");
  const closeBtn = document.getElementById("close-map");

  menu.classList.remove("open");
  contactMap.classList.add("open");
  openBtn.style.display = "none";
  closeBtn.style.display = "inline-block";
}

function onCloseMap() {
  const menu = document.querySelector(".hmenu__h-menu");
  const contactMap = document.querySelector(".contact-left");
  const openBtn = document.getElementById("open-map");
  const closeBtn = document.getElementById("close-map");

  menu.classList.add("open");
  contactMap.classList.remove("open");
  openBtn.style.display = "inline-block";
  closeBtn.style.display = "none";
}
