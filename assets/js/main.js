$(document).ready(function () {
	var slider = $('.Slider__list');

	slider.slick({
		arrows: false,
		dots: true,
	});

	var slickDotsLength = $('.slick-dots').children().length;

	var width = 'calc(100% / ' + slickDotsLength + ' - 10px)';

	console.log(width);

	$('.slick-dots li').css('width', width);

	var arrows = $('.Slider__arrows');

	arrows.on('click', function (e) {
		var target = $(e.target);

		if (target.hasClass('Slider__arrow') ||
			target.hasClass('Slider__arrowIcon')) {
			var arrowDirection = target
				.closest('.Slider__arrow')
				.find('.Slider__arrowIcon');

			if (arrowDirection.hasClass('icon--arrowLeft')) {
				slider.slick('slickPrev');
			} else if (arrowDirection.hasClass('icon--arrowRight')) {
				slider.slick('slickNext');
			}
		}
	});

	var select = $('.SignUp__select');
	var list = $('.SignUp__selectList');

	select.on('click', function (e) {
		var target = $(e.target);

		if (target.hasClass('SignUp__type') ||
			target.hasClass('SignUp__select')) {
			list.stop().slideToggle();
		}

		if (target.hasClass('SignUp__selectItem')) {
			target
				.closest('.SignUp__select')
				.find('.SignUp__type')
				.text(target.text());

			list.slideUp();
		}
	});

	var viewPass = $('.js-viewPassword');
	var flag = true;

	viewPass.on('click', function () {
		if (flag) {
			flag = false;

			$(this)
				.prev()
				.attr('type', 'text');
		} else {
			$(this)
				.prev()
				.attr('type', 'password');

			flag = true;
		}
	});
});
