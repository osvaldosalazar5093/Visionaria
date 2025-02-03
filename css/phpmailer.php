<?php
if ($_SERVER['REQUEST_METHOD'] != 'POST') {
    // mensaje de error en JSON.
    echo json_encode(['success' => false, 'message' => 'Método de solicitud no permitido']);
    exit; // Termina la ejecución del script
}

require 'phpmailer/PHPMailer.php';
require 'phpmailer/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;

$name = $_POST['name'] ?? 'anonimo'; // Uso del operador de fusión null de PHP 7+
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];
$service = $_POST['service'];


$body = <<<HTML
    <h1>Contacto desde la web</h1>
    <p>De: $name / $email</p>
    <h3>Mensaje</h3>
    $message
HTML;

$emailAdress= 'info@visionariacompany.com';
$domain = 'https://visionariacompany.com';


$mailer = new PHPMailer();  
$mailer->setFrom($email, $name);
$mailer->addAddress($emailAddress, $domain);
$mailer->Subject = "Mensaje web: $subject";
$mailer->msgHTML($body);
$mailer->AltBody = strip_tags($body);
$mailer->CharSet = 'UTF-8';

if ($mailer->send()) {
    // El correo fue enviado
    echo json_encode(['success' => true, 'message' => 'Correo enviado con éxito']);
} else {
    // El correo no pudo ser enviado
    echo json_encode(['success' => false, 'message' => 'Error al enviar el correo']);
}
