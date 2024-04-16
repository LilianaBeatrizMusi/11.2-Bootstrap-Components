document.querySelectorAll(".carousel-item").forEach((item) => {
  item.addEventListener("mouseenter", function () {
    if (this.classList.contains("active")) {
      this.classList.add("hover-active");
    }
  });
  item.addEventListener("mouseleave", function () {
    this.classList.remove("hover-active");
  });
});
