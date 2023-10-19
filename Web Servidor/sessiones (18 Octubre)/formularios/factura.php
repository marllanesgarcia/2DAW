<?php

/*
si quieres usar una clase de otro archivo, se usar:  include("nombre del archivo");
*/

class Factura{

    public $dni;
    public $total;
    public $estado;

    function ___contruct($dni,$total,$estado = "Pendiente"){
        $this -> dni = $dni;
        $this -> total = $total;
        $this -> estado = $estado;
    }


    function imprime_factura(){
        echo "Persona: " . $this -> dni . "</br>";
        echo "Total: " . $this -> total . "</br>";
        echo "Estado: " . $this -> estado . "</br>";
    }

}

$factura = new Factura("26284623Q", 38456);

$factura -> imprime_factura();





?>
