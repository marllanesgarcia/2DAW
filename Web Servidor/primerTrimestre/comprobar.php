<!DOCTYPE html>
<html>
<head>
    <title>Resultado del Formulario</title>
</head>
<body>
    <h1>Resultado del Formulario</h1>
    <?php
    if ($_SERVER["REQUEST_METHOD"] === "POST") {
        $nombre = $_POST["nombre"];
        $apellidos = $_POST["apellidos"];
        $edad = $_POST["edad"];
        $direccion = $_POST["direccion"];
        $provincia = $_POST["provincia"];
        $titulacion = $_POST["titulacion"];
        $hobbies = $_POST["hobbies"];
        echo "Tus datos del formulario son:<br>";
        echo "Nombre: " . $nombre . "<br>";
        echo "apellidos: " . $apellidos;
        echo "edad: " . $edad;
        echo "direccion: " . $direccion;
        echo "provincia: " . $provincia;
        echo "titulacion: " . $titulacion;
        echo "hobbies: " . $hobbies;
    } else {
        echo "No se han enviado datos.";
    }
    ?>
</body>
</html>
