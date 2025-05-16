<?php
$to = 'heydarzade.h@next-on.pro';
$subject = 'New Application from Website';

$name = htmlspecialchars($_POST['name'] ?? '');
$email = htmlspecialchars($_POST['email'] ?? '');
$phone = htmlspecialchars($_POST['phone'] ?? '');
$position = htmlspecialchars($_POST['position'] ?? '');
$message = htmlspecialchars($_POST['Message'] ?? '');

$body = "Name: $name\nEmail: $email\nPhone: $phone\nPosition: $position\nMessage:\n$message";

$hasFile = isset($_FILES['file']) && $_FILES['file']['error'] === UPLOAD_ERR_OK;

$headers = "From: $email";

if ($hasFile) {
    $file_tmp = $_FILES['file']['tmp_name'];
    $file_name = basename($_FILES['file']['name']);
    $file_data = file_get_contents($file_tmp);
    $file_encoded = chunk_split(base64_encode($file_data));

    $boundary = md5(time());

    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "From: $email\r\n";
    $headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"";

    $body = "--$boundary\r\n";
    $body .= "Content-Type: text/plain; charset=utf-8\r\n\r\n";
    $body .= "Name: $name\nEmail: $email\nPhone: $phone\nPosition: $position\nMessage:\n$message\r\n";
    $body .= "--$boundary\r\n";
    $body .= "Content-Type: application/octet-stream; name=\"$file_name\"\r\n";
    $body .= "Content-Transfer-Encoding: base64\r\n";
    $body .= "Content-Disposition: attachment; filename=\"$file_name\"\r\n\r\n";
    $body .= $file_encoded . "\r\n";
    $body .= "--$boundary--";
}

mail($to, $subject, $body, $headers);
http_response_code(200);