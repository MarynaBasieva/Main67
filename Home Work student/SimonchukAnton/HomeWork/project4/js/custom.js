
jQuery.noConflict();
jQuery(document).ready(function () {

	'use strict';


	jQuery(".fancybox").fancybox();

	let carousel = jQuery('#carousel_partners');

	carousel.owlCarousel({
		items:3,

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
		margin: 30,
		stagePadding: 0,
		autoWidth: false,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				dots: true,
				nav: false,
				mouseDrag: true,
				autoplay: true,
				smartSpeed: 1000
			},
			479: {
				items: 1,
				dots: true,
				mouseDrag: true,
				autoplay: true,
				smartSpeed: 1000
			},
			767: {
				items: 3,
				dots: true,
				mouseDrag: true,
				autoplay: true,
				smartSpeed: 1000
			},
			991: {
				items: 3,
				dots: true,
				mouseDrag: true,
				autoplay: true,
				smartSpeed: 1000
			},
			1099: {
				items: 3,
				dots: true,
				mouseDrag: true
			}
		}
	});
    jQuery('.two_img_button').click(function(){
		jQuery('.More_Products').slideToggle("slow");
	});
	jQuery('.Pointing_botton').click(function(){
		jQuery('.full_story').slideToggle("slow");
	});
});

