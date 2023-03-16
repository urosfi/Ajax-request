<?php 
require "bootstrap.php";
$json=file_get_contents('php://input');
$id=json_decode($json);

echo json_encode($query->delete_record($id));


?>