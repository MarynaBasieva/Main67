jQuery.noConflict();
jQuery(document).ready(function () {

'use strict';


jQuery(".fancybox").fancybox();

let carousel = jQuery('#carousel_coworkers');

carousel.owlCarousel({
items: 4,
autoplay: true,
autoplayTimeout: 4000,
autoplayHoverPause: false,
smartSpeed: 1000,
dotsSpeed: 1000,
loop: true,
nav: true,
navText: ["<img src='img/Arrow.png'>","<img src='img/Arrow 2.png'>"],
dots: true,
mouseDrag: true,
margin: 62,
stagePadding: 0,
autoWidth: false,
responsiveClass: true,
responsive: {
    0:{
        items: 1,
        dots: true,
        nav: true,
        mouseDrag: false
    },
    479:{
        items: 2,
        dots:true,
        mouseDrag:true
    },
    767:{
        items: 2,
        dots:true,
        mouseDrag:true,
        nav: true,
    },
    991:{
        items: 3,
        dots: true,
        mouseDrag: true,
        nav: true,
    },
    1099: {
        items: 4,
        dots: true,
        mouseDrag: true,
        nav: true,
    }
}
});

    
});

