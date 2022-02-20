jQuery.noConflict();
jQuery(document).ready(function () {

    'use strict';
	
	
	let carousel = jQuery('#carousel_partner');
		
	carousel.owlCarousel({
		items: 4,
		autoplay: false,
		autoplayTimeout: 1500,
		autoplayHoverPause: false,
		smartSpeed: 1000,
		dotsSpeed: 1000,
		dots: true,
		nav: false,
	    loop: true,
		navText: [''],
        dotsEach: true,
		mouseDrag: true,
		margin: 20,
		stagePadding: 0,
		autoWidth: false,
		responsiveClass: true,
		responsive:{
			0:{
				items: 1,
				mouseDrag: true,
				autoplay: false,
				smartSpeed: 1000
			},
			479:{
				items: 2,
				mouseDrag: true,
				autoplay: false,
				smartSpeed: 1000
			},
			767:{
				items: 2,
				mouseDrag: true,
				autoplay: false,
				smartSpeed: 1000
			},
			991:{
				items: 4,
				mouseDrag: true,
				autoplay: false,
				smartSpeed: 1000
			},
			1099:{
				items: 4,
				autoplay: false,
				mouseDrag: true,
				smartSpeed: 1000
			}
			
		}
	});
	
	
});
