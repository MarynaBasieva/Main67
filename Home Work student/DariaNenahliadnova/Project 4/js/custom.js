jQuery.noConflict();
jQuery(document).ready(function () {

    'use strict';
	
	
	let carousel = jQuery('#carousel_partner');
		
	carousel.owlCarousel({
		items: 4,
<<<<<<< HEAD
		autoplay: true,
		autoplayTimeout: 2000,
		autoplayHoverPause: true,
=======
		autoplay: false,
		autoplayTimeout: 1500,
		autoplayHoverPause: false,
>>>>>>> 243e085079f1ba15dacf640d4d5db01581efe389
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
<<<<<<< HEAD
=======
				autoplay: false,
>>>>>>> 243e085079f1ba15dacf640d4d5db01581efe389
				smartSpeed: 1000
			},
			479:{
				items: 2,
				mouseDrag: true,
<<<<<<< HEAD
=======
				autoplay: false,
>>>>>>> 243e085079f1ba15dacf640d4d5db01581efe389
				smartSpeed: 1000
			},
			767:{
				items: 2,
				mouseDrag: true,
<<<<<<< HEAD
=======
				autoplay: false,
>>>>>>> 243e085079f1ba15dacf640d4d5db01581efe389
				smartSpeed: 1000
			},
			991:{
				items: 4,
				mouseDrag: true,
<<<<<<< HEAD
=======
				autoplay: false,
>>>>>>> 243e085079f1ba15dacf640d4d5db01581efe389
				smartSpeed: 1000
			},
			1099:{
				items: 4,
<<<<<<< HEAD
                dots: true,
=======
				autoplay: false,
>>>>>>> 243e085079f1ba15dacf640d4d5db01581efe389
				mouseDrag: true,
				smartSpeed: 1000
			}
			
		}
	});
	
	
});
