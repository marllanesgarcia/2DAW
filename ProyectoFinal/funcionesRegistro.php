<?php
$conexion = new mysqli('localhost', 'root', '', 'phasmofobia');

if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}

$usuario = $_POST['usuario'];
$contrasena = $_POST['contrasena'];
$rol = $_POST['rol'];

$query = "INSERT INTO usuarios (usuario, contrasena, rol) VALUES ('$usuario', '$contrasena','$rol')";

    if ($conexion->query($query) === TRUE) {
                echo "<body style= 'background-color: black; color:white;'>
                    <div style= 'display:block; justify-content:center; padding: 20%; padding-top:5%; padding-bottom:5%; '>
                        <h2>
                        Usuario registrado con éxito.
                        ¡Bienvenido, " . $usuario . "! El registro fue exitoso. <br>
                        ¡¡Por favor, inicia sesion!!
                        </h2>
                        <br><br>
                        <a href='index.php'>
                        <button style=' background-color: purple; color: white; font-style: italic;'>Volver</button></a>
                        <img src='https://i.pinimg.com/originals/cc/4e/13/cc4e13c7aa8896b068576783e9c379dd.gif'>
                    </div>
                    </body>";
            } else {
                echo "<body style= 'background-color: black; color:white;'>
                    <div style= 'display:block; justify-content:center; padding: 10%; '>
                        <h2>
                        Error al registrar el usuario: " . $conexion->error."
                        </h2>
                        <br><br>
                        <a href='index.php'>
                        <button style=' background-color: purple; color: white; font-style: italic;'>Volver</button></a>
                        <img src='https://i.pinimg.com/originals/57/f1/fe/57f1fe09982e0a9216a01862a29fa474.gif' style='width:200px; heigth:200px;'>
                    </div>
                    </body>";
            }
    $conexion->close();

?>