<?php
session_start();

$conexion = new mysqli('localhost', 'root', '', 'monkeyisland');

if ($conexion->connect_error) {
    die("Conexión fallida: " . $conexion->connect_error);
}

$dado = math_rand (1,6);

include 'funcionesUsuario.php';

$nombre = $_POST['nombre'];
$guybrush;

$num1 = rand(1,1000000);
$num2 = mt_rand(1,1000000);

echo '<div>
<p>El número aleatorio de' $nombre ' es:' $num1 . '</p></br>
<p>El número aleatorio de' $guybrush ' es: ' . $num2 . '</p></br>
</div>';

    if ($num2 > $num1){
        echo "<p>Ha ganado GuyBrush!!! Perdiste!!</p>";
    }else{
        echo "<p>Has ganado, enhorabuena!!!!</p></br>
            <a href='opciones.php'>Volver</a>";
    }
?>