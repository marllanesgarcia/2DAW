<?php

abstract class operacion{   
    private $num1;
    private $num2;

    public function __contruct($num1,$num2){
        $this -> num1 = $num1;
        $this -> num2 = $num2;
    }

    abstract public function operar(){

    }
}

class Sumar extends Operacion{
    
    public function operar(){
        echo "La suma es " . ($this -> num1 + $this -> num2);
    }
}

class Restar extends Operacion{
    
    public function operar(){
        echo "La resta es " . ($this -> num1 - $this -> num2);
    }
}


$suma = new Suma(34,43);

 

$resta = new Resta(88,43);

$resta -> operar();

?>