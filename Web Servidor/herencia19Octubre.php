<?php

class Trabajador{
    protected $nombre;
    protected $sueldo;

    public function __construct($nombre,$sueldo){
        $this -> nombre = $nombre;
        $this -> sueldo = $sueldo;
    }

    public function imprimir(){
        echo "El trabajador es" .  $this -> nombre . " y su sueldo es " . $this -> sueldo;
    }

}

class Dependiente extends Trabajador{  
    public $tienda;

    public function imprimir_dependiente(){
        parent::imprimir(); // hace lo mismo que la otra funcion pero le añadimos que imprima la tienda
        echo "La tienda esta en " . $this -> tienda;
    }
}


$currante = new Trabajador ("Antonio", 24000);

$currante -> imprimir();

$dependiente = new Dependiente ("Manolo", 56000);
$dependiente -> tienda = "Centro Comercial Larios";
$dependiente -> imprimir_dependiente();



?>