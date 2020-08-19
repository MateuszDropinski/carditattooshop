<?php
    header("Access-Control-Allow-Origin: *");
    $rest_json = file_get_contents("php://input");
    $_POST = json_decode($rest_json, true);

    if (empty($_POST['name']) && empty($_POST['email'])) die();

    if ($_POST) {

        http_response_code(200);
        $subject = $_POST['name'];
        $to = "mateuszdropinski5@gmail.com";
        $from = $_POST['email'];

        // data

        $msg = $_POST['message'] . "\n\r" . 'Telefon: ' . $_POST['phone'];

        // Headers

        $headers = "MIME-Version: 1.0\r\n";
        $headers.= "Content-type: text/plain; charset=UTF-8\r\n";
        $headers.= "From: <" . $from . ">";

        mail($to, $subject, $msg, $headers);

        }
      else
        {
        echo json_encode(["sent" => false, "message" => "Something went wrong"]);
	}

?>
