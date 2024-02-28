jQuery(document).ready(function(){
	// Contact Form Validation
	$('#contactform').submit(function(){
		var action = $(this).attr('action');
		$("#message").slideUp(400,function() {
		$('#message').hide();
 		$('#submit')
			.attr('disabled','disabled');
		$.post(action, {
			name: $('#uname').val(),
			email: $('#uemail').val(),
			phone: $('#uphone').val(),
			subject: $('#usubject').val(),
			comments: $('#ucomments').val(),
			verify: $('#verify').val()
		},
			function(data){
				document.getElementById('message').innerHTML = data;
				$('#message').slideDown('slow');
				$('#contactform img.loader').fadeOut('slow',function(){$(this).remove()});
				$('#submit').removeAttr('disabled');
				if(data.match('success') != null) $('#contactform').slideUp('slow');
			}
		);
		});
		return false;
	});
});