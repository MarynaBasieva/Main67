jQuery.noConflict();
jQuery(document).ready(function () {
  'use strict';

let carousel = jQuery('#carousel-gallery');
		
	carousel.owlCarousel({
		items: 5,
		center: true,
    loop: true,
    nav: true,
    dots: true,
    mouseDrag: true,
    margin: 25,
    autoWidth: true,
		responsiveClass: true,
		responsive:{
			0:{
				items: 1,
				autoplay: true,
				smartSpeed: 1000
			},
			479:{
				items: 1,
				autoplay: true,
				smartSpeed: 1000
			},
			
			767:{
				items: 3,			
				autoplay: true,
				smartSpeed: 1000
			},
			991:{
				items: 5,				
				autoplay: true,
				smartSpeed: 1000
			},
			1110:{
				items: 5,
			}
		}
  });
  
  owl.owlCarousel();
  $('.owl-nav-next').click(function() {
    owl.trigger('owl-nav-next.owl.carousel');
  });
  $('.owl-nav-prev').click(function() {
    owl.trigger('owl-nav-prev.owl.carousel', [300]);
  });
 

});