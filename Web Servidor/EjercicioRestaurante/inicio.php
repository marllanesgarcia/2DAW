<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="mesas.css">
    <title>Gestor de Reservas</title>
</head>
<body>

<div style="text-align: center;" id="div1">
    <h1>Gestor de Reservas</h1>


    <!-- <form method="post" action="funcionesMesas.php">
    <label for="nombre">Número de comensales:</label>
        <input type="text" name="nombre" id="nombre" required>
        </br>

    <label for="mesa">Selecciona el día:</label>
        <select name="dia" id="dia">
            <option value="lunes">Lunes</option>
            <option value="martes">Martes</option>
            <option value="miercoles">Miércoles</option>
            <option value="jueves">Jueves</option>
            <option value="viernes">Viernes</option>
            <option value="sabado">Sábado</option>
            <option value="domingo">Domingo</option>
        </select>
        </br>

        <label for="comensales">Número de comensales:</label>
        <p> De 1 a 8 comensales</p>
        <input type="number" name="comensales" id="comensales" min="1" required>
        <br> -->


        <form method="post" action="funcionesMesas.php">
    <label for="nombre">Nombre:</label>
    <input type="text" name="nombre" id="nombre" required>
    <br>

    <label for="dia">Selecciona el día:</label>
    <select name="dia" id="dia">
        <option value="lunes">Lunes</option>
        <option value="martes">Martes</option>
        <option value="miercoles">Miércoles</option>
        <option value="jueves">Jueves</option>
        <option value="viernes">Viernes</option>
        <option value="sabado">Sábado</option>
        <option value="domingo">Domingo</option>
    </select>
    <br>

    <label for="comensales">Número de comensales:</label>
    <p> De 1 a 8 comensales</p>
    <input type="number" name="comensales" id="comensales" min="1" max="8" required>
    <br>

    <button type="submit" name="consultar_mesas">Consultar Mesas Disponibles</button>
    </br>
    &nbsp;
    </br>
    </br>
    &nbsp;
    </br>
    </br>
    &nbsp;
    </br>
    </br>
    &nbsp;
    </br>
        <img src="https://www.withfor.com/wp-content/uploads/2022/07/696c745675e78971ed170d16d26efdac-1200x800.jpg" alt="Imagen de restaurante" style="width: 500px; height: auto;">
    </form>
</div>

</body>
</html>
