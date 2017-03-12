$(document).ready(function() {
	var currentData;
	var currentHeight;

	$('.partial.active')
	.siblings().css({
		'height': '1000px',
		'overflow': 'hidden'
	});

	$('.menu__li').click( function(){
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

		if ( $(window).scrollTop() >= 130 ) {
			$(window).scrollTop(0);
		}
	});

	$(window).scroll( function () {
		if ( $(window).scrollTop() >= 130 ) {
			$('.navbar.container-fluid').addClass('fixed');
		} else {
			$('.navbar.container-fluid').removeClass('fixed');
		}
	});
});