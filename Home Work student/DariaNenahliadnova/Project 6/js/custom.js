jQuery.noConflict();
jQuery(document).ready(function () {

    'use strict';
	
	
	let carousel = jQuery('#carousel_partner');
		
	carousel.owlCarousel({
		items: 3,
		autoplay: false,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		smartSpeed: 1000,
		dotsSpeed: 1000,
		loop: true,
		nav: true,
		navText: ['<i class="fa fa-arrow-left" aria-hidden="true"></i>', '<i class="fa fa-arrow-right" aria-hidden="true"></i>'],
		dots: false,
		mouseDrag: true,
		margin: 15,
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
				items: 1,
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
				items: 2,
				mouseDrag: true,
				autoplay: false,
				smartSpeed: 1000
			},
			1099:{
				items: 3,
				mouseDrag: true
			}
			
		}
	});
	
	
});