<?php
header("Access-Control-Allow-Origin: *");
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if($_SERVER['HTTP_REFERER'] === "http://localhost:3000/"){
	// Get data from Get Method
	$name = isset($_GET['name']) ? $_GET['name'] : null;
	$email = isset($_GET['sendto']) ? $_GET['sendto'] : null;
	$message = isset($_GET['message']) ? $_GET['message'] : null;

	if($name && $email && $message){
		require 'vendor/autoload.php';

		$mail = new PHPMailer(true);

		try {
			//Server settings
			$mail->SMTPDebug = SMTP::DEBUG_SERVER;                      // Enable verbose debug output
			$mail->isSMTP();                                            // Send using SMTP
			$mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
			$mail->SMTPAuth   = true;                                   // Enable SMTP authentication
			$mail->Username   = 'adam.m.bader25@gmail.com';                     // SMTP username
			$mail->Password   = '';                               // SMTP password
			$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
			$mail->Port       = 587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above
		
			//Recipients
			$mail->setFrom('adam.m.bader25@gmail.com', 'Contact');     // Add a recipient
			$mail->addAddress($email);               // Name is optional
			$mail->addReplyTo('adam.m.bader25@gmail.com', 'Information');
		
			// Content
			$mail->isHTML(true);                                  // Set email format to HTML
			$mail->Subject = 'Here is the subject';
			$mail->Body    = 	'Name: ' .$name . '<br />
								 Email: ' .$email . '<br />
								 <b>Message<b> ' .$message;
		
			$mail->send();
			echo 'Message has been sent';
		} catch (Exception $e) {
			echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
		}
	}
} else {echo 'Why me?!';}	
?>