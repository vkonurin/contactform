 ​<?php

    $email = $_POST['email'];
    $name = $_POST['name'];
    $message = $_POST['message'];

    $to = "ckonurin@gmail.com";
    $subject = "From the site visitor";
    $text =  "Written by: $name\n Contact email - $email\n\n Text of the letter: $message\n";

    $header = "Content-type: text/html; charset=utf-8\r\n";
    $header .= "MIME-Version: 1.0\r\n";

    $sending = mail($to, $subject, $text, $headers);

    if($sending) echo "Letter sent! thank you message.";

    ?>
