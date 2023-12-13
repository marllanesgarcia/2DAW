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
    <div style="display: flex; height: 50vh;">
            <ul>
                <li><img style='width:50px; heigth:50px;' src='https://www.gifmaniacos.es/wp-content/uploads/2017/10/fantasmas-halloween-gifs-gifmaniacos.es-19.gif'></li>
                <li><img style='width:50px; heigth:50px;' src='https://www.gifmaniacos.es/wp-content/uploads/2017/10/fantasmas-halloween-gifs-gifmaniacos.es-19.gif'></li>
                <li><img style='width:50px; heigth:50px;' src='https://www.gifmaniacos.es/wp-content/uploads/2017/10/fantasmas-halloween-gifs-gifmaniacos.es-19.gif'></li>
                <li><img style='width:50px; heigth:50px;' src='https://www.gifmaniacos.es/wp-content/uploads/2017/10/fantasmas-halloween-gifs-gifmaniacos.es-19.gif'></li>
                <li><img style='width:50px; heigth:50px;' src='https://www.gifmaniacos.es/wp-content/uploads/2017/10/fantasmas-halloween-gifs-gifmaniacos.es-19.gif'></li>
                <li><img style='width:50px; heigth:50px;' src='https://www.gifmaniacos.es/wp-content/uploads/2017/10/fantasmas-halloween-gifs-gifmaniacos.es-19.gif'></li>
                <li><img style='width:50px; heigth:50px;' src='https://www.gifmaniacos.es/wp-content/uploads/2017/10/fantasmas-halloween-gifs-gifmaniacos.es-19.gif'></li>
                <li><img style='width:50px; heigth:50px;' src='https://www.gifmaniacos.es/wp-content/uploads/2017/10/fantasmas-halloween-gifs-gifmaniacos.es-19.gif'></li>
                <li><img style='width:50px; heigth:50px;' src='https://www.gifmaniacos.es/wp-content/uploads/2017/10/fantasmas-halloween-gifs-gifmaniacos.es-19.gif'></li>
            
            </ul>

        
        <div id='blogActual'>
    <h2 style='display:flex; justify-content:center;'>Asignar Categorías a Blogs</h2></br>
    <?php
    
    include "funcionesAdmin.php";
    $conexion = establecerConexion();

    if ($conexion) {
        $lista_blogs = obtenerBlogs($conexion);
        $lista_categorias = obtenerCategorias($conexion);

        cerrarConexion($conexion);
    } else {
        echo "Error en la conexión.";
    }
    ?>
    <form method="post" action="funcionesAdmin.php">
        <a for="blog_id">Seleccione un Blog:</a>
        <select name="blog_id" id="blog_id" required>
            <?php
            foreach ($lista_blogs as $blog) {
                echo "<option value='{$blog['id']}'>{$blog['titulo']}</option>";
            }
            ?>
        </select>
        </br>
        </br>
        <a for="categoria_id">Seleccione una Categoría:</a>
            <select name="categoria_id" id="categoria_id" required>
                <?php
                foreach ($lista_categorias as $categoria) {
                    echo "<option value='{$categoria['id']}'>{$categoria['nombre']}</option>";
                }
                ?>
            </select>
            </br>
            </br>
            <input type="submit" value="Asignar Categoria">
        </form>
        </div>
        <ul>
                <li><img style='width:50px; heigth:50px;' src='https://www.gifmaniacos.es/wp-content/uploads/2017/10/fantasmas-halloween-gifs-gifmaniacos.es-19.gif'></li>
                <li><img style='width:50px; heigth:50px;' src='https://www.gifmaniacos.es/wp-content/uploads/2017/10/fantasmas-halloween-gifs-gifmaniacos.es-19.gif'></li>
                <li><img style='width:50px; heigth:50px;' src='https://www.gifmaniacos.es/wp-content/uploads/2017/10/fantasmas-halloween-gifs-gifmaniacos.es-19.gif'></li>
                <li><img style='width:50px; heigth:50px;' src='https://www.gifmaniacos.es/wp-content/uploads/2017/10/fantasmas-halloween-gifs-gifmaniacos.es-19.gif'></li>
                <li><img style='width:50px; heigth:50px;' src='https://www.gifmaniacos.es/wp-content/uploads/2017/10/fantasmas-halloween-gifs-gifmaniacos.es-19.gif'></li>
                <li><img style='width:50px; heigth:50px;' src='https://www.gifmaniacos.es/wp-content/uploads/2017/10/fantasmas-halloween-gifs-gifmaniacos.es-19.gif'></li>
                <li><img style='width:50px; heigth:50px;' src='https://www.gifmaniacos.es/wp-content/uploads/2017/10/fantasmas-halloween-gifs-gifmaniacos.es-19.gif'></li>
                <li><img style='width:50px; heigth:50px;' src='https://www.gifmaniacos.es/wp-content/uploads/2017/10/fantasmas-halloween-gifs-gifmaniacos.es-19.gif'></li>
                <li><img style='width:50px; heigth:50px;' src='https://www.gifmaniacos.es/wp-content/uploads/2017/10/fantasmas-halloween-gifs-gifmaniacos.es-19.gif'></li>
            
            </ul>
        
    </div>
</body>
</html>