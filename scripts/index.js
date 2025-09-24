"use strict";

document.addEventListener("DOMContentLoaded", () => {
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
        spaceBetween: 20,
      },
      1199: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

  const swiperCertificate = new Swiper(".swiper-certificate", {
    slidesPerView: 2.2,
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
          openModal(e);
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

      setTimeout(() => {
        document.body.style.paddingRight = "0px";
        document.body.style.overflow = "initial";
      }, 200);
    }
  });

  // ACCORDION

  if (document.querySelector(".accordion")) {
    document
      .querySelectorAll(".accordion-panel.active")
      .forEach(function (panel) {
        panel.style.height = `${
          panel.querySelector(".accordion-hidden").clientHeight
        }px`;
      });

    document
      .querySelector(".accordion")
      .addEventListener("click", function (e) {
        if (e.target.classList.contains("accordion-trigger-action")) {
          e.target.parentElement.classList.toggle("active");

          if (e.target.parentElement.classList.contains("active")) {
            e.target.parentElement.nextElementSibling.style.height = `${
              e.target.parentElement.nextElementSibling.querySelector(
                ".accordion-hidden"
              ).clientHeight
            }px`;
          } else {
            e.target.parentElement.nextElementSibling.style.height = "0px";
          }
        } else if (e.target.classList.contains("certificate-img-js")) {
          openModal(e);
        }
      });
  }

  function openModal(e) {
    document.getElementById("modal-certificate-img").src = e.target.dataset.src;
    document.getElementById("modal").classList.add("visible");
    document.body.style.paddingRight = `${
      window.innerWidth - document.documentElement.clientWidth
    }px`;
    document.body.style.overflow = "hidden";
  }
});
