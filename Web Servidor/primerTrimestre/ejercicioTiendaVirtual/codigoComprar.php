<?php
$conexion = new mysqli('localhost', 'root', '', 'tienda');

if ($conexion->connect_error) {
    die("Conexión fallida: " . $conexion->connect_error);
}

function obtenerProductoPorId($conexion, $producto_id) {
    $sql = "SELECT id, nombre, descripcion, precio, id_categoria FROM producto WHERE id = $producto_id";
    $resultado = $conexion->query($sql);

    if ($resultado->num_rows > 0) {
        return $resultado->fetch_assoc();
    } else {
        return null;
    }
}

echo "
        <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
        </tr>";

if (isset($_GET['id'])) {
    $producto_id = $_GET['id'];
    $producto = obtenerProductoPorId($conexion, $producto_id);

    if ($producto !== null) {
        echo "<tr>";
        echo "<td>" . $producto["nombre"] . "</td>";
        echo "<td>" . $producto["descripcion"] . "</td>";
        echo "<td>" . $producto["precio"] . "</td>";
        echo "</tr>";
    } else {
        echo "No se encontró el producto.";
    }
} else {
    echo "No se proporcionó un ID de producto.";
}


$conexion->close();
?>

