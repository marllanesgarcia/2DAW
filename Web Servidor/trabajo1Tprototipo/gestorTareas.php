<?php

include ('funcionesTareas.php');

$tareas = [];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    // Procesar el formulario de agregar tarea
    if (isset($_POST['agregar'])) {
        $titulo = $_POST['titulo'];
        $descripcion = $_POST['descripcion'];
        agregarTarea($tareas, $titulo, $descripcion);
    }

    // Procesar el formulario de eliminar tarea
    if (isset($_POST['borrar'])) {
        $indice = $_POST['indice'];
        eliminarTarea($tareas, $indice);
    }
}
?>


<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8" >
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="index.css">
</head>
<body action="funcionesTareas.php">
<div style="text-align: center;">
        <h1 id="titulo">Bloggeo.GRR 🐛</h1>
        <form method="get" action="www.google.com">
            <input type="text" name="q" placeholder="Buscar">
            <input type="submit" value="Buscar">
        </form>
        <a href="registrarse.php">Registrarse</a>
        <a href="login.php">Iniciar sesion</a>
    </div>

    <div style="display: flex; justify-content:center ;">
        <a href="gestorTareas.php">Crear Tarea</a>
    </div>
    <hr>

    <!-- Formulario para agregar tarea -->
    <h2>Agregar Tarea</h2>
    <form action="gestorTareas.php" method="post" id="blogActual">
        <label for="titulo">Título:</label>
        <input type="text" id="titulo" name="titulo" required>
    </br>
        <label for="descripcion">Descripción:</label>
        <input type="text" id="descripcion" name="descripcion" required>
        </br>
        <button type="submit" name="agregar">Agregar Tarea</button>
    </form>

    <!-- Lista de Tareas -->
    <h2>Lista de Tareas</h2>
    <?php
    //coge el array para hacer cosas
    if (($tareas && $tareas) > 0) {
        echo '<ul>';
        foreach ($tareas as $indice => $tarea) {
            echo '<li>';
            echo '<strong>Título:</strong> ' . $tarea['titulo'] . '<br>';
            echo '<strong>Descripción:</strong> ' . $tarea['descripcion'] . '<br>';

            // eliminar tarea
            echo '<form action="gestorTareas.php" method="post">';
            echo '<input type="hidden" name="indice" value="' . $indice . '">';
            echo '<button type="submit" name="borrar">Eliminar Tarea</button>';
            echo '</form>'.'<br>';

            // editar tarea
            echo '<form action="gestorTareas.php" method="post">';
            echo '<input type="hidden" name="editar_indice" value="' . $indice . '">';
            echo '<label for="editar_titulo">Nuevo Título:</label>';
            echo '<input type="text" id="editar_titulo" name="editar_titulo" required>'.'<br>';
            echo '<label for="editar_descripcion">Nueva Descripción:</label>';
            echo '<input type="text" id="editar_descripcion" name="editar_descripcion" required>'.'<br>';
            echo '<button type="submit" name="editar">editar Tarea</button>';
            echo '</form>';

            echo '</li>';

            if (isset($_POST['editar'])) {
                $editarIndice = $_POST['editar_indice'];
                $titulo = $_POST['editar_titulo'];
                $descripcion = $_POST['editar_descripcion'];
                editarTarea($tareas, $editarIndice, $titulo, $descripcion);
            }
        }
        echo '</ul>';
    } else {
        echo '<p>No hay tareas disponibles.</p>';
    }
    ?>
</body>
</html>
