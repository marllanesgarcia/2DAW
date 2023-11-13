<?php
include("./codigobbdd.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["usuario"];
    $contrasena = $_POST["password"];

    conectar();

    $stmt = $conexion->prepare("SELECT id, usuario, password FROM alumnos WHERE usuario = ?");
    $stmt->bind_param("s", $usuario);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        $stmt->bind_result($id, $usuario, $password);
        $stmt->fetch();

        if (password_verify($password, $hashedPassword)) {
            session_start();
            $_SESSION['usuario_id'] = $id;
            $_SESSION['usuario'] = $nombreUsuario;

            echo 'Inicio de sesión exitoso. ¡Bienvenido, ' . $usuario . '!';
        } else {
            echo 'Error: Contraseña incorrecta.';
        }
    } else {
        echo 'Error: Usuario no encontrado.';
    }

    $stmt->close();
    cerrar();
}
?>
