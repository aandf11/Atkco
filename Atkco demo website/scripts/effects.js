function activateAnimation(){
	/*MOBILE MENU DISPLAY*/
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
		$("#signupForm").delay(80).fadeIn(90);
		});
	$("#cancel-btn").click(function(){
		$("#signupForm").fadeOut(60);
		$("#form1").delay(70).fadeIn(80);
		});
	/*QUESTIONS DISPLAY*/
	$("#start-assesment").click(function(){
		$("#tips-background").fadeOut();
		$("#tips-screen").fadeOut();
		$(".questions-container").fadeIn(10);
		});
	$(".close-btn").click(function(){
		$("#tips-background").fadeIn();
		$("#tips-screen").fadeIn();
		$(".questions-container").fadeOut(10);
		});
	}


$(document).ready(activateAnimation);