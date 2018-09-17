function activateAnimation(){
	$("#mobile-menu").click(function(){
		$(".mobile-menu-content").addClass("mobile-menu-content-active");
		$(".close-menu").removeClass("mobile-menu-content-active");
		});
	$(".close-menu").click(function(){
		$(".mobile-menu-content").removeClass("mobile-menu-content-active");
		});
	}


$(document).ready(activateAnimation);