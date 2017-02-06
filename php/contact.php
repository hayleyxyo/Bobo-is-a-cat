<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
	</head>	
		<?php
		if ($_POST["email"]<>'') {
		    $ToEmail = 'youremail@site.com';
		    $EmailSubject = 'Site contact form';
		    $mailheader = "From: ".$_POST["email"]."\r\n";
		    $mailheader .= "Reply-To: ".$_POST["email"]."\r\n";
		    $mailheader .= "Content-type: text/html; charset=iso-8859-1\r\n";
		    $MESSAGE_BODY = "Name: ".$_POST["name"]."";
		    $MESSAGE_BODY .= "Email: ".$_POST["email"]."";
		    $MESSAGE_BODY .= "Comment: ".nl2br($_POST["comment"])."";
		    mail($ToEmail, $EmailSubject, $MESSAGE_BODY, $mailheader) or die ("Failure");
		?>
		   Thank you for your message...

			<script type="text/javascript">
			    window.setTimeout(function() {
			        window.location.href='http://thecatbobo.com/index.html';
			    }, 5000);
			</script>
</html>
