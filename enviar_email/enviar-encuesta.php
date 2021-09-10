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
$subject = "Encuesta desde Pagina Web";

header('Content-Type: application/json');
if ($NombrePadre === ''){
    print json_encode(array('message' => 'El campo nombre del padre no puede estar vacío.', 'code' => 0));
    exit();
}
if ($NombreAlumno === ''){
    print json_encode(array('message' => 'El campo nombre del alumno no puede estar vacío.', 'code' => 0));
    exit();
}
if ($Telefono === ''){
    print json_encode(array('message' => 'El campo teléfono no puede estar vacío.', 'code' => 0));
    exit();
}
if ($Celular === ''){
    print json_encode(array('message' => 'El campo celular no puede estar vacío.', 'code' => 0));
    exit();
}

if ($Select_1 === ''){
    print json_encode(array('message' => 'La respuesta a la pregunta 2 es requerida.', 'code' => 0));
    exit();
}

if ($Email === ''){
    print json_encode(array('message' => 'El campo Email no puede estar vacío.', 'code' => 0));
    exit();
} else {
  if (!filter_var($Email, FILTER_VALIDATE_EMAIL)){
        print json_encode(array('message' => 'Formato de Email invalido.', 'code' => 0));
        exit();
  }
}
if ($Colegio === ''){
  print json_encode(array('message' => 'El campo colegio no puede estar vacío.', 'code' => 0));
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
                "<a title='ABC Bilingual School' href='https://abcbilingualschool.edu.sv'>https://abcbilingualschool.edu.sv</a>". 
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

mail($recipient, $subject, $content, $mailheader) or die("Error!");
print json_encode(array('message' => 'Email enviado con exito!', 'code' => 1));
exit();
?>