<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
    .inisible{
        display:none;
    }

    .rojo{
        display: block; 
        color: red;
    }
    
    </style>
</head>

<?php
$clase = "invisible";

?>

<body>
    <form action="" method="POST">
        <label> Nombre y Apellidos *
            <!-- <input type="radio" name="nombre"> <? //if($_POST && $_POST["nombre"] == "") echo "Tienes que rellenarlo, coño"?>
      -->   
      <?php if($_POST $$ $_POST["nombre"] == "") $clase = "rojo" ;?>
         <input type="radio" name="nombre"> <span class="<?php echo $clase;?>">Error</span>
        
        </br>
        <label for="sexo">Sexo:
            <input type="radio" name="sexo" value="masculino" <? if(isset($_POST["sexo"]) && $_POST["sexo"] == "masculino") echo "checked"?>>Hombre
            <input type="radio" name="sexo" value="femenino" <? if(isset($_POST["sexo"]) && $_POST["sexo"] == "femenino") echo "checked"?>>Mujer

            <input for="hobbie"> dime tus hobbies
            <iput type="checkbox" name="hobbie[]" value="bailar"> bailar
            <iput type="checkbox" name="hobbie[]" value="beber"> beber
            <iput type="checkbox" name="hobbie[]" value="Netflix"> Netflix
                <!-- como es un checkbox tiene que buscar la palabra que quiere buscar en el array   -->
            <iput type="checkbox" name="hobbie[]" value="bailar" <? if(isset($_POST["hobbie"]) $$ in_array("bailar",$_POST["hobbie"])) echo "checked";?> > bailar
            <iput type="checkbox" name="hobbie[]" value="beber" <? if(isset($_POST["hobbie"]) $$ in_array("beber",$_POST["hobbie"])) echo "checked";?>> beber
            <iput type="checkbox" name="hobbie[]" value="Netflix" <? if(isset($_POST["hobbie"]) $$ in_array("Netflix",$_POST["hobbie"])) echo "checked";?>> Netflix 
                <!-- como es un checkbox tiene que buscar la palabra que quiere buscar en el array   -->
            
                <label>¿Qué vehiculo usas?</label>
                <select name="vehiculo">
                    <option value="bici" <? if(isset($_POST["vehiculo"]) $$ in_array("bici",$_POST["vehiculo"])) echo "selected";?>>Bicicleta</option>
                    <option value="coche" <? if(isset($_POST["vehiculo"]) $$ in_array("coche",$_POST["vehiculo"])) echo "selected";?>>Coche</option>
                    <option value="andando" <? if(isset($_POST["vehiculo"]) $$ in_array("andando",$_POST["vehiculo"])) echo "selected";?>>andando</option>
                    <option value="volando" <? if(isset($_POST["vehiculo"]) $$ in_array("volando",$_POST["vehiculo"])) echo "selected";?>>volando</option>
                </select>

                <label> Danos tu opinión </label>
                <textarea name="opinion" rows="20" cols="50"> <? if($_POST ) echo $_POST ["opinion"];?>></textarea>

            <input type="button" value="Enviar">
    </form>

    <?php
    if ($_POST){
        var_dump($_POST);
    }
    ?>
</body>
</html>





<!-- Classes -->
<?php

class alumno{
private $nombre;
public $curso;

public function set_nombre($nombre){
$this->nombre = $nombre;
}

public function comer(){

}

public function desplazarse(){

}

public function dame_info(){
echo "Nombre:".$this->nombre;
echo "<br>";
echo "Curso: ".$this->curso;
}
}

$pepe = new alumno();

$pepe->set_nombre("Manolo");

$pepe->curso = "2 DAW";

$pepe->dame_info();