<?php
// sendemail_form.php
declare(strict_types=1);
error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: contact_form.html?status=error');
    exit;
}

// Honeypot spam protection
if (!empty($_POST['website'] ?? '')) {
    header('Location: contact_form.html?status=sent');
    exit;
}

// Collect and validate input
$name = trim($_POST['name'] ?? '');
$email = filter_var($_POST['email'] ?? '', FILTER_VALIDATE_EMAIL);
$message = trim($_POST['message'] ?? '');

if (!$email || empty($message) || empty($name)) {
    header('Location: contact_form.html?status=error');
    exit;
}

// Sanitize data
$name = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
$email = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
$message = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');

// Create message entry
$timestamp = date('Y-m-d H:i:s');
$ip = $_SERVER['HTTP_X_FORWARDED_FOR'] ?? $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$userAgent = $_SERVER['HTTP_USER_AGENT'] ?? 'unknown';

$messageData = [
    'timestamp' => $timestamp,
    'name' => $name,
    'email' => $email,
    'message' => $message,
    'ip' => $ip,
    'user_agent' => $userAgent
];

// Get the absolute path to the current directory
$currentDir = __DIR__;  // This gets the directory where this PHP file is located
$messagesDir = $currentDir . '/messages';
$messagesFile = $messagesDir . '/messages.json';

// Debug information (you can remove this later)
error_log("Current directory: " . $currentDir);
error_log("Messages directory: " . $messagesDir);
error_log("Messages file: " . $messagesFile);

// Create messages directory if it doesn't exist
if (!is_dir($messagesDir)) {
    if (!mkdir($messagesDir, 0755, true)) {
        error_log("Failed to create messages directory: " . $messagesDir);
        header('Location: contact_form.html?status=error');
        exit;
    }
}

// Create .htaccess to protect messages directory
$htaccessFile = $messagesDir . '/.htaccess';
if (!file_exists($htaccessFile)) {
    $htaccessContent = "Order Deny,Allow\nDeny from all\n";
    if (!file_put_contents($htaccessFile, $htaccessContent)) {
        error_log("Failed to create .htaccess file: " . $htaccessFile);
    }
}

try {
    // Load existing messages
    $messages = [];
    if (file_exists($messagesFile)) {
        $content = file_get_contents($messagesFile);
        if ($content) {
            $messages = json_decode($content, true) ?? [];
        }
    }
    
    // Add new message
    $messages[] = $messageData;
    
    // Keep only last 100 messages to prevent file from getting too large
    if (count($messages) > 100) {
        $messages = array_slice($messages, -100);
    }
    
    // Save messages
    $result = file_put_contents($messagesFile, json_encode($messages, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
    
    if ($result === false) {
        throw new Exception('Failed to save message to: ' . $messagesFile);
    }
    
    error_log("Message saved successfully to: " . $messagesFile);
    header('Location: contact_form.html?status=sent');
    
} catch (Exception $e) {
    error_log('Contact form error: ' . $e->getMessage());
    header('Location: contact_form.html?status=error');
}

exit;
?>