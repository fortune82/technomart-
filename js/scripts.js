$('.icon-search').click(function (e) {
	$('.input-search, .icon-search').toggleClass('show-input');
});

$('.mini-menu').click(function () {
	$('.menu ul').toggleClass('show');
});


// ------слайдер -----
// поменял стили внутри slick-theme.css

$(document).ready(function () {
	$('.slider').slick({
		autoplay: true,
		autoplaySpeed: 1500,
		arrows: true,
		dots: false,
		// prevArrow: "<div class='prev'><img src='/../img/left-arrow.png'></div>",
		// nextArrow: "<div class='next'><img src='../img/right-arrow.png'></div>" // без div не работает



		// ----------а этот код ниже почему то не работает-----------------
		// prevArrow: $(".next "),
		// nextArrow: $(".prev") // без div не работает

	});
});