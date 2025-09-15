const swiperProducts = new Swiper(".swiper-products", {
  spaceBetween: 20,
  // loop: true,

  breakpoints: {
    767: {
      slidesPerView: 2,
    },
    1199: {
      slidesPerView: 3,
    },
  },
});

const swiperCertificate = new Swiper(".swiper-certificate", {
  slidesPerView: 1,
  spaceBetween: 20,
  // loop: true,
  breakpoints: {
    567: {
      slidesPerView: 2,
    },
    767: {
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 5,
    },
  },
});

document.getElementById("burger-btn").addEventListener("click", function () {
  document.getElementById("nav-mob").classList.toggle("show");
});
