<?php
// Conexión a la base de datos
$conexion = new mysqli('localhost', 'mar', 'password', 'alumnos');

if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}

$nombre = $_POST['usuario'];
$email = $_POST['password'];
$password = password_hash($_POST['password'], PASSWORD_DEFAULT);

// Insertar datos en la tabla de usuarios
$query = "INSERT INTO usuarios (nombre, password) VALUES ('$nombre', '$password')";

if ($conexion->query($query) === TRUE) {
    echo "Usuario registrado con éxito";
} else {
    echo "Error al registrar el usuario: " . $conexion->error;
}

$conexion->close();
?>
