$(document).ready(function () {
  let delay = $(".list-item").data();
  let i = 0;
  let elems = $(".list-item").toArray();
  $("#toggleBtn").on("click", function () {
    let toggleMenu = setInterval(function () {
      console.log(elems[i]);

      if (i >= elems.length) {
        i = 0;
      }
      console.log(i);
      elems[i].classList.toggle("hide");

      i++;
    }, 200);
    setInterval(function () {
      clearInterval(toggleMenu);
    }, 800);
  });
});
new WOW().init();
