<?php
session_start();

$mesas = [
    ['id' => 1, 'capacidad' => 4, 'reservada' => false],
    ['id' => 2, 'capacidad' => 2, 'reservada' => false],
    ['id' => 3, 'capacidad' => 6, 'reservada' => false],
];

function mostrarMesasDisponibles($mesas)
{
    echo "Mesas disponibles:\n";
    foreach ($mesas as $mesa) {
        if (!$mesa['reservada']) {
            echo "Mesa {$mesa['id']} - Capacidad: {$mesa['capacidad']} personas\n";
        }
    }
}

function realizarReserva($mesas, $mesaId, $numComensales)
{
    foreach ($mesas as &$mesa) {
        if ($mesa['id'] == $mesaId && !$mesa['reservada']) {
            if (isset($_SESSION['reservas'][$mesaId])) {
                echo "Esta mesa ya fue reservada hoy.\n";
            } else {
                if ($mesa['capacidad'] >= $numComensales) {
                    $mesa['reservada'] = true;
                    $_SESSION['reservas'][$mesaId] = true;
                    echo "Reserva realizada con éxito para la Mesa {$mesa['id']}.\n";
                } else {
                    echo "La capacidad de la mesa no es suficiente para el número de comensales.\n";
                }
            }
            return;
        }
    }
    echo "La mesa seleccionada no está disponible.\n";
}
mostrarMesasDisponibles($mesas);
realizarReserva($mesas, 1, 4);
mostrarMesasDisponibles($mesas);
?>
