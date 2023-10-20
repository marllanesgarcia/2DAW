<?php

Class Cabecera{
    public $titulo;
    public $colorFondo;
    public $alineacion;

    public function __construtor(){
        $this -> titulo = $titulo;
        $this -> colorFondo = $colorFondo;
        $this -> alineacion = $alineacion;
    }

    public function ponloBonito(){
        echo "<h1 style='text-align: ".$this -> alineacion."'; backgroung-color:'".
        $this -> colorFondo."'>".$this -> titulo."</h1>";
}
}


$cabecera = new Cabecera("Clase 2 DAW   ","pink","center");

$cabecera = pinta();




?>