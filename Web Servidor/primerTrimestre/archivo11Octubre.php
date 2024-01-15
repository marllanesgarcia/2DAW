<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>
</head>
<body>
<form id="mi_formulario" action="" method="POST">
<input type="text" name="username" id="username">
<input type="password" name="password" id="password">
<input type="text" name="edad">
<input type="text" name="pais">
<input type="submit" value="Enviar">
</form>

<?
if(isset($_POST)){
echo $_POST["username"];
echo $_POST["password"];
}

?>

<title>Comprobar datos</title>


<body>
    <h3>Tus Datos de suscripción: </h3>
    <p>Estos son los datos que nos has enviado:</p> <pre>
    <?php
    echo "Nombre: "; echo $_POST['nombre']; echo "<br/>";
    echo "Apellidos: "; echo $_POST['apellidos']; echo "<br/>";
    echo "E-mail: "; echo $_POST['email']; echo "<br/>";
    echo "UserName: "; echo $_POST['username']; echo "<br/>";
    echo "UserPass: "; echo $_POST['userpass']; echo "<br/>";
    echo "Sexo: "; echo $_POST['sexo']; echo "<br/>";
    echo "Aficiones: "."<br><br>";

    // COndicional para validar los temas
    if (isset($_POST['temas'])){
    // Ciclo para mostrar casillas checked checkbox
    foreach($_POST['temas'] as $selected){
    echo " ".$selected."</br>";// Imprime resultados.
    }
    }
    echo "</pre>";

    echo "Día de la semana: "; echo $_POST['dia']; echo "<br/>";
    echo "Tu comentario: "; echo $_POST['comentario']; echo "<br/>";
    ?>
    <p>Comprueba tus datos antes de enviarlos, si no están bien vuelve a escribirlos.</p>
    <p>Los datos son correctos: <a href="enviar.php">Enviar</a>
    <p>Los datos no son correctos: <a href="suscripcion.php">Volver a escribirlos</a>

</body>
</html>