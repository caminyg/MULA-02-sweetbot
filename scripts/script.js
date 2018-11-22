// default script

$(document).ready(function () {
	function logoSwitch() {
		$('.altLogo').each(function () {
			$(this).css('top',
				$('.startLogo').offset().top - $(this).closest('.page').offset().top
			);
		});
	}

	$(document).scroll(function () {
		logoSwitch();
	});

	logoSwitch();

	// MENU

	$(".burgerMenuBotton").click(function () {
		$(".burgerMenu").toggleClass("open");
		$(".burgerMenuBotton").toggleClass("toggle");
	});

	$(".burgerLink").click(function () {
		$(".burgerMenu").toggleClass("open");
		$(".burgerMenuBotton").toggleClass("toggle");

	});

	$("#callMe").click(function () {
		$(".overlay").addClass("on");

	});

	$("#overlayOff").click(function () {
		$(".overlay").removeClass("on");

	});




});
