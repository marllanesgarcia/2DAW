<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" type="text/css" href="index.css">
    <title>Bloggeo.GRR</title>
</head>
<body>

    <div style="text-align: center;">
        <h1 id="titulo">Bloggeo.GRR 🐛</h1>
        <form method="get" action="www.google.com">
            <input type="text" name="q" placeholder="Buscar">
            <input type="submit" value="Buscar">
        </form>
        <a href="registrarse.html">Registrarse</a>
        <a href="login.html">Iniciar sesion</a>
    </div>

    <div style="display: flex; justify-content:center ;">
        <a href="gestorTareas.php">Crear Tarea</a>
    </div>
    <hr>

    <div style="display: flex;">
        <div id="blogActual">
                <!-- Sección central para mostrar blogs -->
             <h2>Ultimos Blogs</h2>
                <div id="contenidoBlog">
                    <h3>Titulo del Blog</h3> </br>
                    <p>Contenido del Blog</p> </br>
                    <a href="blog.php">Leer mas</a>
                </div>
        </div>

        <!-- Barra de la derecha con enlaces a blogs recomendados -->
        <div id="blogRec">
            <h2>Blogs Recomendados</h2>
            <ul>
                <li><a href="blog1.php">Blog Recomendado 1</a></li>
                <li><a href="blog2.php">Blog Recomendado 2</a></li>
                <li><a href="blog3.php">Blog Recomendado 3</a></li>
                <li><a href="blog4.php">Blog Recomendado 4</a></li>
                <li><a href="blog5.php">Blog Recomendado 5</a></li>
            </ul>
        </div>
    </div>
</body>
</html>
