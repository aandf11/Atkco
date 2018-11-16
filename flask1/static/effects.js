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
		$("#alertBox2").hide();
		$("#signupForm").delay(80).fadeIn(90);
		});
	$("#cancel-btn").click(function(){
		$("#signupForm").fadeOut(60);
		$("#form1").delay(70).fadeIn(80);
		$("#signupForm")[0].reset();
		$("#alertBox").hide();
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

/* FORM VALIDATION*/
	function activatevalidation(){
		if(document.signupForm.firstName.value == "" ){
			document.getElementById('alertBox').innerHTML = "Please enter first name";
			$("#alertBox").show();
			return false;
		}
		else if(document.signupForm.firstName.value != "" ){
			$("#alertBox").delay(3000).fadeOut(500);
		}

		if(document.signupForm.lastName.value == ""){
			document.getElementById('alertBox').innerHTML = "Please enter last name";
			$("#alertBox").show();
			return false;
		}
		else if(document.signupForm.lastName.value != "" ){
			$("#alertBox").delay(3000).fadeOut(500);
		}

  }

/* EMAIL CHECKER */
function validateEmail() {
	var email= $("#email").val();
	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
	if (!emailReg.test( email )){
		document.getElementById('alertBox').innerHTML = "Please enter a valid email";
		$("#alertBox").show();
		$(".btnD").attr('disabled', 'disabled');
	}
	else if(emailReg.test(email) && email != ""){
		document.getElementById('alertBox').innerHTML = "Email Valid!";
		$("#alertBox").show().delay(3000).fadeOut(500);
		$(".btn").removeAttr('disabled');
	}
}


/* PASSWORD CHECK*/
 function validatepassword(){
	 var password = $("#password").val();
	 if(password.length < 4){
		 document.getElementById('alertBox').innerHTML = "Password too short";
		 $("#alertBox").show();
		 $(".btnD").attr('disabled', 'disabled');
	 }
	 else if(password.length < 8){
		 document.getElementById('alertBox').innerHTML = "minimum of 8 characters required";
		 $("#alertBox").show();
		 $(".btnD").attr('disabled', 'disabled');
	 }
	 else{
		 document.getElementById('alertBox').innerHTML = "Strong password!";
		 $("#alertBox").show().delay(3000).fadeOut(500);
		 $(".btnD").attr('disabled', 'disabled');
	 }
 }

/*COMPARE PASSWORDS*/
	function comparepasswords(){
		var fname= $("#firstName").val();
		var lname= $("#lastName").val();
		var password = $("#password").val();
		var confirmPassword = $("#confirmPassword").val();
		if(confirmPassword != password ){
			document.getElementById('alertBox').innerHTML = "Passwords don't match";
			$("#alertBox").show();
			$(".btnD").attr('disabled', 'disabled');
			return false;
		}
		else if(confirmPassword==password && confirmPassword != "" && password != "" && fname !="" && lname!=""){
			 document.getElementById('alertBox').innerHTML = "Passwords match!";
			 $("#alertBox").show().delay(3000).fadeOut(500);
			 $(".btn").removeAttr('disabled');

		}
	}


/*HIDE LOGIN ALERT ON INITIAL LOAD*/
	function hideAlert(){
		var alert2 = document.getElementById('alertBox2').innerHTML;
		if(alert2 != " "){
			$("#alertBox2").delay(2500).fadeIn(500);
		}
	}



/*	$('#signupForm').on('submit',function(event){

		$.ajax({
			data : {
				first_name : $('#firstName').val(),
				last_name : $('#lastName').val(),
				email : $('#email').val(),
				password: $('#password').val(),
				confirm_password: $('#confirmPassword').val()
			},
			type : 'POST',
			url : '/process'
		})*
		.done(function(data){
			if(data.error){
				$('#alertBox').text(data.error).show();
			}
			else {
				$('#alertBox').text(data.success).show();
			}
		});
		event.preventDefault();
});*/




$(document).ready(hideAlert);
$(document).ready(activateAnimation);
