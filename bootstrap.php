<?php

$config =require "configure.php";
require "CLASS/Connection.Class.php";

$db=Connection::connect($config['DATABASE']);
require "CLASS/QueryBuilder.Class.php";
$query=new QueryBuilder($db);
?>