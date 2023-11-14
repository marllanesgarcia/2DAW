<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" type="text/css" href="index.css">
    <script src="sweetAlert/sweetalert2.all.min.js"></script>
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

                 <!-- Pa loggearse -->
    <div style="display: flex; justify-content:center;">
        <div id="loggeo" >
             <h2>Inicia Sesion</h2>
                <div id="contenidoBlog">
                    <form method="post" action="funcionesFormulario.php">
                        <label for="usuario">Usuario:</label>
                        <input type="text" name="usuario" id="usuario"><br><br>

                        <label for="contrasena">Contraseña:</label>
                        <input type="password" name="contrasena" id="contrasena"><br><br>

                        <input type="submit" value="iniciarSesion">
                    </form>
                </div>
        </div>
    

                   <!-- Pa registrarse -->
    
            <div id="loggeo" >
                <h2>Regsistrate</h2>
                <div id="contenidoBlog">
                    <form method="post" action="funcionesRegistro.php">
                        <label for="usuario">Usuario:</label>
                        <input type="text" name="usuario" id="usuario"><br><br>

                        <label for="contrasena">Contraseña:</label>
                        <input type="password" name="contrasena" id="contrasena"><br><br>

                        <input type="submit" value="Registrarse">
                    </form>
                </div>
            </div>
    </div>
</body>
</html>