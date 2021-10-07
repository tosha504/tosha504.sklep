window.addEventListener("DOMContentLoaded", () => {
  const catalog = document.querySelectorAll(".catalog__btn");

  window.addEventListener("resize", function() {
    let width = window.innerWidth;

    if (width < 1025) {
      document.querySelector(".catalog__min-width").classList.add("active");

      catalog.forEach((el) => {
        el.classList.add("d-none");
      });
    } else {
      catalog.forEach((el) => {
        document
          .querySelector(".catalog__min-width")
          .classList.remove("active");

        el.classList.remove("d-none");
      });
    }
  });

  //   catalog.forEach((el) => {
  //     el.addEventListener("click", function(event) {
  //       if (this.classList.contains("active")) {
  //         this.classList.remove("active");
  //       } else {
  //         event.target.classList.add("active");
  //       }
  //     });
  //   });
});
