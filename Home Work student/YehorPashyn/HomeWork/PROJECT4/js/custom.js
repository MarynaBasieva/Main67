$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      items:2,
      margin:50,
      loop:true,
      slideBy:1,
      slideTransition:'ease-in-out',
      autoplay:true,
      autoplayTimeout:3000,
      smartSpeed:2000,
      autoplayHoverPause: true,
      responsiveClass:true,
      responsive:{
        0:{
          items:1,
        },
        767:{
          items:2,
        }
      }
    });
  });