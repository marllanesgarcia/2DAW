<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome!!!</title>
</head>
<body>
    <?php
    $titulos = array("Bachiller", "Instituto", "Colegio", "Universidad", "Grado Superior", "Grado Medio","Nada");
    $hobbies = array("Cantar", "Bailar", "Dibujar", "Netflix", "Hacer Deporte", "Programar","Nada");
    ?>

    <form id="paquete" action="comprobar.php" method="POST">
            <label>Nombre</label>
            <input type="text" name="nombre" id="nombre" placeholder="nombre">
            <br>
            <label>Apellidos</label>
            <input type="text" name="apellidos" id="apellidos" placeholder="apellidos">
            <br>
            <select name="paises">
                <?php foreach ($paises as $pais) { ?>
                    <option value='<?php echo $pais; ?>'><?php echo $pais; ?></option>
                <?php } ?>
            </select>
            <?php
            foreach ($paises as $pais) {
                echo "<input type='radio' name='pais' value='$pais'>$pais";
            }
            ?>
            <br>
            <input type="submit" value="Enviar">
    </form>


</body>
</html>