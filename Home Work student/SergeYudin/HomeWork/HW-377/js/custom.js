$(document).ready(function () {
  $(".link-item-menu").on("click", function () {
    $(".link-item-menu").removeClass("activated-li");
    $(this).addClass("activated-li");
  });

  $(".btnBanner").on("click", function () {
    $(".popup-board").addClass("popup-board-active");
    $(".page").addClass("page-dimmed");
  });

  $(".close").on("click", function () {
    $(".popup-board").removeClass("popup-board-active");
    $(".page").removeClass("page-dimmed");
  });
  $(".open").click(function () {
    $(".form_window").toggleClass("translate-modal");
  });
});
