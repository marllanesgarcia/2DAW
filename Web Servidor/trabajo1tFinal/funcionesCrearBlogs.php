<?php

$conexion = new mysqli('localhost', 'root', '', 'phasmofobia');

if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['titulo']) && isset($_POST['introduccion']) && isset($_POST['contenido'])) {
    $titulo = $_POST['titulo'];
    $introduccion = $_POST['introduccion'];
    $contenido = $_POST['contenido'];
    
    $insertQuery = $conexion->prepare("INSERT INTO blog (titulo, introduccion, contenido) VALUES (?, ?, ?)");
    $insertQuery->bind_param("sss", $titulo, $introduccion, $contenido);

    if ($insertQuery->execute()) {
        echo "<link rel='stylesheet' type='text/css' href='index.css'><body style='background-color:black;'>";
        echo "<div style='display:block; justify-content:center; padding: 20%; padding-top:5%; padding-bottom:5%; '>
                <a  href='index.php' id='inicioButton'><h1 id='titulo'>Phasmo.GRR 👻</h1></a>
              </div>
              <hr>";
        echo "<h2 style='color:white;'> Blog publicado con éxito </h2>";
        echo "<div style='text-align: center;'>
                <a href='index.php'>
                  <button style='background-color: purple; color: white; font-style: italic;'>Volver</button>
                </a>
              </div>";
        echo "</body>";
        
    } else {
        echo "<link rel='stylesheet' type='text/css' href='index.css'><body style='background-color:black;'>";
        echo "<div style='display:block; justify-content:center; padding: 20%; padding-top:5%; padding-bottom:5%; '>
        <a  href='index.php' id='inicioButton'><h1 id='titulo'>Phasmo.GRR 👻</h1></a>
        </div>
        <hr>";
        echo "<h2 style='color:white;'> Error al publicar el blog: </h2>" . $conexion->error;
        echo "<div style='text-align: center;'>";
        echo " <a href='crearBlog.php'>
        <button style=' background-color: purple; color: white; font-style: italic; justify-content:center;'>Volver</button></a></div>";
        echo "</body>";
    }

    $insertQuery->close();
}

$conexion->close();
?>
