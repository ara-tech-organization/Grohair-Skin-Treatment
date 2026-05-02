<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// Sanitize inputs
$name    = strip_tags(trim($_POST['name']    ?? ''));
$email   = strip_tags(trim($_POST['email']   ?? ''));
$phone   = strip_tags(trim($_POST['phone']   ?? ''));
$date    = strip_tags(trim($_POST['date']    ?? ''));
$time    = strip_tags(trim($_POST['time']    ?? ''));
$message = strip_tags(trim($_POST['message'] ?? ''));

// Validate required fields
if (empty($name) || empty($email) || empty($phone)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Name, email and phone are required']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid email address']);
    exit;
}

$to      = 'adgrohaircbm@gmail.com';
$subject = 'New Consultation Booking - GroHair Cumbum';

$body  = "New consultation booking request:\n\n";
$body .= "Name    : $name\n";
$body .= "Email   : $email\n";
$body .= "Phone   : $phone\n";
$body .= "Date    : $date\n";
$body .= "Time    : $time\n";
$body .= "Message : $message\n";

$headers  = "From: no-reply@adgrohair.com\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

if (mail($to, $subject, $body, $headers)) {
    echo json_encode(['success' => true, 'message' => 'Booking request sent successfully']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to send email. Please try again.']);
}
