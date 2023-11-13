<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8" >
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="index.css">
    <title>Gestor de Tareas</title>
</head>
<body action="funcionesTareas.php">
<div style="text-align: center;">
        <h1 id="titulo">Bloggeo.GRR 🐛</h1>
        <form method="get" action="www.google.com">
            <input type="text" name="q" placeholder="Buscar">
            <input type="submit" value="Buscar">
        </form>
        <a href="login.php">Iniciar sesion</a>
    </div>

    <div style="display: flex; justify-content:center ;">
        <a href="gestorTareas.php">Crear Tarea</a>
    </div>
    <hr>

<h1>Gestor de Tareas</h1>

    <!-- Formulario -->
    <form method="post" action="agregarTarea()">
        <label for="titulo">Título:</label>
        <input type="text" name="titulo" required>
        <br>
        <label for="descripcion">Descripción:</label>
        <textarea name="descripcion" required></textarea>
        <br>
        <br>
        <button type="submit" name="crear">Crear Tarea</button>
    </form>

<ul>
    <?php 

    var_dump($tareas);
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
