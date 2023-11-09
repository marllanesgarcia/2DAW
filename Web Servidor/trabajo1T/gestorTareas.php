<?php
$tareas = [];

// agregar una tarea
function agregarTarea($titulo, $descripcion) {
    global $tareas;
    $tareas[] = ['titulo' => $titulo, 'descripcion' => $descripcion];
}

//borrar una tarea
function borrarTarea($indice) {
    global $tareas;
    unset($tareas[$indice]);
    $tareas = array_values($tareas);
}

//editar una tarea
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



<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gestor de Tareas</title>
</head>
<body>

<h1>Gestor de Tareas</h1>


<!-- Formulario -->
<form method="post">
    <label for="titulo">Título:</label>
    <input type="text" name="titulo" required>
    <br>
    <label for="descripcion">Descripción:</label>
    <textarea name="descripcion" required></textarea>
    <br>
    <button type="submit" name="crear">Crear Tarea</button>
</form>

<ul>
    <?php 

    foreach ($tareas as $indice => $tarea): 

    ?>
        <li>
            <strong><?= $tarea['titulo'] ?></strong>
            <p><?= $tarea['descripcion'] ?></p>
            
            <!-- borrar tarea -->
            <form method="post" style="display: inline;">
                <input type="hidden" name="indice" value="<?= $indice ?>">
                <button type="submit" name="borrar">Borrar</button>
            </form>
            
            <!-- editar tarea -->
            <form method="post" style="display: inline;">
                <input type="hidden" name="indice" value="<?= $indice ?>">
                <label for="titulo_edit">Nuevo Título:</label>
                <input type="text" name="titulo" required>
                <label for="descripcion_edit">Nueva Descripción:</label>
                <textarea name="descripcion" required></textarea>
                <button type="submit" name="editar">Editar</button>
            </form>
        </li>
    <?php endforeach; ?>
</ul>

</body>
</html>
