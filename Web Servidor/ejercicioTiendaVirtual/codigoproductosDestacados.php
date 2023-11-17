<?php
$conexion = new mysqli('localhost', 'root', '', 'tienda');

// Verificar la conexión
if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}

    $stmt = $conexion->prepare("SELECT id, nombre, precio, destacado, categoria FROM usuarios");
        if ($stmt === false) {
            die("Error en la preparación de la consulta: " . $conexion->error);
        }

?>