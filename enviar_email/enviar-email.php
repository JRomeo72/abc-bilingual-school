<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$subject = $_POST['subject'];

header('Content-Type: application/json');
if ($name === ''){
  print json_encode(array('message' => 'El nombre no puede estar vacío.', 'code' => 0));
  exit();
}
if ($email === ''){
  print json_encode(array('message' => 'Email no puede estar vacío.', 'code' => 0));
  exit();
} else {
  if (!filter_var($email, FILTER_VALIDATE_EMAIL)){
  print json_encode(array('message' => 'Formato de Email invalido.', 'code' => 0));
  exit();
  }
}
if ($subject === ''){
  print json_encode(array('message' => 'El asusnto no puede estar vacío.', 'code' => 0));
  exit();
}
if ($message === ''){
  print json_encode(array('message' => 'El mensaje no puede estar vacío.', 'code' => 0));
  exit();
}

$content="From: $name \nEmail: $email \nMessage: $message";
$recipient_1 = "info1@abcbilingualschool.edu.sv";
$recipient_2 = "website@abcbilingualschool.edu.sv";

$mailheader = "To: ABC Bilingual School <$recipient_2>" . "\r\n";
$mailheader = "From: $name <$email>" . "\r\n";
$mailheader .= "Cc: jromeo.dev@gmail.com" . "\r\n";
$mailheader .= "Reply-to: $name <$email> \r\n";

require 'phpMailer/PHPMailer.php';
require 'phpMailer/SMTP.php';
require 'phpMailer/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';

try {
    //Server settings
    $mail->SMTPDebug = 0;                                       //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                       //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'jromeo.dev@gmail.com';                 //SMTP username
    $mail->Password   = 'xdrokyauqjjexxil';                            //SMTP password
    $mail->SMTPSecure = 'tls';                                  //Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 587;                                    //TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom( $email , $name );
    $mail->addAddress( $recipient_1, 'ABC Bilingual School');
    $mail->addReplyTo( $email , $name );
    $mail->addCC('jromeo.dev@gmail.com');

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = $subject;
    $mail->Body    = $message;

    $mail->send();
    print json_encode(array('message' => 'Email enviado con exito!', 'code' => 1));
    mail($recipient_2, $subject, $content, $mailheader) or die("Error!");
} catch (Exception $e) {
    die('error!' . $e );
    //echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
exit();
?>