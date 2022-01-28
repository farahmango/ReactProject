<?php
$servername = "localhost";
$username = "root";
$password = "";
$database= "react_ecommerce";
 
// Create connection
$db = mysqli_connect($servername, $username, $password, $database);
 
// Check connection
if ($db->connect_error) {
  die("Connection failed: " . $db->connect_error);
}


