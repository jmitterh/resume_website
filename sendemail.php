<!-- sendemail.php -->
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $message = $_POST['message'];
    $headers = 'From: ' . $email . "\r\n" .
    'Reply-To: ' . $email . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

    mail('jp86mitter@gmail.com', 'Website Contact Submission', $message, $headers);
}
?>