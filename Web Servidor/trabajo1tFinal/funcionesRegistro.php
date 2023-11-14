<?php

$conexion = new mysqli('localhost', 'root', '', 'blog');


if ($conexion->connect_error) {
    alert("Error de conexión: " . $conexion->connect_error);
}

$usuario = $_POST['usuario'];
$contrasena = $_POST['contrasena'];

$query = "INSERT INTO usuarios (usuario, contrasena) VALUES ('$usuario', '$contrasena')";

if ($conexion->query($query) === TRUE) {
echo "Usuario registrado con éxito";

 /* echo '¡Bienvenido, ' . $nombre . '! El registro fue exitoso.';
$result = $conexion->query("SELECT nombre FROM usuarios WHERE id = $ultimoID");
$fila = $result->fetch_assoc();
$nombreUsuario = $fila['nombre']; */

} else {
    echo "Error al registrar el usuario: " . $conexion->error;
}

$conexion->close();

?>