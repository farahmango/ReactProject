<?php
session_start();
$id=$_SESSION["productId"];
include_once ("core.php");

$conn       = mysqli_connect("localhost", "root", "", "react_ecommerce");
$sql        = "SELECT * FROM products where product_id = $id" ;
$result     = mysqli_query($conn, $sql);
$json_array = array();
while($row  = mysqli_fetch_assoc($result)){
	$json_array[] = $row;
}
echo json_encode($json_array);
echo $id;
?>
