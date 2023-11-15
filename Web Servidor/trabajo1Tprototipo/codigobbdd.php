<?php
// Conexión a la base de datos
$conexion = new mysqli('localhost', 'root', '', 'alumnos');

if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}

$nombre = $_POST['usuario'];
$password = $_POST['password'];

// Insertar datos en la tabla de usuarios
$query = "INSERT INTO usuarios (usuario, password) VALUES ('$nombre', '$password')";

if ($conexion->query($query) === TRUE) {
    echo "Usuario registrado con éxito";
     echo '¡Bienvenido, ' . $nombre . '! El registro fue exitoso.';

} else {
    echo "Error al registrar el usuario: " . $conexion->error;
}

$conexion->close();
?>


