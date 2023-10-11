<?php

$array=[1,2,3,4,5];

$mi_valor = array(
    "nombre"=>"Diego",
    "apellidos"=>"Fernández Ortega",
    "Cuidad"=>"Albacete");

    foreach($mi_array as $clave=>$valor){
        echo $clave;
        echo "<br>";
        echo $valor;
    }

    // implode: coge un array y lo convierte en una cadena. Coge cada elemento del array
    // w3schools

    function sumar($a,$b){
        $sumar = $a + $b;
        echo $sumar;  // cunado una funcio  devuelve algo, es una funcion
        // return $sumar; -> el return siempre al final
    }

    $mi_suma = sumar (34,54); // si no llamo a la funcion, no hace nada
    
    $alumnos = array(
        array("nombre" => "Manolo Pérez", "nota" => 6.5),
        array("nombre" => "Antonio Pérez", "nota" => 8),
        array("nombre" => "María Gómez", "nota" => 9.1),
        array("nombre" => "Manolo Pérez II", "nota" => 7.5),
        array("nombre" => "Antonio Pérez II", "nota" => 9),
        array("nombre" => "María Gómez II", "nota" => 8.1),
        array("nombre" => "Manolo Pérez III", "nota" => 3.5),
        array("nombre" => "Antonio Pérez III", "nota" => 7),
        array("nombre" => "María Gómez III", "nota" => 6.1)
        );

        function nota_media ($array_alumnos){
            $suma = 0;
            // 1. leer las notas
            // 2. sumarlas
            foreach ($array_alumnos as $alumnos){
                $suma = $suma + $alumnos ["nota"];
            }
            // 3. dividir entre el número de alumnos
            $numero_alumnos = count (Ç$array_alumnos);
            // 3. dividir entre el número de alumnos
            // 4. guardarlo en una variable $media
            $media = $suma / $numero_alumnos;

            return $media;
        }

        echo nota_media($alumnos);


        // funcion que sume 4 numeros  y que imprima el resultado en pantalla
        function sumar($a, $b, $c, $d){
            $sumar = $a + $b + $c + $d;

            echo "Tu suma vale: ",$sumar;
        }
        echo sumar(3,4,5,6);

        // funcion en la que sumes un numero indeterminado de numeros
        function sumar($numeritos){
            $sumar = 0;

            foreach ($numeritos as $numero){
                $sumar += $numero;
            }
            echo "Tu suma vale: ",$sumar[];
        }
        echo sumar(3,4,5,6);

        $mis_numeros = [4,7,8,9,10];

        echo sumar($mis_numeros);

        // definir constantes
        define ("PI",3.14);
        print "<p>El valor de Pi es ". PI . "</p>\n";

        const AUTOR2 = "Bartolomé Sintes Marco";


        // construir una tabla donde la primeraw fila sea nombre, email y telefono.
        // y despues que la tabla se rellene con los valores

        $clase = [
            ["nombre" =>"Francisco López", "email" => "flopez@gmail.com", "telefono" => 655456578],
            ["nombre" =>"Francisco López", "email" => "flopez@gmail.com", "telefono" => 655456578],
            ["nombre" =>"Francisco López", "email" => "flopez@gmail.com", "telefono" => 655456578],
            ["nombre" =>"Francisco López", "email" => "flopez@gmail.com", "telefono" => 655456578],
            ["nombre" =>"Francisco López", "email" => "flopez@gmail.com", "telefono" => 655456578]
            ];

            for ($fila=1;$fila<=10;$fila++){

                
                $primeraFila = $fila  = 1;
                echo "nombre"."email"."telefono";

                for ($columna=1;$columna<=10;$columna++){
                echo "<td> Fila $fila Columna $columna </td>";
                
                // o asi echo '<td>'.'Fila'.$fila.'Columna'.$columna.'/td>';
                foreach ($clase as $alumnos){
                echo $resultado = $fila.$almnos;
                } 
            }
                echo"</tr>"; 
            }
        echo "</table>"; 
