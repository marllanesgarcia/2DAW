<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="mesas.css">
    <title>Gestor de Reservas</title>
</head>
<body>

<div style="text-align: center;" id="div1">
<?php

$conexion = new mysqli('localhost', 'root', '', 'mesas');
$mesas = [
    ['id' => 0, 'capacidad' => 2, 'reservada' => false],
    ['id' => 1, 'capacidad' => 2, 'reservada' => false],
    ['id' => 2, 'capacidad' => 4, 'reservada' => false],
    ['id' => 3, 'capacidad' => 4, 'reservada' => false],
    ['id' => 4, 'capacidad' => 6, 'reservada' => false],
    ['id' => 5, 'capacidad' => 6, 'reservada' => false],
    ['id' => 6, 'capacidad' => 8, 'reservada' => false],
    ['id' => 7, 'capacidad' => 8, 'reservada' => false],
];
$imagenesMesas = [
    2 => 'mesa2.png',
    4 => 'mesa4.png',
    6 => 'mesa6.png',
    8 => 'mesa8.png',
];
if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}

/* if (isset($_POST['consultar_mesas'])) {
    $numComensales = intval($_POST['comensales']);

    $query = "SELECT * FROM mesas WHERE capacidad >= ? AND id_usuario_reserva IS NULL";
    $stmt = $conexion->prepare($query);
    $stmt->bind_param("i", $numComensales);
    $stmt->execute();
    $resultado = $stmt->get_result();

    echo "<h2>Mesas Disponibles para $numComensales comensales:</h2>";
    
    if ($resultado->num_rows === 0) {
        echo "<p>No hay mesas disponibles para el número de comensales seleccionado.</p>";
    } else {
        echo "<ul>";
        while ($fila = $resultado->fetch_assoc()) {
            echo "Mesa ID: {$fila['id']}, Capacidad: {$fila['capacidad']}</br><a href='reservar.php?mesa_id={$fila['id']}'><img style='width: 120px; height: 120px;' src='{$imagenesMesas[$fila['capacidad']]}'></a></br>";
            }
        }
        echo "</ul>";

    $stmt->close();
}

$conexion->close(); */

if (isset($_POST['consultar_mesas'])) {
    $numComensales = intval($_POST['comensales']);

    $query = "SELECT * FROM mesas WHERE capacidad >= ? AND id_usuario_reserva IS NULL";
    $stmt = $conexion->prepare($query);
    $stmt->bind_param("i", $numComensales);
    $stmt->execute();
    $resultado = $stmt->get_result();

    echo "<h2>Mesas Disponibles para $numComensales comensales:</h2>";
    
    if ($resultado->num_rows === 0) {
        echo "<p>No hay mesas disponibles para el número de comensales seleccionado.</p>";
    } else {
        echo "<ul>";
        while ($fila = $resultado->fetch_assoc()) {
                echo "Mesa ID: {$fila['id']}, Capacidad: {$fila['capacidad']}</br><a href='reservar.php?mesa_id={$fila['id']}'><img style='width: 120px; height: 120px;' src='{$imagenesMesas[$fila['capacidad']]}'></a></br>";
            }
        }
        echo "</ul>";

    $stmt->close();
}


?>

</div>

</body>
</html>
