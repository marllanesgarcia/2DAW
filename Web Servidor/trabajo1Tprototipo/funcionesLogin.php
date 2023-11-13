<?php
include ("./funciones.php");
$nombre = $_POST["nombre"];
$contrasena = $_POST["contrasena"];

conectar();

$sql = "INSERT INTO alumnos (nombre, contrasena) 
        VALUES ('$nombre', '$contrasena')";

$resultado = $conexion->query($sql);


volver();

?>