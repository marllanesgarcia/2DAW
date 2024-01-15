<?php ?> 
<?    ?>

<h1></h1>
<?php
echo "Hola mundo"
?>
</h1>

/*
Comentario de párrafo
*/

// Comentario de una linea

<?
echo "<h1>Hola mundo</h1>";
?>

// En php se pueden usar recursos de HTML junto el propio codigo de php

<html> 
    <body>
<?php
$variable = "Pepe";

$variable = 34;

$cantidad = 23;

// Las variables se ponen con el símbolo $
?>
</body>
</html>

// ejemplo If 
<?php
$cantidad = 10;
if($cantidad <3){
    // hago algo
}else if($cantidad >=3 && $cantidad <8){
    // hago otra cosa
}else{
    // la ultima opción
}
?>
