<?php

$user = $_GET['user'];
echo "pass:" . $_GET['pass'];
if($user == '1'){
    echo "Hello";

} else
    echo $user;

echo $user == 1 ? "Hello"  : $user;

?>