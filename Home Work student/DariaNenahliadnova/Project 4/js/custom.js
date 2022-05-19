jQuery.noConflict();
jQuery(document).ready(function () {

    'use strict';
	
	
	let carousel = jQuery('#carousel_partner');
		
	carousel.owlCarousel({
		items: 4,
		autoplay: true,
		autoplayTimeout: 2000,
		autoplayHoverPause: true,
		smartSpeed: 1000,
		dotsSpeed: 1000,
		loop: true,
		nav: false,
		navText: [''],
		dots: true,
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
				smartSpeed: 1000
			},
			479:{
				items: 2,
                dots: true,
				mouseDrag: true,
				smartSpeed: 1000
			},
			767:{
				items: 2,
                dots: true,
				mouseDrag: true,
				smartSpeed: 1000
			},
			991:{
				items: 4,
                dots: true,
				mouseDrag: true,
				smartSpeed: 1000
			},
			1099:{
				items: 4,
                dots: true,
				mouseDrag: true,
				smartSpeed: 1000
			}
			
		}
	});
	jQuery('.btn-sing')	.click(function(){
<<<<<<< HEAD
		jQuery('.modal-window').show("slow");
=======
		jQuery('.modal-window').toggle();
>>>>>>> 578ecbbfd9e36db93a725754a176cc6a399e1fbe
	});
	jQuery('.popun-close').click(function(){
		jQuery(this).parents('.modal-window').fadeOut();
		return false;
	});
	jQuery('.modal-window').click(function(e) {
		if (jQuery(e.target).closest('.sing-in').length == 0) {
			jQuery(this).fadeOut();					
		}
	});
	jQuery('.responsive-menu').click (function(){
		jQuery('.menu').fadeToggle();
	});
	
	jQuery('.ul-menu').find('a').click(function(){
		jQuery('.ul-menu').find('a').removeClass('active');
		jQuery(this).addClass('active');

	});
	jQuery('.btn-callBack').click(function(){
		jQuery('.modalCallBack').toggleClass('active');
	});
	jQuery('.input-label').click(function(){
        jQuery('.input-text').toggleClass('active');
    });
	
});
