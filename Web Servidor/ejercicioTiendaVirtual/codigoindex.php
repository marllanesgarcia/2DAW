<?php
$conexion = new mysqli('localhost', 'root', '', 'tienda');

// Verificar la conexión
if ($conexion->connect_error) {
    die("Conexión fallida: " . $conexion->connect_error);
}

// Consulta para obtener productos e imágenes
$sql = "SELECT id, nombre, descripcion, precio, id_categoria, ruta_imagen FROM producto";
$resultado = $conexion->query($sql);

if ($resultado->num_rows > 0) {
    echo "<table>";
    echo "<tr><th>Nombre</th><th>Descripción</th><th>Precio</th><th>Imagen</th></tr>";

    while($row = $resultado->fetch_assoc()) {
        echo "<tr>";
        echo "<td>" . $row["nombre"] . "</td>";
        echo "<td>" . $row["descripcion"] . "</td>";
        echo "<td>" . $row["precio"] . "</td>";
        echo "<td><img src='" . $row["ruta_imagen"] . "' alt='Imagen del producto'></td>";
        echo "</tr>";
    }

    echo "</table>";
} else {
    echo "No hay productos en la base de datos.";
}

// Cerrar conexión
$conexion->close();
?>
