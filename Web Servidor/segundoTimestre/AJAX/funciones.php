<?php
//include ("./baseDeDatos.php");

$conexion = new mysqli('localhost', 'root', '', 'personas');

if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}

$stmt = $conexion->prepare("SELECT COL2, COL3, COL5 FROM personas");
    if ($stmt === false) {
        die("Error en la preparación de la consulta: " . $conexion->error);
    }


$filtradas = array_filter($personas, function($persona) use ($sexo) {
    return $persona[$stmt] === $sexo;
});

foreach ($filtradas as $persona) {
    echo "<p>{$persona['COL2']} ({$persona['COL5']})</p>";
}

function filtrar($stmt){
echo "<h1>Listado de Personas</h1>";
echo "<div id='listado'>";
while ($row = $result->fetch_assoc()) {
    echo "<p>{$row['COL2']} {$row['COL3']} ({$row['COL5']})</p>";
}
echo "</div>";
}
$stmt->close();
$conexion->close();
?>
