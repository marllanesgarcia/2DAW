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
    <link href="https://fonts.googleapis.com/css2?family=Vidaloka&family=Viga&display=swap" rel="stylesheet">
    
    <title>MalagApp</title>
</head>

<body>

    <div class="divloggeo">
        <div>
            <h2>Registro</h2>
                </br>
                <form method="post" action="funcionesRegistro.php">

                    <label for="usuario" class="loginTexto">Usuario </label>
                    <input type="text" name="usuario" id="usuario" class="form-control"><br>
                    <span class="error"><?php if(isset($_GET['error_usuario'])) echo $_GET['error_usuario']; ?></span>

                    <label for="correo" class="loginTexto">Correo </label>
                    <input type="text" name="correo" id="correo" class="form-control"><br>
                    <span class="error"><?php if(isset($_GET['error_correo'])) echo $_GET['error_correo']; ?></span>

                    <label for="password" class="loginTexto">Contraseña </label>
                    <input type="password" name="password" id="password" class="form-control"><br><br>
                    <span class="error"><?php if(isset($_GET['error_password'])) echo $_GET['error_password']; ?></span>

                    <input type="submit" value="Iniciar Sesion" class="btn btn-dark">
                </form>
                </br>
                    <a href='index.php'><input type="submit" class="btn btn-outline-secondary" value="Volver"></a>
        </div>
    </div>

    <!-- Footer -->
    <footer class="footer">
        <p>informacion footer</p>
    </footer>

   <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</body>

</html>