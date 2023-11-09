<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
</head>
<body class="m-0 vh-100 row justify-content-center align-items-center">
    <div class="col-auto bg-info p-5 text-center border border-danger">
   <h2>Login </h2><br>
   <form class="form-inline" action="procesar_login.php" method="post">
   <div class="form-group my-2">
    <label  for="usuario" class="mx-2" >Usuario </label>
        <input type="text" name="usuario" id="usuario" required> <br><br>
        </div>
   <div class="form-group my-2">
    <label for="contraseña" class="mx-2"> Contraseña </label>
        <input type="text" name="contraseña" id="contraseña" required> <br><br>
        </div>
        <div class="form-group my-2">
    <input class="text-white bg-dark" type="submit" value="Inicio sesion">
    </div>
</form> 
</div>
</body>
</html>