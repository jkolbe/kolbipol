<?php

    //error_reporting(E_ALL);
    //ini_set('display_errors', 1);

    require_once './plugin/mandrill/Mandrill.php'; 
    $mandrill = new Mandrill('MJNKAIVm1NN6Za4zvAi4ng');

    if (filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
      

        $message = array(
            'html' => '<p>Message:</p><p>'.$_POST['message'].'</p>',
            'subject' => $_POST['category'].' - '.$_POST['subject'],
            'from_email' =>  $_POST['email'],
            'from_name' => $_POST['name'],
            'to' => array(
                array(
                    'email' => 'joannakolbe@gmail.com',
                    'name' => 'Kolbipol Inc.',
                    'type' => 'to'
                )
            )
        );
        $result = $mandrill->messages->send($message);

        /*
        $subject = $_POST['category'].' - '.$_POST['subject'];
        $body = "Message: \r\n";
        $body .= $_POST['message']."\r\n\r\n";
        $body .= $_POST['name']."\r\n";
        $body .= $_POST['email']."\r\n";
        mail('joannakolbe@gmail.com', $subject, $body); */

        echo "success";

    } else {
        echo "fail";
    }

?>
