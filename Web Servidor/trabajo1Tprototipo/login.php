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
        <a href="registrarse.php">Registrarse</a>
        <a href="login.php">Iniciar sesion</a>
    </div>

    <div style="display: flex; justify-content:center ;">
        <a href="gestorTareas.php">Crear Tarea</a>
    </div>
    <hr>

   <h2>Login </h2><br>

   <form method="post" action="funcionesLogin.php" id="blogActual">
    <label for="usuario">Usuario:</label>
    <input type="text" id="nombre" name="usuario" required>
    <br>
    <label for="password">Contraseña:</label>
    <input type="password" id="password" name="password" required>
    <br>

    <button type="submit">Registrarse</button>
</form>


</body>
</html>
