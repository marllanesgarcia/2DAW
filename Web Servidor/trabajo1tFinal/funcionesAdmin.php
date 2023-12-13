<?php

function establecerConexion() {
    $conexion = new mysqli('localhost', 'root', '', 'phasmofobia');
    if ($conexion->connect_error) {
        die("Error de conexión: " . $conexion->connect_error);
    }
        return $conexion;
}

function cerrarConexion($conexion) {
    $conexion->close();
}

function obtenerRolUsuario($conexion, $nombre_usuario) {
    $consulta = "SELECT rol FROM usuarios WHERE usuario = ?";
    $datos = $conexion->prepare($consulta);
    $datos->bind_param("s", $nombre_usuario);
    $datos->execute();
    $resultado = $datos->get_result();

    if ($resultado && $resultado->num_rows > 0) {
        $fila = $resultado->fetch_assoc();
        return $fila['rol'];
    } else {
        return false;
    }
}

function obtenerBlogs($conexion) {
    $consulta = "SELECT id, titulo FROM blog";
 //   echo $consulta; 
    $resultado = $conexion->query($consulta);
    if (!$resultado) {
        die("Error en la consulta: " . $conexion->error);
    }
    $lista_blogs = [];
    while ($blog = $resultado->fetch_assoc()) {
        $lista_blogs[] = $blog;
    }

    return $lista_blogs;
}

function obtenerCategorias($conexion) {
    $consulta = "SELECT id, nombre FROM categorias";
    $resultado = $conexion->query($consulta);
    if (!$resultado) {
        die("Error en la consulta: " . $conexion->error);
    }
    $lista_categorias = [];
    while ($categoria = $resultado->fetch_assoc()) {
        $lista_categorias[] = $categoria;
    }

    return $lista_categorias;
}


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['blog_id'], $_POST['categoria_id'])) {
        $blog_id = $_POST['blog_id'];
        $categoria_id = $_POST['categoria_id'];

        $conexion = establecerConexion();

        $consulta = "UPDATE blog SET nombre_categoria = ? WHERE id = ?";
        $datos = $conexion->prepare($consulta);
        $datos->bind_param("si", $categoria_id, $blog_id);
        
        if ($datos->execute()) {
            echo "<body style= 'background-color: black;'>
            <div style= 'display:block; justify-content:center; padding: 20%; padding-top:5%; padding-bottom:5%; '>
                <h2 style= 'color:white;'>
                ¡Categoria perfectamente asignada!
                </h2>
                <br><br>
                <a href='administrador.php'>
                <button style=' background-color: purple; color: white; font-style: italic;'>Volver</button></a>
                <img src='https://i.pinimg.com/originals/cc/4e/13/cc4e13c7aa8896b068576783e9c379dd.gif'>
            </div>
            </body>";
        } else {
            echo "<body style= 'background-color: black;'>
            <div style= 'display:block; justify-content:center; padding: 20%; padding-top:5%; padding-bottom:5%; '>
                <h2 style= 'color:white;'>
                ¡Esta mal! Tienes que hacerlo otra vez.  $datos->error 
                </h2>
                <br><br>
                <a href='administrador.php'>
                <button style=' background-color: purple; color: white; font-style: italic;'>Volver</button></a>
                <img src='https://i.pinimg.com/originals/57/f1/fe/57f1fe09982e0a9216a01862a29fa474.gif' style='width:200px; heigth:200px;'>
            </div>
            </body>";
        }
        $datos->close();
        $conexion->close();
    } else {
        echo "Parámetros insuficientes.";
    }}

?>
