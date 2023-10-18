<!-- 
que al poner el nombre, en "test.php" te salga un saludo
que te verifique que el usuario es paco y la password es 1234
 -->

<? session_start();

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario</title>
</head>
<body>

    <?php 
    if( isset($_SESSION["usuario"])){
        echo "Hola, ".$_SESSION["usuario"];
    }
    
    // crear un contador

    if (!isset($_SESSION["contador"])){
        $_SESSION["contador"];
    }else{
        $_SESSION["contador"]++;
    }
    ?>

    Has recargado la pagina <? echo $_SESSION["contador"];?> veces  

    <form action="test.php" method="POST">
        <label>Usuario
            <input type="text" name="usuario">
</br>
        <label>Password
            <input type="text" name="password" id="password">
</br>
            <input type="submit" value="Enviar">
    </form>

</body>
</html>