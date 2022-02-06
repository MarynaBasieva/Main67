jQuery.noConflict();
jQuery(document).ready(function () {

'use strict';


jQuery(".fancybox").fancybox();

let carousel = jQuery('#sliderReviews');

let carousel2 = jQuery('#second_slide');


carousel2.owlCarousel({
items: 4,
autoplay: true,
nav: true,
autoplayTimeout: 2000,
autoplayHoverPause: false,
smartSpeed: 1000,
dotsSpeed: 1000,
loop: true,
navText: [''],
dots: true,
mouseDrag: true,
margin: 30,
stagePadding: 0,
autoWidth: false,
responsiveClass: true,
responsive: {
    0:{
        items: 1,
        dots: true,
        // nav: false,
        mouseDrag: false
    },
    479:{
        items: 1,
        dots:true,
        mouseDrag:true
    },
    767:{
        items: 1,
        dots:true,
        mouseDrag:true
    },
    991:{
        items: 2,
        dots: true,
        mouseDrag: true,
        margin: 10
    },
    1099: {
        items: 3,
        dots: true,
        mouseDrag: true,
        nav: true
    }
}});







carousel.owlCarousel({
items: 1,
autoplay: true,
nav: true,
autoplayTimeout: 4000,
autoplayHoverPause: false,
smartSpeed: 1000,
dotsSpeed: 1000,
loop: true,
// nav: false,
navText: [''],
dots: true,
mouseDrag: true,
margin: 30,
stagePadding: 0,
// navigation: true,
autoWidth: false,
responsiveClass: true,
responsive: {
    0:{
        items: 1,
        dots: true,
        // nav: false,
        mouseDrag: false
    },
    479:{
        items: 1,
        dots:true,
        mouseDrag:true
    },
    767:{
        items: 1,
        dots:true,
        mouseDrag:true
    },
    991:{
        items: 1,
        dots: true,
        mouseDrag: true
    },
    1099: {
        items: 1,
        dots: true,
        mouseDrag: true,
        nav: true
    }
}
});





});
