$(function() {

	$("#name_error_message").hide();
	$("#email_error_message").hide();
	$("#msg_error_message").hide();

	var error_name = false;
	var error_email = false;
	var error_msg = false;

	$("#form_name").focusout(function(){
		check_name();
	});
	$("#form_email").focusout(function() {
		check_email();
	});
	$("#form_message").focusout(function() {
		check_msg();
	});

	function check_name() {
		var name = $("#form_name").val();
		if (name !== '') {
			$("#name_error_message").hide();
			$("#form_name").css("border-bottom","2px solid #34F458");
		} else {
		   	$("#name_error_message").show();
		   	$("#form_name").css("border-bottom","2px solid #F90A0A");
		   	error_name = true;
		}
	}

	function check_email() {
		var email = $("#form_email").val();
		if (email !== '') {
			$("#email_error_message").hide();
			$("#form_email").css("border-bottom","2px solid #34F458");
		} else {
		   	$("#email_error_message").show();
		   	$("#form_email").css("border-bottom","2px solid #F90A0A");
		   	error_email = true;
		}
	}

	function check_msg() {
		var msg = $("#form_message").val();
		if (msg !== '') {
			$("#msg_error_message").hide();
			$("#form_message").css("border-bottom","2px solid #34F458");
		} else {
		   	$("#msg_error_message").show();
		   	$("#form_message").css("border-bottom","2px solid #F90A0A");
		   	error_msg = true;
		}
	}

	$(".content__form").submit(function() {
		error_name = false;
		error_email = false;
		error_msg = false;

		check_name();
		check_email();
		check_msg();

		if (error_name === false && error_email === false && error_msg === false) {
			$(".content__form").html("<div id='message'></div>");
			$("#message")
			.html("<h2>Thank you for your message. We will get back to you as soon as we can.</h2>")
			
			return false;
		} else {
			alert("Please Fill the form Correctly");
			return false;
		}
	});
});