?>
            <table>
                <tr>
                    <td> Nombre </td>
                    <td> Email </td>
                    <td> Teléfono </td>
                </tr>

            <?php

            foreach ($clase as $alumno){
                echo "<tr>
                        <td>".$alumno["nombre"]."</td>
                        <td>".$alumno["email"]."</td>
                        <td>".$alumno["telefono"]."</td>
                        </tr>"
            }

            $nombre = "Paco";
            $edad = 55;

            echo $nombre." tiene ".$edad." años";
            ?>
            </table>

<? 

function calculo($radio){
    $area =pi() * $radio^2;
    $longitud = 2 * pi() * $radio;

    $resutado = array (
        "lontigud" => $longitud,
        "area" => $area
    );

    return $resultado;
}

$calculo_circulo = calculo(10);

echo "el area de mi circunferencia es ". $calculo_circulo["area"];

echo "<br>";


$agenda_proxima_semana = [
    "lunes" => "Poner lavadora",
    "martes" => "Limpieza de la casa",
    "miercoles" => "Ir al supermercado",
    "jueves" => "Planchar",
    "viernes" => "Salir con los colegas",
    "sabado" => "Partido de padle",
    "domingo" => "Descansar"
    ];

    function leer_agenda($agenda){
        foreach ($agenda as $dia => $tarea){
            echo "El dia $dia tengo que $tarea<br>";
        }
    }

    /*
    echo "<table>"
    $tus_filas = 0;
    $tus_columnas = 0;

    for ($fila=1;$fila<$tus_filas;$fila++){
        // para el color el if
        if ($fila%2 == 0){ // si la fila es par, que se ponga en blanco
        echo "<tr style= 'background-color: #ccc'>";
        }else{
            echo "<tr>";
        }

        for ($columna=1;$columna<$tus_columnas;$columna++){
        echo "<td> Fila numero $fila Columna numero $columna </td>";

        }
        echo"</tr>"; 
    }
echo "</table>";
*/

    function tableador($filas,$columnas){
        echo "<table>";
            for ($i = 1; $i => $filas ; $i++){
                echo "<tr>";
            
            for ($k = 1 ; $k => $columnas){
                echo "<td> Fila numero $i Columna numero $k </td>";
            }
            echo "</tr>"
        }
        echo "</table>";
    }

    tableador (5,3);

    // funcion que devuelva la tabla de multiplicar de cual esa

    //$tabla_multiplicar [9];
//    $resultado[9];


    function tabla_multiplicar($tabla){
        for ($i = 1; $i => $filas ; $i++){
            echo " $numero * $i = ".($numero * $i);
        /*   echo "<tr>";
            echo $tabla_multiplicar[0]." x ".$resultado[0];
        for ($k = 1 ; $k => $columnas){
            echo "<td>";
        }
        echo "</tr>"*/
    }
    }

    $cadena = "a-a-a-r-e-f-a";

    // sustituir a por tortuga

    $cadena =str_replace("a","tortuga",$cadena);

    echo $cadena;

    // separar por "-";

    $mi_array = explode ("-",$cadena);

    var_dump ($mi_array);

    // longitud de array

    echo $cadena[3];

    echo count($mi_array);

    $cadena = "esta es la cadena que vamos a quitarle los espacios";
    $cadena_sin_espacio = str_replace(" ","",$cadena);

    // LA PRIMERA LETRA EN MAYSUCULA
    $cadena2 = ucfirst($cadena);

    $dia_ingles = Date("D"); // Mon Tue Wen

    switch ($dia_ingles){
        case "Mon":
            echo "Hoy es Lunes";
            break;
        case "Tue":
            echo "Hoy es Martes";
            break;
        case "Wen":
            echo "Hoy es Miércoles";
            break;
        case "Thr":
            echo "Hoy es Jueves";
            break;
        case "Fri":
            echo "Hoy es Viernes";
            break;
        case "Sat":
            echo "Hoy es Sábado";
            break;
        case "Sun":
            echo "Hoy es Domingo";
            break;
    }


?>




