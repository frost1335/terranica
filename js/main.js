// Бургер Меню
gsap.registerPlugin(ScrollTrigger);

function loaderStart() {
  const ring = document.querySelector(".ring");
  const star = document.querySelector(".star");
  const loader = document.querySelector(".loader");

  const timeline = gsap.timeline();
  const timeline2 = gsap.timeline();

  timeline.to(ring, {
    rotation: 45,
    duration: 1.5,
    onStart: () => {
      document.body.style.overflow = "hidden";
    },
  });
  timeline.to(ring, {
    rotation: -45,
    duration: 1.5,
  });
  timeline.to(ring, {
    rotation: 45,
    duration: 1.5,
  });

  timeline.to(".loader-box", {
    yPercent: -100,
    opacity: 0,
    duration: 1,
    onComplete() {
      document.body.style.overflow = "auto";
    },
  });

  timeline2.to(star, {
    rotation: 360,
    duration: 1.5,
  });
  timeline2.to(star, {
    rotation: 720,
    duration: 1.5,
  });

  timeline2.to(star, {
    rotation: 1080,
    duration: 1.5,
  });

  gsap.from(loader, {
    opacity: 0,
    duration: 2,
  });
}

loaderStart();

const menuBtn = document.querySelector(".burger-menu");

function menuAnimation(e) {
  const menuLinks = document.querySelectorAll(".hmenu-ul__item");
  const menuItems = document.querySelectorAll(".menu-item");
  menuLinks.forEach((elem) => {
    elem.style = {
      opacity: 1,
      transform: "translate(0px, 0px)",
    };
  });
  menuItems.forEach((elem) => {
    elem.style = {
      opacity: 1,
      transform: "translate(0px, 0px)",
    };
  });
  if (!e.target.classList.contains("burger-menu--active")) {
    menuLinks.forEach((elem, index) => {
      gsap.from(elem, {
        x: 60,
        opacity: 0,
        duration: 1,
        delay: 0.2 * index,
      });
    });

    menuItems.forEach((elem, index) => {
      gsap.from(elem, {
        y: 60,
        opacity: 0,
        duration: 1,
        delay: 0.2 * index,
      });
    });
  }
}

menuBtn.addEventListener("click", menuAnimation);

(function burger_menu() {
  let bmenu = document.querySelector(".burger-menu");
  let hmenu = document.querySelector(".header__menu");
  let logo = document.querySelector(".logo");
  let body = document.querySelector("body");

  bmenu.addEventListener("click", function () {
    this.classList.toggle("burger-menu--active");
    hmenu.classList.toggle("header__menu--active");
    logo.classList.toggle("logo--active");
    body.classList.toggle("noscroll");
    onCloseMobContact();
  });
})();

// open and close map with contacts
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

// mobile map and contact toggle
function onOpenMobContact() {
  const contactsMenuMobile = document.querySelector(".contacts-menu-mobile");
  const headerMenuMobile = document.querySelector(".header-menu-mobile");

  contactsMenuMobile.style.display = "block";
  headerMenuMobile.style.display = "none";
}

function onCloseMobContact() {
  const contactsMenuMobile = document.querySelector(".contacts-menu-mobile");
  const headerMenuMobile = document.querySelector(".header-menu-mobile");

  contactsMenuMobile.style.display = "none";
  headerMenuMobile.style.display = "block";
}

// Раскрытие документов
(function open_block() {
  let adt = document.querySelectorAll(".ad-block__top");
  let add = document.querySelectorAll(".ad-block__down");
  for (let i = 0; i < adt.length; i++) {
    adt[i].addEventListener("click", function () {
      this.querySelector(".ad-arrow").classList.toggle("ad-arrow--active");
      add[i].classList.toggle("ad-block__down--active");
    });
  }
})();

// Открытие документов
(function open_docs() {
  let overlay = document.querySelector(".overlay");
  let overlay_close = document.querySelector(".overlay-close");
  let ad_block_down = document.querySelectorAll(".ad-block__down");
  let oimg = document.querySelector(".overlay-container > img");

  for (let i = 0; i < ad_block_down.length; i++) {
    ad_block_down[i].addEventListener("click", function (event) {
      overlay.classList.add("overlay--active");
      oimg.src = event.target.src;
    });
  }

  overlay_close?.addEventListener("click", function () {
    overlay.classList.remove("overlay--active");
  });
  window.addEventListener("click", (e) => {
    const target = e.target;
    if (target.closest(".overlay") && !target.closest(".overlay-container")) {
      overlay.classList.remove("overlay--active");
    }
  });
})();
