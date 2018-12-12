
$(document).ready(function(){
	$("#submit").click(function(){

		var title = $("#title").val();
		var body = $("#body").val();

		if(title == "" || body == "") {
			$("#error_message").html("All fields are required!");
		}
		else {
			$("#error_message").html("");
			$.ajax({
				url:"blog.php",
				method:"POST",
				data:{
					title:title,
					body:body
				},
				success:function(data) {
					$("form").trigger("reset");
					$('#success_message').fadeIn().html(data);
					setTimeout(function(){
						$('#success_message').fadeOut("slow");
					}, 2000);
				}
			});
		}
	});
});
