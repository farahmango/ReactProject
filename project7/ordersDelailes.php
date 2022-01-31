<?php
require 'connect.php';
header("Access-Control-Allow-Origin: http://localhost:3000");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$postdata = file_get_contents("php://input");
echo $postdata;
if (isset($postdata) && !empty($postdata)) {
    $request = json_decode($postdata);
   print_r ($request);
    foreach ($request as $product) { 
       // print_r($product->order_id);
            $product_id = $product->product_id;
            $order_id   = $product->order_id;
            $quantity   = $product->quantity;
            $sql        = "INSERT INTO  order_details (order_id, product_id, product_quantity ) VALUES
                          ( $order_id,$product_id, $quantity)";
         echo $sql;
        
    }
    if (mysqli_query($db, $sql)) {
        http_response_code(201);
    } else {
        http_response_code(422);
    }
}
