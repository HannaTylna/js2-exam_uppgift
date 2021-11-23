$(function() {

	$("#name_error_message").hide();
	$("#date_error_message").hide();
	$("#about_error_message").hide();
	$("#agenda_error_message").hide();
	$(" .images_error_message").hide();
	$("#select_error_message").hide();

	var error_name = false;
	var error_date = false;
	var error_about = false;
	var error_agenda = false;
	var error_images = false;
	var error_select = false;

	$("#form_name").focusout(function(){
		check_name();
	});
	$("#form_date").focusout(function() {
		check_date();
	});
	$("#form_about").focusout(function() {
		check_about();
	});
	$("#form_agenda").focusout(function() {
		check_agenda();
	});
	$(".form__input-image").focusout(function() {
		check_images();
	});
	$("#form_selection").focusout(function() {
		check_selection();
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

	function check_date() {
		var date = $("#form_date").val();
		if (date !== '') {
			$("#date_error_message").hide();
			$("#form_date").css("border-bottom","2px solid #34F458");
		} else {
		   	$("#date_error_message").show();
		   	$("#form_date").css("border-bottom","2px solid #F90A0A");
		   	error_date = true;
		}
	}

	function check_about() {
		var about = $("#form_about").val();
		if (about !== '') {
			$("#about_error_message").hide();
			$("#form_about").css("border-bottom","2px solid #34F458");
		} else {
		   	$("#about_error_message").show();
		   	$("#form_about").css("border-bottom","2px solid #F90A0A");
		   	error_about = true;
		}
	}

	function check_agenda() {
		var agenda = $("#form_agenda").val();
		if (agenda !== '') {
			$("#agenda_error_message").hide();
			$("#form_agenda").css("border-bottom","2px solid #34F458");
		} else {
		   	$("#agenda_error_message").show();
		   	$("#form_agenda").css("border-bottom","2px solid #F90A0A");
		   	error_agenda = true;
		}
	}

	function check_images() {
		var images = $(".form__input-image").val();
		if (images !== '') {
			$(".images_error_message").hide();
		} else {
		   	$(".images_error_message").show();
		   	error_images = true;
		}
	}

	function check_selection() {
		var select = $("#form_selection").val();
		if (select == "fun" || select == "education" || select == "afterwork") {
			$("#select_error_message").hide();
		} else {
		   	$("#select_error_message").show();
		   	error_select = true;
		}
	}

	$(".content__form").submit(function() {
		error_name = false;
		error_date = false;
		error_about = false;
		error_agenda = false;
		error_images = false;
		error_select = false;

		check_name();
		check_date();
		check_about();
		check_agenda();
		check_images();
		check_selection();

		if (error_name === false && error_date === false && error_about === false && error_agenda === false && error_images === false && error_select === false) {
			$(".content__form").html("<div id='message'></div>");
			$("#message")
			.html("<h2>Registration is successfull!</h2>")
			
			return false;
		} else {
			alert("Please Fill the form Correctly");
			return false;
		}
	});
});