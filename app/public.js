$(document).ready(function() {
	var currentData;
	var currentHeight;
	var headerHeight = $('header').height();
	var headerWidth = $('.center').width();

	$('.container').css({"max-width" : headerWidth});

	$('.partial.active')
	.siblings().css({
		'height': '1000px',
		'overflow': 'hidden'
	});

	$('.menu__li:not(.dropdown)').click( function(){
		$(this).addClass('active').siblings().removeClass('active');
		// currentTab = $('.menu__li').hasClass('active');
		currentData = $(this).data("article");
		$('.partial-common').children().removeClass('active');
		$('.partial-common').children('[data-article="'+currentData+'"]').addClass('active');

		currentHeight = $('.partial.active').height();
		$('.partial.active').css({
			'height': 'auto',
			'overflow': 'auto'
		}).siblings().css({
			'height': '1000px',
			'overflow': 'hidden'
		});

		if ( $(window).scrollTop() >= headerHeight + 40 ) {
			$(window).scrollTop(0);
		}
	});

	$('.menu__li.dropdown').click( function(){
		$('.menu__dropdown').toggleClass('open');
	});

	$(window).scroll( function () {
		if ( $(window).scrollTop() >= headerHeight + 40 ) {
			$('.navbar.container-fluid').addClass('fixed');
		} else {
			$('.navbar.container-fluid').removeClass('fixed');
		}
	});
});