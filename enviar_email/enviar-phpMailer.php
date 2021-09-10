<?php

$NombrePadre = 'Jose Romeo';
$NombreAlumno = 'Isabella Maria';
$Direccion = 'San Ernesto';
$Telefono = '23568978';
$Celular = '78451236';
$Email = 'jromeo.traffic@gmail.com';

$opt = 'Facebook, Otros';

$Select_1 = 'Parvularia';
$Select_2 = 'Maternal';
$GrupoRadio = 'Empleado publico';
$Colegio = 'Ninguno';
$subject = "Encuesta desde Pagina Web";

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
            "<span>Padre de familia: <strong class='bold'>" . $NombrePadre . "</strong></span><br/>" .
            "<span>Nombre del alumno: <strong class='bold'>" . $NombreAlumno . "</strong></span><br/>" .
            "<span>Dirección: <strong class='bold'>" . $Direccion . "</strong></span><br/>" .
            "<span>Teléfono: <strong class='bold'>" . $Telefono . "</strong></span><br/>" .
            "<span>Celular: <strong class='bold'>" . $Celular . "</strong></span><br/>" .
            "<span>E-mail: <strong class='bold'>" . $Email . "</strong></span>" .
            "<p>&nbsp;</p>" .
            "<br/> <span>1.- ¿Cómo se enteró de nuestra institución?</span> <br/> <strong class='bold'>$opt</strong> <br/>".
            "<br/> <span>2.- ¿Qué sección le interesa?</span> <br/> <strong class='bold'>$Select_1: $Select_2</strong> <br/>".
            "<br/> <span>3.- ¿Sector laboral al que pertenece?</span> <br/> <strong class='bold'>$GrupoRadio</strong> <br/>".
            "<br/> <span>4.- Colegio donde estudia actualmente:</span> <br/> <strong class='bold'>$Colegio</strong>".
            "<p>&nbsp;</p>" .
            "<p><span class='bold'> ABC Bilingual School </span></p>" .
            "<p>&nbsp;</p>" .
            "<p>".
                "<a title='ABC Bilingual School' href='https://abcbilingualschool.edu.sv'></a>". 
            "</p>" .
        "</div>" .
    "</body>" .
"</html>";

$content="<strong>Mensaje enviado desde la página web</strong> <br/><br/> $message";
$recipient = "website@abcbilingualschool.edu.sv";
$ConCopia = "info1@abcbilingualschool.edu.sv";

$mailheader = 'MIME-Version: 1.0' . "\r\n";
$mailheader .= 'Content-type: text/html; charset=utf-8' . "\r\n";
$mailheader .= "From: ABC Bilingual School <$recipient>" . "\r\n";
$mailheader .= "Cc: <$ConCopia>"  . "\r\n";
$mailheader .= "Reply-to: <$Email> \r\n";

require 'phpMailer/PHPMailer.php';
require 'phpMailer/SMTP.php';
require 'phpMailer/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer(true);

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
    $mail->addAddress('admin@design-2u.com', 'ABC Bilingual School');
    $mail->addAddress('website@abcbilingualschool.edu.sv', 'ABC Bilingual School');
    $mail->addReplyTo( $Email , $NombrePadre );
    $mail->addCC('jromeo.hs@gmail.com');
    $mail->addCC('jromeo.dev@gmail.com');

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = $subject;
    $mail->Body    = $message;

    $mail->send();
    print json_encode(array('message' => 'Email enviado con exito!', 'code' => 1));
} catch (Exception $e) {
    die('error' . $e );
    //echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}

// try {
//     //Server settings
//     $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
//     $mail->isSMTP();                                            //Send using SMTP
//     $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
//     $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
//     $mail->Username   = 'jromeo.dev@gmail.com';                     //SMTP username
//     $mail->Password   = 'Hm@170710';                               //SMTP password
//     $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         //Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
//     $mail->Port       = 587;                                    //TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

//     //Recipients
//     $mail->setFrom('jromeo.dev@gmail.com');
//     $mail->addAddress('jromeo.hs@gmail.com', 'Joe User');     //Add a recipient
//     $mail->addCC('jromeo.traffic@gmail.com');

//     //Content
//     $mail->isHTML(true);                                  //Set email format to HTML
//     $mail->Subject = 'Here is the subject';
//     $mail->Body    = 'This is the HTML message body <b>in bold!</b>';
//     $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

//     $mail->send();
//     echo 'Message has been sent';
// } catch (Exception $e) {
//     echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
// }

// $enviado = $mail->send();


// if( $enviado ){
//     print json_encode(array('message' => 'Email enviado con exito!', 'code' => 1));
// }else{
//     print json_encode(array('message' => 'Error en enviado de Email!', 'code' => 0));
// }

?>