;(function() {
	"use strict";
	$(document).ready(function () {
		$("a[href^='#']:not([href='#'])").on("click", function (event) {
			event.preventDefault();
			var id = $(this).attr('href'),
				top = $(id).offset().top;
			$('body,html').animate({
				scrollTop: top
			}, 500);
		});
	});

})();

