<?php

require '../../connect.php';
header("Access-Control-Allow-Origin: http://localhost:3000");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$postdata = file_get_contents("php://input");
echo $postdata ;
if (isset($postdata) && !empty($postdata)) {
    $sql      = "SELECT * FROM products where product_id = $postdata ";
	$result     = mysqli_query($db, $sql);
	$row = mysqli_fetch_assoc($result);
	echo $row;

    if (mysqli_query($db, $sql)) {
        http_response_code(201);
    } else {
        http_response_code(422);
    }
}

?>
