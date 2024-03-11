<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
   
    $cualidad1 = $_POST['cualidad1'];
    $cualidad2 = $_POST['cualidad2'];

    $casaAsignada = determinarCasa($cualidad1, $cualidad2);
    echo $casaAsignada;
}

function determinarCasa($cualidad1, $cualidad2) {
   
    if ($cualidad1 === 'astuto' && $cualidad2 === 'malvado') {
        return 'Slytherin';
    } elseif ($cualidad1 === 'valiente' && $cualidad2 != 'malvado') {
        return 'Gryffindor';
    } elseif ($cualidad1 === 'inteligente' || $cualidad2 === 'estudioso') {
        return 'Ravenclaw';
    }
    return 'Hufflepuff'; 
}
?>
