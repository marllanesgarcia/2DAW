<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    $paises = array("España", "Francia", "Alemania", "Inglaterra", "EEUU", "Italia");
    ?>
    <form id="paquete" action="comprobar.php" method="POST">
        <label>Usuario *</label>
        <input type="text" name="usuario" id="usuario" placeholder="usuario" value="<?php if (isset($_POST["usuario"])) { echo $_POST["usuario"]; } ?>">
        <br>
        <label>Conraseña</label>
        <input type="text" name="contrasena" id="contrasena">
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

        <input type="submit" value="Enviar">
    </form>
</body>
</html>
