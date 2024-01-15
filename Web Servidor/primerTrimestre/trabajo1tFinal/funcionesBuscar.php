<?php
function buscarPorCategoria($conexion, $categoria) {
    $consulta = "SELECT titulo, introduccion, contenido, nombre as categoria
                 FROM blog
                 INNER JOIN categorias ON nombre_categoria
                 WHERE nombre = '$categoria'";

    $resultado = $conexion->query($consulta);

    if ($resultado) {
        $resultados = [];
        while ($blog = $resultado->fetch_assoc()) {
            $resultados[] = $blog;
        }
        return $resultados;
    } else {
        return false;
    }
}
?>