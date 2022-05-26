jQuery(document).ready(function () {
  let carousel = jQuery("#slider");

  carousel.owlCarousel({
    items: 2,
    autoplay: true,
    autoplayTimeout: 6000,
    autoplayHoverPause: false,
    smartSpeed: 1000,
    dotsSpeed: 1000,
    loop: true,
    nav: true,
    navText: [
      "<div class='nav-btn prev-slide'></div>",
      "<div class='nav-btn next-slide'></div>",
    ],
    dots: true,
    mouseDrag: true,
    margin: 50,
    stagePadding: 0,
    autoWidth: false,
    lazyLoad: true,
    lazyLoadEager: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        mouseDrag: true,
        autoplay: true,
        smartSpeed: 1000,
      },
      479: {
        items: 1,
        dots: true,
        mouseDrag: true,
        autoplay: true,
        smartSpeed: 1000,
      },
      767: {
        items: 1,
        dots: true,
        mouseDrag: true,
        autoplay: true,
        smartSpeed: 1000,
      },
      991: {
        items: 3,
        dots: true,
        mouseDrag: true,
        autoplay: true,
        smartSpeed: 1000,
      },
      1647: {
        items: 3,
        autoplay: true,
        mouseDrag: true,
        smartSpeed: 1000,
      },
    },
  });
});

$(document).ready(function () {
  $(".nav-button").click(function () {
    $(".sidenav, .nav-button").toggleClass("active");
    $("body").toggleClass("lock");
  });
  $(".remove-window").click(function () {
    $(".sidenav, .nav-button").removeClass("active");
    $("body").removeClass("lock");
  });

  $(".nav-content-link").on("click", function () {
    $(".nav-content-link").removeClass("activated-li");
    $(this).addClass("activated-li");
  });

  $(".open").click(function(){
    $(".form_window").toggleClass("translate-modal");
  });
});

