<?php 
require "bootstrap.php";

$json=file_get_contents('php://input');
$data=json_decode($json);
echo $query->save($data);





?>