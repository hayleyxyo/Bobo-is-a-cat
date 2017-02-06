
/*************  @bobo  **************/


$(document).ready(start);

	function start() {
		$("#submitButton").click(function() {
			$(".formSection").submit();
		});

		$(".formSection").submit(function(event) {
			event.preventDefault();
			$.ajax({
				url: "php/contact.php",
				data: $('#formSection').serialize(),
				success: function(){

				// $("#successMassage").addClass("active"); //可以add a class，when the massage
			}
		});
	});
}

/************ @bobo Ends ************/
