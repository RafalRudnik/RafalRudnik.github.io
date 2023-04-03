$('.slider-wrapper').slick({
	arrows: false,
	adaptiveHeight: true,
	autoplay: true,
	autoplaySpeed: 3000,
	speed: 1000,
	mobileFirst: true,
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	vertical: true,
	responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
			},
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 1,
			},
		},
	],
});
