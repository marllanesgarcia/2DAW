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
    <!-- <div style="display:flex; justify-content: center;">
        <a href="crearBlog.php">~ Crear Blog ~</a>
    </div>  -->
    <hr>
 
    <div style="display: flex;">
        <h1> Crea tu Blog</h1>

        <form method="post" action="agregarBlog()">
        <label for="titulo">Título:</label>
        <input type="text" name="titulo" required>
        <br>
        <label for="introduccion">Introduccion:</label>
        <textarea name="introduccion" required></textarea>
        <br>
        <label for="contenido">Contenido:</label>
        <textarea name="contenido" required></textarea>
        <br>
        <br>
        <button type="submit" name="crear">Crear Blog</button>
    </form>

    </div>
</body>
</html>
