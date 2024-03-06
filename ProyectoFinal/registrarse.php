<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Aladin&display=swap" rel="stylesheet">

    <title>MalagApp</title>
</head>

<body>

    <div style="display: flex; justify-content:center;">
        <div id="loggeo" >
                <h2>Registrarse</h2>
                    <div id="contenidoBlog">
                        <form method="post" action="funcionesRegistro.php">
                            <label for="usuario">Usuario:</label>
                            <input type="text" name="usuario" id="usuario" required><br><br>

                            <label for="correo">Usuario:</label>
                            <input type="text" name="correo" id="correo" required><br><br>

                            <label for="contrasena">Contraseña:</label>
                            <input type="password" name="contrasena" id="contrasena" required><br><br>

                            <br>

                            <input type="submit" value="iniciarSesion">
                        </form>
                    </div>
            
        </div>
    </div>

</body>

</html>