$(document).ready(function () {
	$(".owl-slider").owlCarousel({
		autoplay: true,
		autoplayTimeout: 4000,
		loop: true,
		margin: 10,
		ceneter: true,
		nav: true,
		navText: ["", ""],
		responsive: {
			0: {
				items: 1,
			},
		},
	});
	$(".owl-carousel").owlCarousel({
		autoplay: true,
		autoplayTimeout: 4000,
		loop: true,
		margin: 10,
		ceneter: true,
		nav: true,
		navText: ["", ""],
		responsive: {
			0: {
				items: 1,
			},
			480: {
				items: 2,
			},
			800: {
				items: 3,
			},
		},
	});
});
