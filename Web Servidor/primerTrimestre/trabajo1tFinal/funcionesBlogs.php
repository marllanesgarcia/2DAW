<?php
function obtenerBlogsRecientes($conexion, $cantidad = 5) {
    $consulta = "SELECT id, titulo FROM blog ORDER BY fecha_publicacion DESC LIMIT $cantidad";
    $resultado = $conexion->query($consulta);

    if ($resultado) {
        $blogs = [];
        while ($blog = $resultado->fetch_assoc()) {
            $blogs[] = $blog;
        }
        return $blogs;
    } else {
        return false;
    }
}
?>
