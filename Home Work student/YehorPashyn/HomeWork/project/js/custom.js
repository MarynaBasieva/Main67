jQuery.noConflict();
jQuery(document).ready(function () {

    'use strict';


<<<<<<< HEAD:MaibaOleksii/HomeWork/Project/js/custom.js

  let carousel = jQuery('#carousel-clients');
		
	carousel.owlCarousel({
		items: 4,
		autoplay: false,
		autoplayTimeout: 6000,
		autoplayHoverPause: false,
		smartSpeed: 1000,
		dotsSpeed: 1000,
		loop: true,
    nav: true,
    dots: true,
		navText: [".owl-nav-prev", ".owl-nav-next"],
		mouseDrag: true,
		margin: 30,
		stagePadding: 0,
		autoWidth: false,
		responsiveClass: true,
		responsive:{
			0:{
				items: 1,
				
			},
			479:{
				items: 1,
			
			},
			767:{
				items: 2,
				
			},
			991:{
				items: 3,
				
			},
			1110:{
				items: 1,
        
			}
		}
  });
  
  
=======
    jQuery(".fancybox").fancybox();

    let carousel = jQuery('#carousel_partners');

    carousel.owlCarousel({
        items:1,
        margin:20,
        loop:true,
        slideBy:1,
        autoplay:true,
        autoplayTimeout:3000,
        smartSpeed:2000
    })
>>>>>>> de32c39dbe4ffcb03fb18cf6de30142ca5739db3:YehorPashyn/HomeWork/project/js/custom.js

});

jQuery("document").ready(function($){
 
	var nav = $('.header');
 
	$(window).scroll(function () {
		if ($(this).scrollTop() > 136) {
			nav.addClass("fixedbar");
		} else {
			nav.removeClass("fixedbar");
		}
	});
 
});


'use strict';
function r(f){/in/.test(document.readyState)?setTimeout('r('+f+')',9):f()}
r(function(){
    if (!document.getElementsByClassName) {
        // Поддержка IE8
        var getElementsByClassName = function(node, classname) {
            var a = [];
            var re = new RegExp('(^| )'+classname+'( |$)');
            var els = node.getElementsByTagName("*");
            for(var i=0,j=els.length; i < j; i++)
                if(re.test(els[i].className))a.push(els[i]);
            return a;
        }
        var videos = getElementsByClassName(document.body,"youtube");
    } else {
        var videos = document.getElementsByClassName("youtube");
    }
    var nb_videos = videos.length;
    for (var i=0; i < nb_videos; i++) {
        // Находим постер для видео, зная ID нашего видео
        videos[i].style.backgroundImage = 'url(http://i.ytimg.com/vi/' + videos[i].id + '/sddefault.jpg)';
        // Размещаем над постером кнопку Play, чтобы создать эффект плеера
        var play = document.createElement("div");
        play.setAttribute("class","play");
        videos[i].appendChild(play);
        videos[i].onclick = function() {
            // Создаем iFrame и сразу начинаем проигрывать видео, т.е. атрибут autoplay у видео в значении 1
            var iframe = document.createElement("iframe");
            var iframe_url = "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1";
            if (this.getAttribute("data-params")) iframe_url+='&'+this.getAttribute("data-params");
            iframe.setAttribute("src",iframe_url);
            iframe.setAttribute("frameborder",'0');
            // Высота и ширина iFrame будет как у элемента-родителя
            iframe.style.width  = this.style.width;
            iframe.style.height = this.style.height;
            // Заменяем начальное изображение (постер) на iFrame
            this.parentNode.replaceChild(iframe, this);
        }
    }
});
