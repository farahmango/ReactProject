<?php
require '../../connect.php';
include_once ("core.php");

$sql        = "SELECT * FROM products where product_id = $id" ;
$result     = mysqli_query($db, $sql);
$json_array = array();
while ($row = mysqli_fetch_assoc($result)) {
    $json_array[] = $row;
}

 echo json_encode($json_array);