<?php
// Endpoint de contacto — envía el formulario al buzón de la clienta usando el
// propio servidor de correo de ANW (mismo dominio). Sin servicios externos.
// Se sirve desde la raíz del sitio en Plesk: POST a /contact.php

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['error' => 'method not allowed']);
  exit;
}

// Acepta JSON (fetch) o form-urlencoded
$raw = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!is_array($data)) { $data = $_POST; }

function field($d, $k) { return isset($d[$k]) ? trim((string) $d[$k]) : ''; }

// Honeypot anti-spam: si el campo oculto viene relleno, fingimos éxito y salimos.
if (field($data, 'website') !== '') {
  echo json_encode(['ok' => true]);
  exit;
}

$nombre   = field($data, 'nombre');
$empresa  = field($data, 'empresa');
$telefono = field($data, 'telefono');
$email    = field($data, 'email');
$mensaje  = field($data, 'mensaje');

if ($nombre === '' || !filter_var($email, FILTER_VALIDATE_EMAIL) || $mensaje === '') {
  http_response_code(400);
  echo json_encode(['error' => 'datos incompletos o email no valido']);
  exit;
}

$to      = 'info@rmdislovall.com';
$subject = 'Formulario web';

$body =
  "Nombre: {$nombre}\n" .
  ($empresa !== '' ? "Empresa: {$empresa}\n" : '') .
  "Teléfono: {$telefono}\n" .
  "Email: {$email}\n\n" .
  "Mensaje:\n{$mensaje}\n";

// From con dirección del propio dominio (mejor entregabilidad local); Reply-To
// al remitente real para poder responderle directamente desde el buzón.
$headers = [];
$headers[] = 'From: Web RM Dislovall <web@rmdislovall.com>';
$headers[] = 'Reply-To: ' . $email;
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-Type: text/plain; charset=UTF-8';

$subjectEnc = '=?UTF-8?B?' . base64_encode($subject) . '?=';

$ok = @mail($to, $subjectEnc, $body, implode("\r\n", $headers));

if ($ok) {
  echo json_encode(['ok' => true]);
} else {
  http_response_code(500);
  echo json_encode(['error' => 'no se pudo enviar el correo']);
}
