$(document).ready(function () {
  if ($(window).width() < 992) {
    $(".menu-wraper").addClass("hide");
    $(".navbar-toggler").on("click", function () {
      $(".menu-wraper").toggleClass("hide", "show");
    });
  }
});
// modal window
$(".close-btn").on("click", function () {
  $(".modal-wraper").addClass("hide");
  $(".sign").addClass("hide");
  $("iframe").remove();
});
$(".btna").on("click", function () {
  let target = $(this).data();

  $(".modal-wraper").removeClass("hide");
  $(target.target).toggleClass("hide");
});
// video player
$("#playBtn").on("click", function () {
  $(".modal-wraper").removeClass("hide");
  let link = $(".video-baner").data();
  $(".content-wraper").append(
    "<iframe  src=" +
      link.source +
      ' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
  );
});
