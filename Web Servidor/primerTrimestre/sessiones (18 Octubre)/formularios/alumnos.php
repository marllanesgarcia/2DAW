<?php

class Alumno(){
    public $nombre;
    public $edad;
    public $curso;

    // al constructor se le pasan todas las variables que vayamos a settear
    // se lanza en el mometno en el que la instancias
    // se le pueden añadir atributos por defecto como ___contruct($nombre,$edad,$curso = "1 de Daw")
    function ___contruct($nombre,$edad,$curso){
        $this -> nombre = $nombre;
        $this -> edad = $edad;
        $this -> curso = $curso;
    }


    // cuando sea private, se usa un ser despues llamandola asi -> $nuevo_alumno -> set_nombre("Manolo");
    function set_nombre($nombre){
        $this -> nombre = $nombre;
    }


    function dameDatos(){
    echo "Nombre: " . $this -> . "</br>";
    echo "Edad: " . $this -> . "</br>";
    echo "Curso: " . $this -> . "</br>";
}
}
$nuevo_alumno = new Alumno();

$nuevo_alumno -> nombre ="Manolo";
$nuevo_alumno -> edad = 22;
$nuevo_alumno -> curso ="2 DAW";

$nuevo_alumno -> dameDatos();

?>