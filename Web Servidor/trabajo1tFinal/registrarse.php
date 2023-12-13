<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" type="text/css" href="index.css">
    <title>Bloggeo.GRR</title>
</head>
<body>
<?php
session_start();

if (isset($_SESSION['usuario'])) {
    $nombre_usuario = $_SESSION['usuario'];

    $conexion = new mysqli('localhost', 'root', '', 'phasmofobia');

    if ($conn->connect_error) {
        die("Conexión fallida: " . $conexion->connect_error);
    }

    $consulta = "SELECT rol FROM usuarios WHERE usuario = '$nombre_usuario'";
    $resultado = $conexion->query($consulta);

    if ($resultado) {
        if ($resultado->num_rows > 0) {
            $fila = $resultado->fetch_assoc();
            $rol_usuario = $fila['rol'];

            echo '&nbsp;';
            echo "<a style='display:flex; justify-content:center; color:white;'>Bienvenido, $nombre_usuario!</a>";
            echo '<div style="text-align: center;">
                        <a  href="index.php" id="inicioButton"><h1 id="titulo">Phasmo.GRR 👻</h1></a>
                            <form id="form" method="get" action="buscar.php">
                                <input type="text" name="q" placeholder="Inserte una categoria">
                                <input type="submit" value="Buscar">
                                &nbsp;  
                            </form>
                            <a href="registrarse.php" type="submit">Resgistrarte</a>
                            <a href="codigoCerrarSesion.php" type="submit">Cerrar Sesión</a>
                            </div>';

            if ($rol_usuario === 'administrador') {
                echo "<a href='administrador.php' style='display:flex; justify-content:center; color:white;'>Administrador</a>";
            }

            echo "<a href='crearBlog.php' style='display:flex; justify-content:center; color:white;'>Crear Blog</a>";
            echo '</div>';
        } else {
            echo "No se encuentra nada";
        }
    } else {
        echo "Error en la consulta: " . $conexion->error;
    }

    $conexion->close();
} else {
    $nombre_usuario = "Fantasmita";
    echo '&nbsp;';
    echo "<a style='display:flex; justify-content:center;  color:white;'>Bienvenido, $nombre_usuario!</a>";
    echo '<div style="text-align: center;">
            <a  href="index.php" id="inicioButton"><h1 id="titulo">Phasmo.GRR 👻</h1></a>
            <form id="form" method="get" action="buscar.php">
                <input type="text" name="q" placeholder="Inserte una categoria">
                <input type="submit" value="Buscar">
                &nbsp;  
            </form>
            <a href="registrarse.php" type="submit">Registrarte</a>
            <a href="codigoCerrarSesion.php" type="submit">Iniciar Sesión</a>
        </div>';
}
?>
        <hr>


    <div style="display: flex; justify-content:center;">
        <div id="loggeo" >
                <h2>Registrarse</h2>
                    <div id="contenidoBlog">
                        <form method="post" action="funcionesRegistro.php">
                            <label for="usuario">Usuario:</label>
                            <input type="text" name="usuario" id="usuario" required><br><br>

                            <label for="contrasena">Contraseña:</label>
                            <input type="password" name="contrasena" id="contrasena" required><br><br>
                            <select name="rol" required>
                                <option value="administrador">Administrador</option>
                                <option value="usuario">Usuario</option>
                            </select>
                            <br>

                            <input type="submit" value="iniciarSesion">
                        </form>
                    </div>
            
        </div>
    </div>
</body>
</hmtl>