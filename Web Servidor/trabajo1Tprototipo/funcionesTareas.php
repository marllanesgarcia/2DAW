<?php
$tareas = [];

// Agregar una tarea
function agregarTarea($titulo, $descripcion) {
    global $tareas;
    $tareas[] = ['titulo' => $titulo, 'descripcion' => $descripcion];
}

// Borrar una tarea
function borrarTarea($indice) {
    global $tareas;
    unset($tareas[$indice]);
    $tareas = array_values($tareas);
}

// Editar una tarea
function editarTarea($indice, $titulo, $descripcion) {
    global $tareas;
    $tareas[$indice] = ['titulo' => $titulo, 'descripcion' => $descripcion];
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['crear'])) {
        $titulo = $_POST['titulo'];
        $descripcion = $_POST['descripcion'];
        agregarTarea($titulo, $descripcion);
    } elseif (isset($_POST['borrar'])) {
        $indice = $_POST['indice'];
        borrarTarea($indice);
    } elseif (isset($_POST['editar'])) {
        $indice = $_POST['indice'];
        $titulo = $_POST['titulo'];
        $descripcion = $_POST['descripcion'];
        editarTarea($indice, $titulo, $descripcion);
    }
}
?>
