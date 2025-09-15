const swiperProducts = new Swiper(".swiper-products", {
  spaceBetween: 20,
  loop: true,

  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});

const swiperCertificate = new Swiper(".swiper-certificate", {
  slidesPerView: "5",
  spaceBetween: 20,
  // loop: true,
});

document.getElementById("burger-btn").addEventListener("click", function () {
  document.getElementById("nav-mob").classList.toggle("show");
});
