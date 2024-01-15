<?php

Class Menu{

    public $contenido;
    public $orientacion;;

    public function __construct($items,$orientacion){
        $this -> items = $items;
        $this -> oriehtacion = $orientacion;
    }

    public function pintaMenu(){
        if($orientacion == "horizontal"){
            foreach($this -> items as $item){
                echo "<span> ".$item. "</span>";
            }
        }
        if($orientacion == "vertical"){
            foreach($this -> items as $item){
                echo "<ul>";
                echo "<li>$item</li>";
                echo "</ul>";
            }
        }
    }

}

$items = array ["Inicio","Quiénes Somos","Contacto"];

$miMenu = new Menu ($items, "horizontal");

$miMenu = pintaMenu("horizontal") // o $miMenu = pintaMenu("vertical")




?>