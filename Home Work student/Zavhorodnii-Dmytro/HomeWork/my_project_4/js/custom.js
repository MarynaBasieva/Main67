jQuery.noConflict();
jQuery(document).ready(function () {

'use strict';


jQuery(".fancybox").fancybox();

let carousel = jQuery('#carousel_coworkers');
let review_carousel = jQuery('#carousel_review');
let carousel_insta = jQuery('#carousel_insta');

carousel.owlCarousel({
items: 4,
autoplay: true,
autoplayTimeout: 5000,
autoplayHoverPause: false,
smartSpeed: 1000,
dotsSpeed: 1000,
loop: true,
nav: false,
navText: [''],
dots: true,
mouseDrag: true,
margin: 10,
stagePadding: 0,
autoWidth: false,
responsiveClass: true,
responsive: {
    0:{
        items: 1,
        dots: true,
        nav: false,
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
        mouseDrag:true
    },
    991:{
        items: 2,
        dots: true,
        mouseDrag: true
    },
    1099: {
        items: 4,
        dots: true,
        mouseDrag: true
    }
}
});





carousel_insta.owlCarousel({
    items: 5,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    smartSpeed: 1000,
    dotsSpeed: 1000,
    loop: true,
    nav: false,
    navText: [''],
    dots: true,
    mouseDrag: true,
    margin: 0,
    stagePadding: 0,
    autoWidth: false,
    responsiveClass: true,
    responsive: {
        0:{
            items: 2,
            dots: true,
            nav: false,
            mouseDrag: false
        },
        479:{
            items: 2,
            dots:true,
            mouseDrag:true
        },
        767:{
            items: 3,
            dots:true,
            mouseDrag:true
        },
        991:{
            items: 4,
            dots: true,
            mouseDrag: true
        },
        1099: {
            items: 5,
            dots: true,
            mouseDrag: true
        }
    }
    });




review_carousel.owlCarousel({
    items: 4,
    autoplay: true,
    autoplayTimeout: 8000,
    autoplayHoverPause: false,
    smartSpeed: 1000,
    dotsSpeed: 1000,
    loop: true,
    nav: false,
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
            nav: false,
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
            mouseDrag: true
        },
        2000: {
            items: 1,
            dots: true,
            mouseDrag: true
        }
    }
    });


});

