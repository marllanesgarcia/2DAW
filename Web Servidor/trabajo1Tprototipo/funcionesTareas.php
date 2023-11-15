<?php

// añadir tareas
function agregarTarea(&$tareas, $titulo, $descripcion) {
    $tareas[] = ['titulo' => $titulo, 'descripcion' => $descripcion];
}

// eliminar tareas
function eliminarTarea(&$tareas, $indice) {
    if (isset($tareas[$indice])) {
        unset($tareas[$indice]);
    }
}

function editarTarea(&$tareas, $indice, $titulo, $descripcion) {
    if (isset($tareas[$indice])) {
        $tareas[$indice]['titulo'] = $titulo;
        $tareas[$indice]['descripcion'] = $descripcion;
    }
}
?>
