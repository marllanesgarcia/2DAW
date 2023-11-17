<?php
// Conexión a la base de datos
$conexion = new mysqli('localhost', 'root', '', 'tienda');

if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}

$usuario = $_POST['usuario'];
$password = $_POST['password'];

// Insertar datos en la tabla de usuarios
$query = "INSERT INTO usuarios (nombre, password) VALUES ('$usuario', '$password')";

if ($conexion->query($query) === TRUE) {
    echo "<body style= 'background-color: #c9c5e7;'>
    <div style= 'display:block; justify-content:center; padding: 10%; '>
        <h2>
        Usuario registrado con éxito.
        ¡Bienvenido, " . $usuario . "! El registro fue exitoso.
        </h2>
        <br><br>
        <a href='registrarse.php'>
        <button style=' background-color: #1b126d; color: white; font-style: italic;'>Volver a Registrarse</button></a>
        <img src='https://i.pinimg.com/originals/cc/4e/13/cc4e13c7aa8896b068576783e9c379dd.gif'>
    </div>
    </body>
    ";
} else {
    echo "<body style= 'background-color: #c9c5e7;'>
    <div style= 'display:block; justify-content:center; padding: 10%; '>
        <h2>
        Error al registrar el usuario: " . $conexion->error."
        </h2>
        <br><br>
        <a href='registrarse.php'>
        <button style=' background-color: #1b126d; color: white; font-style: italic;'>Volver a Registrarse</button></a>
        <img src='https://media.tenor.com/o9owbF_iALAAAAAC/sad-cat.gif'>
    </div>
    </body>
    ";
    
    
    
}

$conexion->close();
?>


