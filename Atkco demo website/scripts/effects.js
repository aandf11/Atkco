function activateAnimation(){
	$("#mobile-menu").click(function(){
		$(".mobile-menu-content").addClass("mobile-menu-content-active");
		$(".close-menu").removeClass("mobile-menu-content-active");
		});
	$(".close-menu").click(function(){
		$(".mobile-menu-content").removeClass("mobile-menu-content-active");
		});
	/*SIGNUP FORM DISPLAY*/
	$("#btn-signup").click(function(){
		$("#form1").fadeOut(100);
		$("#signupForm").delay(90).fadeIn(90);
		});
	$("#cancel-btn").click(function(){
		$("#signupForm").fadeOut(60);
		$("#form1").delay(90).fadeIn(80);
		});
	}


$(document).ready(activateAnimation);