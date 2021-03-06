jQuery.noConflict();
jQuery(document).ready(function () {

    'use strict';

    jQuery(".fancybox").fancybox();

    let carousel = jQuery('#carousel_partners');
		
	carousel.owlCarousel({
		items: 2,
		autoplay: true,
		autoplayTimeout: 2000,
		autoplayHoverPause: false,
		smartSpeed: 1000,
		dotsSpeed: 1000,
		loop: true,
		nav: true,
		navText: ['', '<img src="./img/price/BTN_Right_Arrow.png" alt="right" class="right_btn">'],
		dots: true,
		mouseDrag: true,
		margin: 40,
		stagePadding: 0,
		autoWidth: false,
		responsiveClass: true,
		responsive:{
			0:{
				items: 1,
				margin: 30,
				dots: true,
				nav: false,
				mouseDrag: true,
				autoplay: false,
				center: true,
				smartSpeed: 2000,
				autoplayTimeout: 20000
			},
			479:{
				items: 1,
				dots: true,
				mouseDrag: true,
				autoplay: true,
				center: true,
				smartSpeed: 800
			},
			767:{
				items: 1,
				dots: true,
				mouseDrag: true,
				autoplay: true,
				center: true,
				smartSpeed: 1000
			},
			991:{
				items: 2,
				dots: true,
				mouseDrag: true,
				autoplay: true,
				smartSpeed: 1000
			},
			1099:{
				items: 2,
				dots: true,
				mouseDrag: true
			}
		}
	});


	let carouselDown = jQuery('#carousel_down');
		
	carouselDown.owlCarousel({
		items: 3,
		autoplay: true,
		autoplayTimeout: 2000,
		autoplayHoverPause: false,
		smartSpeed: 1000,
		dotsSpeed: 1000,
		loop: true,
		nav: true,
		navText: ['', '<img src="./img/price/BTN_Right_Arrow.png" alt="right" class="right_btn">'],
		dots: true,
		mouseDrag: true,
		margin: 45,
		stagePadding: 0,
		autoWidth: false,
		responsiveClass: true,
		responsive:{
			0:{
				items: 2,
				margin: 20,
				dots: true,
				nav: false,
				mouseDrag: true,
				autoplay: true,
				center: true,
				smartSpeed: 1000,
				autoplayTimeout: 20000,
			},
			479:{
				items: 1,
				margin: 20,
				dots: true,
				mouseDrag: true,
				autoplay: true,
				center: true,
				smartSpeed: 1000
			},
			767:{
				items: 1,
				dots: true,
				mouseDrag: true,
				autoplay: true,
				center: true,
				smartSpeed: 1000
			},
			991:{
				items: 2,
				dots: true,
				mouseDrag: true,
				autoplay: true,
				smartSpeed: 1000
			},
			1099:{
				items: 3,
				dots: true,
				mouseDrag: true
			}
		}
	});



});

'use strict';
function r(f){/in/.test(document.readyState)?setTimeout('r('+f+')',9):f()}
r(function(){
    if (!document.getElementsByClassName) {
        // ?????????????????? IE8
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
        // ?????????????? ???????????? ?????? ??????????, ???????? ID ???????????? ??????????
        videos[i].style.backgroundImage = 'url(http://i.ytimg.com/vi/' + videos[i].id + '/sddefault.jpg)';
        // ?????????????????? ?????? ???????????????? ???????????? Play, ?????????? ?????????????? ???????????? ????????????
        var play = document.createElement("div");
        play.setAttribute("class","play");
        videos[i].appendChild(play);
        videos[i].onclick = function() {
            // ?????????????? iFrame ?? ?????????? ???????????????? ?????????????????????? ??????????, ??.??. ?????????????? autoplay ?? ?????????? ?? ???????????????? 1
            var iframe = document.createElement("iframe");
            var iframe_url = "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1";
            if (this.getAttribute("data-params")) iframe_url+='&'+this.getAttribute("data-params");
            iframe.setAttribute("src",iframe_url);
            iframe.setAttribute("frameborder",'0');
            // ???????????? ?? ???????????? iFrame ?????????? ?????? ?? ????????????????-????????????????
            iframe.style.width  = this.style.width;
            iframe.style.height = this.style.height;
            // ???????????????? ?????????????????? ?????????????????????? (????????????) ???? iFrame
            this.parentNode.replaceChild(iframe, this);
        }
    }
});

document.addEventListener('click', function (e) {
	if (e.target.classList.contains("increase")) {
	  ++e.target.parentElement.querySelector("input").value;
	} else if (e.target.classList.contains("decrease")) {
	  --e.target.parentElement.querySelector("input").value;
	}
  });
