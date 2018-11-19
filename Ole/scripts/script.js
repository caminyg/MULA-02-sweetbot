// default script

$(document).ready(function () {
	function logoSwitch() {
		$('.altLogo').each(function () {
			$(this).css('top',
				$('.startLogo').offset().top - $(this).closest('.row').offset().top
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
	
	
	
	
});
