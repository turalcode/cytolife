"use strict";

// SWIPER SLIDER

const swiperProducts = new Swiper(".swiper-products", {
  slidesPerView: 1.1,
  spaceBetween: 10,

  breakpoints: {
    567: {
      spaceBetween: 20,
    },
    767: {
      slidesPerView: 2,
    },
    1199: {
      slidesPerView: 3,
    },
  },
});

const swiperCertificate = new Swiper(".swiper-certificate", {
  slidesPerView: 2.5,
  spaceBetween: 10,

  breakpoints: {
    567: {
      spaceBetween: 20,
      slidesPerView: 2.5,
    },
    767: {
      spaceBetween: 20,
      slidesPerView: 3.5,
    },
    991: {
      spaceBetween: 20,
      slidesPerView: 4.5,
    },
  },
});

const swiperTabs = new Swiper(".swiper-tabs", {
  slidesPerView: "auto",
  spaceBetween: 5,
});

// BURGER AND USER MENU

document.getElementById("burger-btn").addEventListener("click", function (e) {
  document.getElementById("user-menu-list-mob").classList.remove("visible");
  document.getElementById("nav-mob").classList.toggle("visible");
});

document
  .getElementById("user-menu-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("nav-mob").classList.remove("visible");
    document.getElementById("user-menu-list-mob").classList.toggle("visible");
  });

// CERTIFICATE

if (document.getElementById("certificate")) {
  document
    .getElementById("certificate")
    .addEventListener("click", function (e) {
      if (e.target.classList.contains("certificate-img-js")) {
        document.getElementById("modal-certificate-img").src =
          e.target.dataset.src;
        document.getElementById("modal").classList.add("visible");
        document.body.classList.add("overflow-hidden");
      }
    });
}
// MODAL

document.getElementById("modal").addEventListener("click", function (e) {
  if (
    e.target.classList.contains("modal-close-js") ||
    e.target.classList.contains("modal-bg-js")
  ) {
    this.classList.remove("visible");
    document.body.classList.remove("overflow-hidden");
  }
});
