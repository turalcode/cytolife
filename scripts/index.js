// SWIPER SLIDER

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

// BURGER

document.getElementById("burger-btn").addEventListener("click", function (e) {
  document.getElementById("user-menu-list-mob").classList.remove("visible");
  document.getElementById("nav-mob").classList.toggle("visible");
});

// USER MENU

document.getElementById("user-menu-btn").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("nav-mob").classList.remove("visible");
  document.getElementById("user-menu-list-mob").classList.toggle("visible");
});

// CERTIFICATE

document.getElementById("certificate").addEventListener("click", function (e) {
  if (e.target.classList.contains("certificate-img-js")) {
    console.log(1);

    document.getElementById("modal-certificate-img").src = e.target.dataset.src;
    document.getElementById("modal").classList.add("visible");
  }
});

// MODAL

document.getElementById("modal").addEventListener("click", function (e) {
  if (e.target.classList.contains("modal-close-js") || e.target.classList.contains("modal-bg-js")) {
    this.classList.remove("visible");
  }
});
