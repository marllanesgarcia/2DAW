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
                <li><img style='width:50px; heigth:50px;' src='https://www.gifmaniacos.es/wp-content/uploads/2017/10/fantasmas-halloween-gifs-gifmaniacos.es-19.gif'></li>
            
            </ul>

            <div id="blogActual">
                <form method="post" action="funcionesCrearBlogs.php">
                    <a for="titulo">Título</a><br>
                    <input type="text" name="titulo" required><br><br>

                    <a for="introduccion">Introducción</a><br>
                    <textarea name="introduccion" id="introduccion" style="width: 100%; height: 100px;" onkeydown="handleKeyDown(event, 'introduccion')" required></textarea><br><br>

                    <a for="contenido">Contenido</a><br>
                    <textarea name="contenido" id="contenido" style="width: 100%; height: 200px;" onkeydown="handleKeyDown(event, 'contenido')" required></textarea><br><br>

                    <a for="fecha">Fecha de Creación (yyyy-mm-dd hh:mm:ss) </a><br>
                    <input name="fecha" id="fecha" style="width: 280px; height: 50px;" required></input><br><br>

                    <a for="categoria_id">Seleccione una Categoría:</a>
                    <select name="categoria_id" id="categoria_id" required>
                        
            <?php
            $conexion = new mysqli('localhost', 'root', '', 'phasmofobia');
            if ($conexion->connect_error) {
                die("Error de conexión: " . $conexion->connect_error);
            }

            $consulta_categorias = "SELECT id, nombre FROM categorias";
            $resultado_categorias = $conexion->query($consulta_categorias);

            while ($categoria = $resultado_categorias->fetch_assoc()) {
                echo "<option value='{$categoria['id']}'>{$categoria['nombre']}</option>";
            }
            $conexion->close();
            ?>

                    </select>
                    </br>
                    <input type="submit" value="Publicar Blog">
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
                <li><img style='width:50px; heigth:50px;' src='https://www.gifmaniacos.es/wp-content/uploads/2017/10/fantasmas-halloween-gifs-gifmaniacos.es-19.gif'></li>
            
            </ul>
        
    </div>

<script>
    function handleInput(textareaId) {
        var textarea = document.getElementById(textareaId);
        textarea.value = textarea.value.replace(/\r?\n/g, '\n');
    }
</script>
</body>
</html>

 