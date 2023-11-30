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

<!-- Código para reservar la mesa según de la elección -->


<?php

$conexion = new mysqli('localhost', 'root', '', 'mesas');

if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}

$mesa_id = $_GET['mesa_id'];
$diaSeleccionado = $_GET['dia'];

$query = "SELECT id_usuario_reserva, dia_reserva FROM mesas WHERE id = ?";
$stmt = $conexion->prepare($query);

if (!$stmt) {
    die("Error en la preparación de la consulta: " . $conexion->error);
}

$stmt->bind_param("i", $mesa_id);
$stmt->execute();

if ($stmt->error) {
    die("Error al ejecutar la consulta: " . $stmt->error);
}

$resultado = $stmt->get_result();
$reserva_existente = $resultado->fetch_assoc();

if ($reserva_existente['id_usuario_reserva'] === null || $reserva_existente['dia_reserva'] !== $diaSeleccionado) {
    $idUsuario = $usuario['id'];

    $updateQuery = "UPDATE mesas SET id_usuario_reserva = ?, dia_reserva = ? WHERE id = ?";
    $stmtUpdate = $conexion->prepare($updateQuery);

    if (!$stmtUpdate) {
        die("Error en la preparación de la consulta de actualización: " . $conexion->error);
    }

    $stmtUpdate->bind_param("isi", $idUsuario, $diaSeleccionado, $mesa_id);
    $stmtUpdate->execute();

    if ($stmtUpdate->error) {
        die("Error al ejecutar la consulta de actualización: " . $stmtUpdate->error);
    }

    $stmtUpdate->close();

    echo "<script>alert('Mesa reservada con éxito.'); window.location.href = 'inicio.php';</script>";
} else {
    echo "<script>alert('Esta mesa ya está reservada para el día seleccionado. Por favor, elija otra mesa o día.'); window.location.href = 'inicio.php';</script>";
}

$conexion->close();
?>

</div>

</body>
</html>