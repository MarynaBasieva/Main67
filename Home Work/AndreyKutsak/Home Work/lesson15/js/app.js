window.addEventListener("load", function () {
  let sliderWindow = document.querySelector("#slider"),
    slides = document.querySelectorAll(".slide"),
    count = 0,
    slideWidth = window.innerWidth;
  sliderWindow.style.width = slideWidth * slides.length + "px";
  slides.forEach(function (el) {
    el.style.width = slideWidth + "px";
  });
  function nextSlide() {
    count++;
    if (count === slides.length) {
      count = 0;
    }
    sliderWindow.style.transform = "translateX(-" + slideWidth * count + "px)";
  }
  function prewSlide() {
    count--;
    if (count < 0) {
      count = slides.length - 1;
    }
    sliderWindow.style.transform = "translateX(-" + slideWidth * count + "px)";
  }
  setInterval(function () {
    nextSlide();
  }, 3000);
  document.addEventListener("click", function (e) {
    let el = e.target.id;
    if (el === "prewBtn") {
      prewSlide();
    } else if (el == "nextBtn") {
      nextSlide();
    }
  });
});
