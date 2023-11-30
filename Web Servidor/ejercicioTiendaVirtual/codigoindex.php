<?php
$conexion = new mysqli('localhost', 'root', '', 'tienda');

if ($conexion->connect_error) {
    die("Conexión fallida: " . $conexion->connect_error);
}

$sql = "SELECT id, nombre, descripcion, precio, id_categoria FROM producto";
$resultado = $conexion->query($sql);

if ($resultado->num_rows > 0) {
    echo "<table>";
    echo "<tr><th>Nombre</th><th>Descripción</th><th>Precio</th></tr>";

    while($row = $resultado->fetch_assoc()) {
        echo "<tr>";
        echo "<td>" . $row["nombre"] . "</td>";
        echo "<td>" . $row["descripcion"] . "</td>";
        echo "<td>" . $row["precio"] . "</td>";
        echo "<td>  <a href='comprar.php?id=".$row["id"]."'>🛒</a>
        </tr>"; 
    }

    echo "</table>";
} else {
    echo "No hay productos en la base de datos.";
}

$conexion->close();
?>
