<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="index.css">
    <title>Ama(tu)zon(a)</title>
</head>
<body>
<?php
    session_start();

if (isset($_SESSION['nombre'])) {
    $nombre_usuario = $_SESSION['nombre'];
    echo "<h5 style='display:flex; justify-content:center;'>Bienvenido, $nombre_usuario!</h5>";
    echo '<div style="display: flex; justify-content: center; background-color: #7d75bd; padding: 10px; justify-content: space-between;">
             <a href="index.php">Inicio</a>
             <a href="registrarse.php">Registrarte</a>
             <a href="comprar.php">🛒</a>
             <a href="codigoCerrarSesion.php">Cerrar sesión</a>
          </div>';
} else {
    $nombre_usuario = "Invitado";
    echo "<h5 style='display:flex; justify-content:center;'>Bienvenido, $nombre_usuario!</h5>";
    echo '<div style="display: flex; justify-content: center; background-color: #7d75bd; padding: 10px; justify-content: space-between;">
             <a href="index.php">Inicio</a>
             <a href="registrarse.php">Registrarse</a>
             <a href="comprar.php">🛒</a>
             <a href="login.php">Iniciar sesión</a>
             
          </div>';
}
?> 

            <h1 id="titulo">Ama(tu)zon(a) 🐦 </h1>
        
        </br>
        <h2>Login </h2>
        <br>

        <form method="post" action="codigologin.php" id="contenidoRegistro">
            <label for="usuario">Usuario:</label>
            <input type="text" id="usuario" name="usuario" required>
            <br>
            <label for="password">Contraseña:</label>
            <input type="text" id="password" name="password" required>

            <button type="submit">Iniciar Sesión</button>
        </form>

    <footer> Informacion Legal</footer>
</body>
</html>
