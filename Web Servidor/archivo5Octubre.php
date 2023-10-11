
// CLASE 5 OCTUBRE
<?
phpinfo(); /* se mostrará información sobre la configuración PHP de su sitio.
se usa por si se tiene que descargar alguna libreria 
*/

for ($contador=0;$contador<=10;$contador++){
}

// comentarios con  /* */  y //

$variable = 25; // esta variale es...

$cantidad = 25.3452394852345; // float

$verdadero = true; // boolean

$falso = false; // boolean 

$array = []; // array

$array_2[0] = false; // array siempre empezaban en 0

$array_2 [1] = 23;

$array_2[2] = "maricarmen";

$cadena = "3";

$entero = 5;

echo $cadena+$entero;  // saldria 8 porque lo suma independientemente de si uno no es un entero

echo $cadena.$entero;  // aqui lo concatena

$variable = "23";

$variable = (int) $variable;

$variable2 = 23;

$variable2 = (String) $variable2;

function mi_function(){
    global $mi_variable;  // se pone global para que se use fuera de la funcion
    $mi_variable = 33;
}

$GLOBALS; // TE GUARDA TODAS LAS VARIABLES GLOBALES EN EL ARCHIVO
$_POST; // cuando el metodo es post, le mandas el formulario como es 
// estructura. Dolar es un valor asociativo donde se mandan los valores tipo post. GUARDA LOS VAROLES
$_GET; // se reciben los archivos mediante esta variable. 
// Recibimos las diferentes variables. Los valores se mantienen en la url. No es del todo bueno porque se pueden modificar
// Formularios con Get = NO. 
$_SERVER ["DOCUMENT_ROOT"]; // me guarda todo; el navegador, el lenguaje, la url, las cookies, etc.
$_COOKIE; // Guarda las cookies
$_SESSION; // te guarda la sesion
$_FILES; // guarda los archivos que manda el formulario que se rellena. Se guarda la informacion del archivo que se va mandando

var_dump($_SERVER); // es como el console.log de JavaScript. Sirve para ver los valores de las variables que vas usando.

?>

<?php

if($variable == 34){ // tambien se ponen dos iguales
} // comparar si son iguales

$cadena1 = "Hola";
$cadena2 = " Mundo"

echo $cadena1.$cadena2;

$cadena1.=$cadena2;  // es como $cadena1=cadena1. Lo mismo que $valor +=34

$valor += 34;
$valor = $valor + 34;

// hay dos formas de "no igual" ------>  !=   y   <> 
?>

<?php

// ejemplo para ver si no es igual
$a= 10;
$b= 20;

if($a<$b){
    echo "a es menor a b";
}else if ($a>$b){
    echo "a es mayor que b";
} else{
    echo "a es igual que b";
}

$a = true;
$b = false;

if($a && $b){  // si se pone && y hay uno falso, se queda como falso. Si se pone || es verdadero.
    echo "es verdadero";
}else{
    echo "es falso"
}
// resultado : falso
?>

<?php // crear una tabla de 10 filas y una columna con el número de fila en cada celda
// asi se crean tablas

// despues el color de la fila vaya cambiando de #ccc a #fff
echo "<table>";

    // solo filas
    for ($contador=1;$contador<=10;$contador++){
        echo "<tr><td>$contador</td></tr>";     // si se pone un valor entre dos "", respeta el valor de la variable y no lo modifica
    }

    // filas y columnas
    for ($fila=1;$fila<=10;$fila++){
        // para el color el if
        if ($fila%2 == 0){ // si la fila es par, que se ponga en blanco
        echo "<tr style= 'background-color: #ccc'>";
        }else{
            echo "<tr>";
        }

        for ($columna=1;$columna<=10;$columna++){
        echo "<td> Fila $fila Columna $columna </td>";
        // o asi echo '<td>'.'Fila'.$fila.'Columna'.$columna.'/td>';
        }
        echo"</tr>"; 
    }
echo "</table>";
?>

<?php

// precedencia de los operadores igual que en matemáticas

// Las cadenas tambien son arrays

$cadena = "Hola que tal";

$cadena[0] = "H";

// array sencillo

$semana [0] = "Lunes";
$semana [1] = "Martes";
$semana [2] = "miercoles";
(...)
$semana [6] = "domingo";

