<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" type="text/css" href="index.css">
    <title>Bloggeo.GRR</title>
</head>
<body>

    <div style="text-align: center;">
        <h1 id="titulo" href="index.html">Phasmo.GRR 👻</h1>
        <form id="form" method="get" action="buscar.php">
            <input type="text" name="q" placeholder="Buscar">
            <input type="submit" value="Buscar">
            &nbsp;  
        </form>

        <a href="formulario.php" type="submit">Iniciar Sesion</a>
       
    </div>
<!--     <div style="display:flex; justify-content: center;">
        <a href="crearBlog.php">~ Crear Blog ~</a>
    </div>  -->
    <hr>

    <div style="display: flex;">
        <div id="blogActual" >
                <!-- Sección central para mostrar blogs -->
             <h2>Últimos Blogs</h2>
                <div id="contenidoBlog">
                    <h3>Título del Blog</h3> </br>
                    <p>Contenido del Blog</p> </br>
                    <a href="blog.php">Leer más</a>
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
