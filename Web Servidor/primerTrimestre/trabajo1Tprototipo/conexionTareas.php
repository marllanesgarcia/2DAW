<?php
$conexion = new mysqli('localhost', 'root', '', 'tareas');

// Verificar la conexión
if ($conexion->connect_error) {
    die("Error de conexión a la base de datos: " . $conexion->connect_error);
}
?>