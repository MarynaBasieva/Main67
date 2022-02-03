$(document).ready(function () {
  $("#toggle-menu").on("click", function () {
    $("#menu").toggleClass("hide");
  });
  $("#label").on("click", function () {
    $("#modal-bg").removeClass("hide");
    $("#close-btn").on("click", function () {
      $(this).parent().addClass("hide");
    });
  });
});
