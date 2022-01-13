window.addEventListener("load", function () {
  let text = document.querySelector("#title");
  document.addEventListener("mousemove", function (e) {
    let x = e.clientX;
    let y = e.clientY;

    text.style.background =
      "radial-gradient(circle farthest-corner at " +
      x +
      "px " +
      y +
      "px, #ceb281 22%, #313131 90%)";
  });
  text.style.backgroundClip = "text";
});
