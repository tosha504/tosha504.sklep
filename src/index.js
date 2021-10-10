window.addEventListener("DOMContentLoaded", () => {
  const catalog = document.querySelectorAll(".catalog__btn"),
    width = window.innerWidth,
    burger = document.querySelector(".header__burger"),
    nav = document.querySelector(".header__nav"),
    catalogBtn = document.querySelector(".catalog__btn");

  burger.addEventListener("click", function() {
    if (burger.classList.contains("active")) {
      document.querySelector(".header__burger_r").classList.toggle("opacity");
      document.querySelector(".header__burger_b").classList.toggle("opacity");
    }
    nav.classList.toggle("active");
    document.querySelector("body").classList.toggle("hidden");
  });

  if (width < 1025) {
    document.querySelector(".catalog__min-width").classList.add("active");

    catalog.forEach((el) => {
      el.classList.add("d-none");
    });
  } else {
    catalog.forEach((el) => {
      document.querySelector(".catalog__min-width").classList.remove("active");
      el.classList.remove("d-none");
    });
  }

  const $filter = document.querySelectorAll(".catalog__item");
  const $filter1 = document.querySelectorAll(".catalog__page-item");

  document
    .querySelector(".catalog__btn-wrap")
    .addEventListener("click", function(event) {
      if (event.target.tagName !== "LI") return false;

      document.querySelectorAll(".catalog__btn").forEach(function(e) {
        console.log(e.classList.contains("active"));
        e.classList.remove("active");
        if (e.classList.contains("active")) {
          event.target.classList.remove("active");
        } else {
          event.target.classList.add("active");
        }
      });

      let filterClass = event.target.dataset["f"];
      $filter.forEach(function(elem) {
        elem.classList.remove("hide");
        if (!elem.classList.contains(filterClass)) {
          elem.classList.add("hide");
        }
      });
    });
});
