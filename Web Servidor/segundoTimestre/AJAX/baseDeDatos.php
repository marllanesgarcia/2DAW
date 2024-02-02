<?php

$conexion = new mysqli('localhost', 'root', '', 'personas');

if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}

$stmt = $conexion->prepare("SELECT COL5 FROM personas");
    if ($stmt === false) {
        die("Error en la preparación de la consulta: " . $conexion->error);
    }
?>