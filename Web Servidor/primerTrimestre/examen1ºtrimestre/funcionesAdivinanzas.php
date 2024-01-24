<?php
session_start();

$conexion = new mysqli('localhost', 'root', '', 'monkeyisland');

if ($conexion->connect_error) {
    die("Conexión fallida: " . $conexion->connect_error);
}

$adivinanzas = array(
    "Es redondo como el mundo y con él llevas el rumbo." => "timon",
    "Papel secreto con X que necesitan los verdaderos piratas." => "mapa",
    "Si tengo un plátano cerca, seguro que me lo como. Soy mascota de piratas, ya sabes que soy un....." => "mono",
    "Tiene pata de palo, un ojo a estribor, un diente de oro y un barco con cañón." => "pirata",
    "¿Qué necesita un pirata para ser un verdadero bribón: loro o gato?" => "loro"
);

if (empty($_SESSION['adivinanzas_mostradas'])) {
    $_SESSION['adivinanzas_mostradas'] = array();
}

$preguntasRestantes = array_diff_key($adivinanzas, array_flip($_SESSION['adivinanzas_mostradas']));

if (!empty($preguntasRestantes)) {
    $preguntaActual = array_rand($preguntasRestantes);
    $_SESSION['pregunta_actual'] = $preguntaActual;

    echo "<h3>Adivinanza:</h3>";
    echo "<p>$preguntaActual</p>";
    echo "<form method='post'>";
    echo "<input type='text' name='respuestaUsuario' placeholder='Escribe tu respuesta'>";
    echo "<input type='submit' value='Enviar'>";
    echo "</form>";

    if (isset($_POST['respuestaUsuario'])) {
        $respuestaUsuario = ($_POST['respuestaUsuario']);
        $respuestaCorrecta = $adivinanzas[$_SESSION['pregunta_actual']];

        if ($respuestaUsuario == $respuestaCorrecta) {
            echo "<p>¡Correcto! ¡Bien hecho, $nombreUsuario!</p>";
        
            $idUsuario = obtenerIdUsuario($conexion, $nombreUsuario);
            if ($idUsuario !== false) {
                $puntosActuales = obtenerPuntosUsuario($conexion, $idUsuario);
                $nuevosPuntos = $puntosActuales + 2;
                actualizarPuntosUsuario($conexion, $idUsuario, $nuevosPuntos);
            } else {
                echo "<p>Error al obtener el ID del usuario.</p>";
            }
        } else {
            echo "<p>¡Incorrecto! El programa ha terminado.</p></br>
            <a href='opciones.php'>Volver</a>";
             session_destroy();
        }
    }
} else {
    echo "<p>¡Felicidades! Has respondido todas las adivinanzas correctamente.</p></br>
            <a href='opciones.php'>Volver</a>";
     session_destroy();
}

$conexion->close();

function obtenerIdUsuario($conexion, $nombreUsuario) {
    $sqlid = "SELECT id FROM usuario WHERE nombre = '$nombreUsuario'";
    $resultadoid = $conexion->query($sqlid);

    if ($resultadoid) {
        $fila = $resultadoid->fetch_assoc();
        if ($fila) {
            return $fila['id'];
        }
    }
    return false;
}

function obtenerPuntosUsuario($conexion, $id) {
    $sql = "SELECT puntos_puntuacion FROM usuario WHERE id = $id";
    $resultado = $conexion->query($sql);

    if ($resultado) {
        $fila = $resultado->fetch_assoc();
        if ($fila) {
            return $fila['puntos_puntuacion'];
        }
    }
    return 0;
}

function actualizarPuntosUsuario($conexion, $id, $nuevosPuntos) {
    $sql = "UPDATE usuario SET puntos_puntuacion = $nuevosPuntos WHERE id = $id";
    $resultado = $conexion->query($sql);
}
?>
