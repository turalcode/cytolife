"use strict";

if (document.querySelector(".accordion")) {
  document.querySelector(".accordion-panel-first").style.height = `${
    document.querySelector(".accordion-panel-first").querySelector(".accordion-hidden").clientHeight
  }px`;

  document.querySelector(".accordion").addEventListener("click", function (e) {
    if (e.target.classList.contains("accordion-trigger-action")) {
      e.target.parentElement.classList.toggle("active");

      if (e.target.parentElement.classList.contains("active")) {
        e.target.parentElement.nextElementSibling.style.height = `${
          e.target.parentElement.nextElementSibling.querySelector(".accordion-hidden").clientHeight
        }px`;
      } else {
        e.target.parentElement.nextElementSibling.style.height = "0px";
      }
    }
  });
}
