<?php session_start();

echo "Hola, ".$_SESSION["usuario"];

if($_POST["usuario"] == "paco" && $_POST["password"] == "1234"){
    $_SESSION["usuario"] = $_POST["usuario"];
    $_SESSION["password"] = $_POST["password"];
}

// session_destroy();



?>

<a href="index.php"> Volver al inicio </a>