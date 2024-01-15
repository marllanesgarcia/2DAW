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

    <div style="display: flex;">
        <?php

            $conexion = new mysqli('localhost', 'root', '', 'phasmofobia');

            if ($conexion->connect_error) {
                die("Error de conexión: " . $conexion->connect_error);
            }
            $query = "SELECT * FROM blog ORDER BY id DESC LIMIT 1";
            $result = $conexion->query($query);

            if ($result->num_rows > 0) {
                $fila = $result->fetch_assoc();
                $titulo = $fila['titulo'];
                $introduccion = $fila['introduccion'];
                $contenido = $fila['contenido'];
                $id = $fila['id'];

                echo "<div id='blogActual'>
                        <h2>Último Blog</h2>
                        <div id='contenidoBlog' style='overflow-y: auto; max-width: 100%; text-align: center; height: 100vh;'>
                <h3 style='overflow: hidden; text-overflow: ellipsis; white-space: normal;'>$titulo</h3>
                <h5 style='overflow: hidden; text-overflow: ellipsis; white-space: normal;'>$introduccion</h5>
                        <p style='overflow: hidden; text-overflow: ellipsis; white-space: normal;'>$contenido</p>
                        </div>
                    </div>";

            } else {
                echo "<div id='blogActual'>
                        <h2>Último Blog</h2>
                        <div id='contenidoBlog' style='overflow-y: auto; max-width: 100%; text-align: center; height: 100vh;'>
                <h3 style='overflow: hidden; text-overflow: ellipsis; white-space: nowrap;'>No hay contenido. . . ¡Crea uno!</h3>
                <br>
                            <img src='https://64.media.tumblr.com/50da741ac16475306fb68e0fddf6c1ff/tumblr_nu9x3dVRAD1uwjp15o1_400.gif' style='max-width: 100%; height: auto;'>
                        </div>
                    </div>";

    
            }

            $conexion->close();
    ?>
<div id="blogRec">
    <h2>Blogs Recomendados</h2>
    <ul>
    <?php
    include 'funcionesBlogs.php'; 

    $conexion = new mysqli('localhost', 'root', '', 'phasmofobia');

    if ($conexion->connect_error) {
        die("Error de conexión: " . $conexion->connect_error);
    }

    $blogsRecientes = obtenerBlogsRecientes($conexion);

    if ($blogsRecientes !== false) {           
        foreach ($blogsRecientes as $blog) {
            echo '<li><a href="blogDetalle.php?id=' . $blog['id'] . '">' . $blog['titulo'] . '</a></li>';
        }
        
        echo '</ul>';
        echo '</div>';
    } else {
        echo "Error en la consulta: " . $conexion->error;
    }

    $conexion->close();
    ?>

</div>

</body>
</html>
