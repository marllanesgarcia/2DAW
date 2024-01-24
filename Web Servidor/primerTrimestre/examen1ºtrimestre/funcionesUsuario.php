<?php

$conexion = new mysqli('localhost', 'root', '', 'monkeyisland');

if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}

$nombre = $_POST['nombre'];

$query = "INSERT INTO usuario (nombre) VALUES ('$nombre')";
if ($conexion->query($query) === TRUE) {
            echo "<h3>$nombre :¡me llamo $nombre y soy quien manda en este lugar!</h3>";
                    echo "<h3>Guybrush: Guau, Es un placer conocerte.</h3>";
                    echo "$nombre: Igualmente, ¿Qué te trae por aqui?:
                         <a href='opciones.php'>
                         <button>¡Continuemos con tus opciones!</button>
                         </a>";
    } else {
            $nombre = "XXX";
                    echo "$nombre :<h3>¡me llamo $nombre y soy quien manda en este lugar!</h3>";
                    echo "<h3>Guybrush: Guau, Es un placer conocerte.</h3>";
                    echo "$nombre: Igualmente, ¿Qué te trae por aqui?:</br>
                    <a href='opciones.php'>
                    <button>¡Continuemos con tus opciones!</button>
                    </a>";
    }
    $conexion->close();
?>