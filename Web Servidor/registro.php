<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
    if($_POST){
        if(["Nombre"]=="Paco" && ["password"]=="123456"){
        echo "¡Bienvenido Paco";
        }else{
            echo "ta mal";
        }
    }
?>
</body>
</html>
