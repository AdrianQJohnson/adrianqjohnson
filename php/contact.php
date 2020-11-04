<?php
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $email_from = 'AdrianQJohnson.com';
    $email_subject = 'New Message From AdrianQJohnson.com';
    $email_body =   "Name: $firstName $lastName.\n". 
                    "Email: $email.\n". 
                    "Message: $message.\n";

    $to = "adrianqjohnson@gmail.com";
    $headers = "From: $email_from \r\n";
    $headers .= "Reply-To: $email \r\n";

    mail($to,$email_subject,$email_body,$headers);

    header("location: contactme.html");
?>