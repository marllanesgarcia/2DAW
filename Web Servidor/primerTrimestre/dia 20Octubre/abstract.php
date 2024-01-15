<?php

abstract class Encendible {

}

class Bombilla extends Encendible {
    public function encender (){
        echo "La bombilla está encendida";
    }
}

class Coche extends Encendible{
    public function encender(){
        echo "El coche hace run run";
    }
}


interface Animal{
    public function hazRuido();
    public function muevete();
}

class Perro implements Animal{
    public function hazRuido(){
        echo "GUAU";
    }
    public function muevete(){
        echo "el perro camina";
    }
}

class Pez implements Animal{
    public function hazRuido(){
        echo "GLU GLU";
    }
    public function muevete(){
        echo "el pez nada";
    }
}



?>