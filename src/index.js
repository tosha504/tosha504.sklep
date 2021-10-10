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

  document
    .querySelector(".catalog__btn-wrap")
    .addEventListener("click", function(event) {
      if (event.target.tagName !== "LI") return false;

      document.querySelectorAll(".catalog__btn").forEach(function(e) {
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

  //   document.querySelectorAll(".catalog__min-width").forEach(function(e) {
  //     console.log(e);
  //   });

  document
    .querySelector(".catalog__min-width")
    .addEventListener("click", function(event) {
      let filterClass = event.target.value;

      $filter.forEach(function(elem) {
        elem.classList.remove("hide");
        if (filterClass == "filter") {
          elem.classList.remove("hide");
        } else if (!elem.classList.contains(filterClass)) {
          elem.classList.add("hide");
        }
      });
    });
});
