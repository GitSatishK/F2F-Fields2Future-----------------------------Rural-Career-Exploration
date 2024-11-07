<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve and sanitize input data
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $password = htmlspecialchars(trim($_POST['pass']));
    $confirmPassword = htmlspecialchars(trim($_POST['confirmPass']));
    $gender = htmlspecialchars(trim($_POST['gender']));
    $dob = htmlspecialchars(trim($_POST['dob']));
    $address = htmlspecialchars(trim($_POST['address']));

    // Validate email format
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format!";
        exit;
    }

    // Validate passwords match and password strength
    if ($password !== $confirmPassword) {
        echo "Passwords do not match!";
        exit;
    }

    if (strlen($password) < 6) {
        echo "Password must be at least 6 characters long!";
        exit;
    }

    // Hash the password (if storing in a database)
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    // Here you can add code to save data to the database
    // For demonstration, we'll just display a success message
    echo "Registration successful!<br>";
    echo "Name: " . $name . "<br>";
    echo "Email: " . $email . "<br>";
    echo "Gender: " . $gender . "<br>";
    echo "Date of Birth: " . $dob . "<br>";
    echo "Address: " . $address . "<br>";

    // Optionally redirect to a thank you page
    // header("Location: thank_you.php");
    // exit;
} else {
    echo "Invalid request method.";
}
?>
