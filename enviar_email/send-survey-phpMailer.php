<?php
$NombrePadre = $_POST['NombrePadre'];
$NombreAlumno = $_POST['NombreAlumno'];
$Direccion = $_POST['Direccion'];
$Telefono = $_POST['Telefono'];
$Celular = $_POST['Celular'];
$Email = $_POST['Email'];

if(isset($_POST['CheckInput'])){
    $opt = $_POST['CheckInput'];
}

$Select_1 = $_POST['Select_1'];
$Select_2 = $_POST['Select_2'];
$GrupoRadio = $_POST['GrupoRadio'];
$Colegio = $_POST['Colegio'];
$subject = "Survey from Web Page";

header('Content-Type: application/json');
if ($NombrePadre === ''){
    print json_encode(array('message' => 'Parent name field cannot be empty.', 'code' => 0));
    exit();
}
if ($NombreAlumno === ''){
    print json_encode(array('message' => 'The student name field cannot be empty.', 'code' => 0));
    exit();
}
if ($Telefono === ''){
    print json_encode(array('message' => 'The phone field cannot be empty.', 'code' => 0));
    exit();
}
if ($Celular === ''){
    print json_encode(array('message' => 'The mobile field cannot be empty.', 'code' => 0));
    exit();
}

if ($Select_1 === ''){
    print json_encode(array('message' => 'The answer to question 2 is required.', 'code' => 0));
    exit();
}

if ($Email === ''){
    print json_encode(array('message' => 'Email field cannot be empty.', 'code' => 0));
    exit();
} else {
  if (!filter_var($Email, FILTER_VALIDATE_EMAIL)){
        print json_encode(array('message' => 'Invalid email format.', 'code' => 0));
        exit();
  }
}
if ($Colegio === ''){
  print json_encode(array('message' => 'The college field cannot be empty.', 'code' => 0));
  exit();
}

$message = "<html>".
    "<head><title>Email de Prueba</title>".
        "<style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'Roboto', sans-serif;
            font-size: 16px;
            font-weight: 300;
            color: #888;
            background-color:rgba(230, 225, 225, 0.5);
            line-height: 30px;
            text-align: center;
        }
        .contenedor{
            width: 80%;
            min-height:auto;
            text-align: center;
            margin: 0 auto;
            padding: 40px;
            background: #ececec;
            border-top: 3px solid #fbb802;
        }
        .bold{
            color:#333;
            font-size:15px;
            font-weight:bold;
        }
        img{
            margin-left: auto;
            margin-right: auto;
            display: block;
            padding:0px 0px 20px 0px;
        }
        </style>
    </head>".
    "<body>" .
        "<div class='contenedor'>".
            "<p>&nbsp;</p>" .
            "<p>&nbsp;</p>" .
            "<span>Parent's Name: <strong class='bold'>" . $NombrePadre . "</strong></span><br/>" .
            "<span>Student's name: <strong class='bold'>" . $NombreAlumno . "</strong></span><br/>" .
            "<span>Adress: <strong class='bold'>" . $Direccion . "</strong></span><br/>" .
            "<span>Phone: <strong class='bold'>" . $Telefono . "</strong></span><br/>" .
            "<span>Mobile: <strong class='bold'>" . $Celular . "</strong></span><br/>" .
            "<span>E-mail: <strong class='bold'>" . $Email . "</strong></span>" .
            "<p>&nbsp;</p>" .
            "<br/> <span>1.- How did you hear about our institution?:</span> <br/> <strong class='bold'>$opt</strong> <br/>".
            "<br/> <span>2.- Which section are you interested in?:</span> <br/> <strong class='bold'>$Select_1: $Select_2</strong> <br/>".
            "<br/> <span>3.- Labor sector to which it belongs:</span> <br/> <strong class='bold'>$GrupoRadio</strong> <br/>".
            "<br/> <span>4.- College where you currently study:</span> <br/> <strong class='bold'>$Colegio</strong>".
            "<p>&nbsp;</p>" .
            "<p><span class='bold'> ABC Bilingual School </span></p>" .
            "<p>&nbsp;</p>" .
            "<p>".
                "<a title='ABC Bilingual School' href='https://abcbilingualschool.edu.sv'>https://abcbilingualschool.edu.sv</a>". 
            "</p>" .
        "</div>" .
    "</body>" .
"</html>";


$content="<strong>Message sent from the website</strong> <br/><br/> $message";
$recipient_1 = "info1@abcbilingualschool.edu.sv";
$recipient_2 = "website@abcbilingualschool.edu.sv";

$mailheader = 'MIME-Version: 1.0' . "\r\n";
$mailheader .= 'Content-type: text/html; charset=utf-8' . "\r\n";
$mailheader .= "To: ABC Bilingual School <$recipient_2>" . "\r\n";
$mailheader .= "From: $NombrePadre <$Email>" . "\r\n";
$mailheader .= "Reply-to: <$Email> \r\n";

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
    $mail->setFrom( $Email , $NombrePadre );
    $mail->addAddress( $recipient_1, 'ABC Bilingual School');
    $mail->addReplyTo( $Email , $NombrePadre );
    $mail->addCC('jromeo.dev@gmail.com');

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = $subject;
    $mail->Body    = $message;

    $mail->send();
    print json_encode(array('message' => 'Email sent successfully!', 'code' => 1));
    mail($recipient_2, $subject, $content, $mailheader) or die("Error!");
} catch (Exception $e) {
    die('error!' . $e );
    //echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}

exit();
?>