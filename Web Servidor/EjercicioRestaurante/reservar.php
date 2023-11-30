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

$mesa_id = $_GET['mesa_id'];

$query = "SELECT id_usuario_reserva FROM mesas WHERE id = ?";
$stmt = $conexion->prepare($query);
$stmt->bind_param("i", $mesa_id);
$stmt->execute();
$resultado = $stmt->get_result();
$reserva_existente = $resultado->fetch_assoc();

if ($reserva_existente['id_usuario_reserva'] === null) {

    echo "<script>alert('Mesa reservada con éxito.');</script></br> <img src='https://i.pinimg.com/originals/cc/4e/13/cc4e13c7aa8896b068576783e9c379dd.gif'>";
} else {
    echo "<script>alert('Esta mesa ya está reservada. Por favor, elija otra mesa.');</script>";
}

$stmt->close();
$conexion->close();
?>


</div>

</body>
</html>