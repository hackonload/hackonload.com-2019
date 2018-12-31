(function ($) {

	"use strict";

	$(window).on('load', function () {

		$('#preloader').fadeOut();

		$(window).on('scroll', function () {
			if ($(window).scrollTop() > 50) {
				$('.scrolling-navbar').addClass('top-nav-collapse');
			} else {
				$('.scrolling-navbar').removeClass('top-nav-collapse');
			}
		});

		$('.navbar-nav').onePageNav({
			currentClass: 'active'
		});

		/* slicknav mobile menu active  */
		$('.mobile-menu').slicknav({
			prependTo: '.navbar-header',
			parentTag: 'liner',
			allowParentLinks: true,
			duplicate: true,
			label: '',
			closedSymbol: '<i class="fas fa-chevron-right"></i>',
			openedSymbol: '<i class="fas fa-chevron-right"></i>',
		});

		/* WOW Scroll Spy
	  ========================================================*/
		const wow = new WOW({
			//disabled for mobile
			mobile: false
		});

		wow.init();


		/* Back Top Link active
		========================================================*/
		const offset = 200;
		const duration = 500;
		$(window).scroll(function () {
			if ($(this).scrollTop() > offset) {
				$('.back-to-top').fadeIn(400);
			} else {
				$('.back-to-top').fadeOut(400);
			}
		});

		$('.back-to-top').on('click', function (event) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: 0
			}, 600);
			return false;
		});

	});

}(jQuery));