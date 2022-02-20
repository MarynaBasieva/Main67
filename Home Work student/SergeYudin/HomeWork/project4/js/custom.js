jQuery.noConflict();
jQuery(document).ready(function () {
  "use strict";

  let carousel = jQuery("#slider");

  carousel.owlCarousel({
    items: 4,
    autoplay: true,
    autoplayTimeout: 3500,
    autoplayHoverPause: true,
    smartSpeed: 1000,
    dotsSpeed: 1000,
    loop: true,
    nav: false,
    navText: [""],
    dots: true,
    dotsEach: true,
    mouseDrag: true,
    margin: 20,
    stagePadding: 0,
    autoWidth: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        mouseDrag: true,
        autoplay: true,
        smartSpeed: 1000,
      },
      479: {
        items: 2,
        dots: true,
        mouseDrag: true,
        autoplay: true,
        smartSpeed: 1000,
      },
      767: {
        items: 2,
        dots: true,
        mouseDrag: true,
        autoplay: true,
        smartSpeed: 1000,
      },
      991: {
        items: 4,
        dots: true,
        mouseDrag: true,
        autoplay: true,
        smartSpeed: 1000,
      },
      1099: {
        items: 4,
        dots: true,
        autoplay: true,
        mouseDrag: true,
        smartSpeed: 1000,
      },
    },
  })
  
  let carouse2l = jQuery("#card-slider");

  carouse2l.owlCarousel({
    items: 1,
    autoplay: true,
    autoplayTimeout: 3500,
    autoplayHoverPause: true,
    smartSpeed: 1000,
    dotsSpeed: 1000,
    loop: true,
    nav: false,
    navText: [""],
    dots: true,
    dotsEach: true,
    mouseDrag: true,
    margin: 20,
    stagePadding: 0,
    autoWidth: false,
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
        items: 1,
        dots: true,
        mouseDrag: true,
        autoplay: true,
        smartSpeed: 1000,
      },
      1099: {
        items: 1,
        dots: true,
        autoplay: true,
        mouseDrag: true,
        smartSpeed: 1000,
      },
    },
  });
});
