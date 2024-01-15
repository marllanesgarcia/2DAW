<?php
$conexion = new mysqli('localhost', 'root', '', 'appSocial');
if ($conexion->connect_error) {
    die("La conexión a la base de datos falló: " . $conexion->connect_error);
}

$createTableQuery = "CREATE TABLE IF NOT EXISTS libros (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    autor VARCHAR(255) NOT NULL,
    critica TEXT,
    fecha_publicacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)";

$conexion->query($createTableQuery);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $titulo = $_POST["titulo"];
    $autor = $_POST["autor"];
    $critica = $_POST["critica"];

    $insertQuery = "INSERT INTO libros (titulo, autor, critica) VALUES ('$titulo', '$autor', '$critica')";
    $conexion->query($insertQuery);
}

$selectQuery = "SELECT * FROM libros ORDER BY fecha_publicacion DESC";
$result = $conexion->query($selectQuery);

?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mini Red Social de Lectura</title>
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>

<div class="container mt-5">

    <h2 class="mb-4">Críticas de libros:</h2>
    <?php
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            echo "<div class='card mb-3'>";
            echo "<div class='card-body'>";
            echo "<h3 class='card-title'>{$row["titulo"]} - {$row["autor"]}</h3>";
            echo "<p class='card-text'>{$row["critica"]}</p>";
            echo "<p class='card-text'><small class='text-muted'>Fecha de publicación: {$row["fecha_publicacion"]}</small></p>";
            echo "</div>";
            echo "</div>";
        }
    } else {
        echo "<p class='text-muted'>No hay críticas disponibles.</p>";
    }

    $conexion->close();
    ?>

</div>

</body>
</html>