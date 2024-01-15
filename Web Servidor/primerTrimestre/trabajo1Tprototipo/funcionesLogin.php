<?php
$conexion = new mysqli('localhost', 'root', '', 'alumnos');

// Verificar la conexión
if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $usuario = $_POST["usuario"];
    $password_ingresada = $_POST["password"];

    // Prepara la consulta SQL con un marcador de posición (?) para el nombre de usuario. En este caso, se espera un valor de cadena ("s").
    $stmt = $conexion->prepare("SELECT id, usuario, password FROM usuarios WHERE usuario = ?");
    if ($stmt === false) {
        die("Error en la preparación de la consulta: " . $conexion->error);
    }
    // Vincula el parámetro proporcionado en la preparación de la consulta.
    $stmt->bind_param("s", $usuario);
    // Ejecuta la consulta preparada con los valores vinculados.
    $stmt->execute();
    // Almacena el resultado de la consulta en el objeto de declaración preparada.
    $stmt->store_result();

    // Se obtienen los resultados de la consulta
    if ($stmt->num_rows > 0) {
        $stmt->bind_result($id, $usuario, $password_bd);
        $stmt->fetch();

        // Verifica si la contraseña ingresada coincide con la contraseña almacenada en la base de datos
        if ($password_ingresada == $password_bd) {
            // Contraseña correcta
            session_start();
            $_SESSION['password'] = $password_bd;
            $_SESSION['password_id'] = $id;

            echo '¡Contraseña correcta!';

            if ($usuario) {
                // Lógica adicional de inicio de sesión exitoso
                $_SESSION['usuario_id'] = $id;
                $_SESSION['usuario'] = $usuario;

                echo 'Inicio de sesión exitoso. ¡Bienvenido, ' . $usuario . '!';
            } else {
                echo 'Error: Usuario no encontrado.';
            }
        } else {
            // Contraseña incorrecta
            echo 'Error: Contraseña incorrecta.';
        }
    } else {
        // Usuario no encontrado
        echo 'Error: Usuario no encontrado.';
    }

    $stmt->close();
    $conexion->close();
}
?>
