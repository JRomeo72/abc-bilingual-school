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
$recipient = "website@abcbilingualschool.edu.sv";
$ConCopia = "info1@abcbilingualschool.edu.sv";

$mailheader = "From: ABC Bilingual School <$recipient>" . "\r\n";
$mailheader .= "Cc: <$ConCopia>"  . "\r\n";
$mailheader .= "Reply-to: <$Email> \r\n";

mail($recipient, $subject, $content, $mailheader) or die("Error!");
print json_encode(array('message' => 'Email enviado con exito!', 'code' => 1));
exit();
?>