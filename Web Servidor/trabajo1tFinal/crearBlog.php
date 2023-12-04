<!-- 
    - Crear blog
    - Borrar Blog
    - Editar Blog
    - Colgar Blog
 -->

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
    echo'&nbsp;';
    echo "<a style='display:flex; justify-content:center; color:white;'>Bienvenido, $nombre_usuario!</a>";
    echo '<div style="text-align: center;">
                <a  href="index.php" id="inicioButton"><h1 id="titulo">Phasmo.GRR 👻</h1></a>
                    <form id="form" method="get" action="buscar.php">
                        <input type="text" name="q" placeholder="Buscar">
                        <input type="submit" value="Buscar">
                        &nbsp;  
                    </form>
                <a href="registrarse.php" type="submit">Resgistrarte</a>
                <a href="codigoCerrarSesion.php" type="submit">Cerrar Sesión</a>
        </div>';
} else {
    $nombre_usuario = "Fantasmita";
    echo'&nbsp;';
    echo "<a style='display:flex; justify-content:center;  color:white;'>Bienvenido, $nombre_usuario!</a>";
    echo '<div style="text-align: center;">
            <a  href="index.php" id="inicioButton"><h1 id="titulo">Phasmo.GRR 👻</h1></a>
            <form id="form" method="get" action="buscar.php">
                <input type="text" name="q" placeholder="Buscar">
                <input type="submit" value="Buscar">
                &nbsp;  
            </form>
            <a href="registrarse.php" type="submit">Resgistrarte</a>
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

        <div id="blogActual" >
             <a></a>
             <form method="post" action="funcionesCrearBlogs.php">
                <a for="titulo">Título</a><br>
                <input type="text" name="titulo" required><br><br>

                <a for="introduccion">Introducción</a><br>
                <textarea name="introduccion" id="introduccion" style="width: 100%; height: 100px;" onkeydown="handleKeyDown(event, 'introduccion')" required></textarea><br><br>

                <a for="contenido">Contenido</a><br>
                <textarea name="contenido" id="contenido" style="width: 100%; height: 200px;" onkeydown="handleKeyDown(event, 'contenido')" required></textarea><br><br>


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

 