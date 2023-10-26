<!-- <?

// msqli = clase de conexion a una bbdd

// $conexion = new mysqli("host","usuario","clave","bbdd")

$conexion = new msqli("localhost","root","","cenec");

if($conexion -> connect_errno){  // registra el codigo de error que hubo
    echo "Error de conexion";
}else{
    echo "La conexion se ha realizado sin problemas";
}

$conexion -> close();

// jason es como se comunican el php y el javascript

// leer datos de la base de datos:

// se hay resultado de la base de datos: devuelve un array asociativo
$sql = "SELECT * FROM alumnos";

$resultado = $conexion->query($sql);

?>

// va a coger fila por fila los resultados
<table class="table table-striped">
    <tr>
        <td> ID </td>
        <td> Nombre </td>
        <td> Apellidos </td>
        <td> DNI </td>
        <td> Teléfono </td>
    </tr>
<?php

// leemos los resultadps de la consulta
while($row=$resultado->fetch-array()){
echo "<tr>
        <td>".$row["id_alumno"]."</td>
        <td>".$row["nombre"]."</td>
        <td>".$row["apellidos"]."</td>
        <td>".$row["dni"]."</td>
        <td>".$row["telefono"]."</td>
        </tr>";
}

?>
</table> -->


<!-- codigo profesor -->

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
<title>Document</title>
</head>
<body>

<?php
$conexion = new mysqli("localhost", "root", "", "gestion_practicas");

$id_alumno = $_GET["id_alumno"];

$sql_alumno = "SELECT * FROM alumnos WHERE id_alumno = ".$id_alumno;

$alumno = $conexion->query($sql_alumno);

while($row = $alumno->fetch_array()){
echo "Nombre: ".$row["nombre"]."<br>";
echo "Apellidos: ".$row["apellidos"]."<br>";
echo "DNI: ".$row["dni"]."<br>";
echo "Telefono: ".$row["telefono"]."<br>";
}

while ($row = $resultado->fetch_array()) {
    echo "<tr>
    <td>" . $row["id_alumno"] . "</td>
    <td>" . $row["nombre"] . "</td>
    <td>" . $row["apellidos"] . "</td>
    <td>" . $row["dni"] . "</td>
    <td>" . $row["telefono"] . "</td>
    <td><a href='datos_alumnos.php?id_alumno=" . $row["id_alumno"] . "'>
    <i class='bi bi-apple'></i></a></td>
    </tr>";
    }
}

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
?>


SELECT COUNT(*) FROM alumnos;


</body>
</html>