<?php

$nombre = $_GET["nombre"];
var_dump($nombre);
$password =  $_GET["password"];
var_dump($password);
    if($nombre == "admin"&& $password == "admin"){
        $respuesta = "bienvenido";
    }else{
        $respuesta = "no aceptado";
    }

    echo $respuesta;
?>