$semana ["lunes","martes","miercoles",...,"domingo"]; // array numérico

// array asociativo es mediante una cadena. Array en el quev se usan cadenas como índice. Tienen una manera especial de recorrerse y tambien se pueden definir dentro de otro asociativo
$monedas ["España"] ="euro";
$monedas ["USA"] ="dolar";

$monedas ["España" => "euro", "USA" => "dolar"]; // cada indice tiene un valor

$paises =       // ahora el indice apunta a un array; mas elementos
    "España" => array(
        "moneda" => "euro", 
        "capital" => "Madrid"
    ); 

    "USA" => array(
        "moneda" => "dolar",
        "capital" => "Wasghington"
    );

    echo $paises ["España"]["capital"];

// crear un array asociativo que aguarde que dias hay clase de PHP
$clasePHP =[
    "lunes" => "no" ,
    "martes" => "no",
    "miercoles" => "si",
    "jueves" => "si",
    "viernes" => "si"
] ;

// crear array sencillo con 3 marcas de coche
$marcasBroomBroom = [ "Audi","Peugeot", "BMW"];

$marcasBroomBroom [0] = "Audi";
$marcasBroomBroom [1] = "Peugeot";
$marcasBroomBroom [2] = "BMW";

for ($i = 0 ;$i<count($marcasBroomBroom);$i){
    echo $marcasBroomBroom [$i];
}

 //foreach ---> no llega ningun contador, pregunta ¿que array estoy haciendo ?  coge el array y lee elemento por elemento

foreach ($marcasBroomBroom as $BroomBroom){ 
    echo $marcasBroomBroom;
}

$numero = [ 2,3,6,23,45,75,67];
foreach ($numero as $numeros){
    echo $numeros;
}

// devolver la suma de los números del array
$suma=0;

foreach ($numero as $numeros){
  // asi  echo $suma = $suma + $numero; o la de abajo
    echo $suma +=$numero
}

echo "la suma es "+$suma;


$personas = array (

    array (
        "nombre" => "pepe";
        "edad" => 34;
    ),
    array (
        "nombre" => "maricarmen";
        "edad" => 76;
    )
    );

    var_dump ($personas[0]["nombre"]);

$deportes = array (
    "Futbol" => array (
        "Real Madrid",
        "Barcelona",
        "Valencia",
    ),
    "Motor" => array (
        "Valentino Rossi",
        "Fernando Alonso"
    ),
    "Baloncesto" => array (
        "Ricky Rubio",
        "Michael Jordan",
        "Mirotic"
    )
    );

    $deportes ["Motor"]; // te devuelve  "Valentino Rossi", "Fernando Alonso"
    $deportes ["Futbol"][2]; // te devuelve "Valencia"

    foreach ($deportes as $deporte){
        foreach ($deporte as $equipo){
            echo $equipo;
        }
    }

    // biblia del php ------ > php.net

    // la variable date sirve para dar formato a fechas. Ver tabla en php.net

    include("funciones/funciones.php"); // las funciones definidas dentro del archivo elegido, se pueden usar dentro del archivo. Se suele usar al principio
    require("funciones/funciones.php"); // si da un error con require se para, con el include no

    include_once("funciones/funciones.php"); // si lo incluyes dos veces, te da error porque es la misma. Es mejor usar include_once
    require_once("funciones/funciones.php");


    // ordenar los arrays 
    asort(); // los ordena en orden bueno
    arsort(); // los ordena en orden inverso
    count();
    ksort(); y krsort(); // te ordena los arrays alfabeticamente; el primero hacia arriba y el otro hacia abajo
    
    array_push(); // te añade elementos al final del array por ejemplo array_push ($numero, 34, 56, 68, 32)

    $numero = [ 2,3,6,23,45,75,67];

    $listaOrdenada = asort ($numero);

    array_slice ($numero, 0,3) // recorta un cacho del array. Primero cual cojo (posicion 0) y el segundo cuantos cojo (coge 3 numeros).

    $arrayNuevo = array_shift ($numero)  // te quita el primer elemento del array

    unset($numero); // Deja la variable vacía completamente, cualquier tipo de variable, no solo array
    
    $numero = [ 2,3,6,23,45,75,67];
    $letras = [ "a","b","c","d"];
    $mezcla = array_merge($letras,$numero); // mezcla arrays
    

?>