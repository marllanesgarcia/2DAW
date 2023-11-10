<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" type="text/css" href="index.css">
    <title>Bloggeo.GRR</title>
</head>
<body>

<div style="text-align: center;">
        <h1 id="titulo">Bloggeo.GRR 🐛</h1>
        <form method="get" action="buscar.php">
            <input type="text" name="q" placeholder="Buscar">
            <input type="submit" value="Buscar">
        </form>
        <a href="login.php">Iniciar sesion</a>
    </div>

    <div style="display: flex; justify-content:center ;">
        <a href="gestorTareas.php">Crear Tarea</a>
    </div>
    <hr>

   <h2>Login </h2><br>

   <?php
    include("./funciones.php");


    $conexion = new conectar_db();

    $id_alumno = $_GET["id_usuarios"];

    $sql_alumno = "SELECT * FROM usuarios WHERE id_usuarios = ".$id_usuario;

    $alumno = $conexion->consultar($sql_usuarios);

    ?>
        <form method="get" action="funcionesLogin.php">
            <label for="usuario">Usuario:</label>
            <input type="text" name="usuario" id="usuario" required>
            <br>
            <label for="contrasena">Contraseña:</label>
            <input type="password" name="contrasena" id="contrasena">
            <br><br>
            
            <input type="submit" value="IniciarSesion">
            <br>
            <a href="formulario.php">¿Tienes cuenta ya? Registrarase</a>


        </form>

</body>
</html>