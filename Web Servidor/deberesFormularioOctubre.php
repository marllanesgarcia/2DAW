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
    $hobbies = array("Cantar", "Bailar", "Dibujar", "Netflix", "Hacer Deporte", "Jugar videojuegos","Nada");
    ?>

    <h1> ¡Bienvenido a tu Formulario </h1>
    <br>
    <form id="paquete" action="comprobar.php" method="POST">
            <label>Nombre</label>
            <input type="text" name="nombre" id="nombre" placeholder="nombre">
            <br>
            <label>Apellidos</label>
            <input type="text" name="apellidos" id="apellidos" placeholder="apellidos">
            <br>
            <label>Edad</label>
            <input type="text" name="edad" id="edad" placeholder="edad">
            <br>
            <label>Dirección</label>
            <input type="text" name="direccion" id="direccion" placeholder="direccion">
            <br>
            <label>Provincia</label>
            <input type="text" name="provincia" id="provincia" placeholder="provincia">
            <br>
            <select name="$titulos">
                <?php foreach ($titulos as $titulo) { ?>
                    <option value='<?php echo $titulo; ?>'><?php echo $titulo; ?></option>
                <?php } ?>
            </select>
            <select name="$hobbies">
                <?php foreach ($hobbies as $hobbie) { ?>
                    <option value='<?php echo $hobbie; ?>'><?php echo $hobbie; ?></option>
                <?php } ?>
            </select>
            <?php
            foreach ($titulos as $titulo) {
                echo "<input type='radio' name='titulo' value='$titulo'>$titulo";
            }

            foreach ($hobbies as $hobbie) {
                echo "<input type='radio' name='hobbie' value='$hobbie'>$hobbie";
            }
            
            ?>
            <br>
            <input type="submit" value="Enviar">
    </form>


</body>
</html>