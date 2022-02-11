jQuery.noConflict();
jQuery(document).ready(function () {
  'use strict';


  let carousel = jQuery('#carousel-brand');
		
	carousel.owlCarousel({
		items: 5,
		autoplay: false,
		autoplayTimeout: 3000,
		smartSpeed: 1500,
		dotsSpeed: 1000,
		loop: true,
    nav: false,
		dots: false,
    mouseDrag: true,
    touchDrag: true,
		margin: 40,
		autoWidth: 0,
		responsiveClass: true,
		responsive:{
			0:{
				items: 1,
				nav: true,
				mouseDrag: true,
				autoplay: true,
				smartSpeed: 1000
			},
			479:{
				items: 2,
				mouseDrag: true,
				autoplay: true,
				smartSpeed: 1000
			},
			
			767:{
				items: 2,			
				mouseDrag: true,
				autoplay: true,
				smartSpeed: 1000
			},
			991:{
				items: 3,				
				mouseDrag: true,
				autoplay: true,
				smartSpeed: 1000
			},
			1110:{
				items: 5,
        nav: true,
				mouseDrag: true
			}
		}
	});


//  let carousel = jQuery('#slide-one');
		
// 	carousel.owlCarousel({
//         loop:true,
//         margin:10, 
//         nav:false, 
//         autoplay:true, 
//         smartSpeed:1000, 
//         autoplayTimeout:2000, 
//         responsive:{ 
//             0:{
//                 items:1
//             },
//             600:{
//                 items:1
//             },
//             1000:{
//                 items:1
//             }
//         }
//     });
});