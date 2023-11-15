<?php
$conexion = new mysqli('localhost', 'root', '', 'alumnos');

// Verificar la conexión
if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $usuario = $_POST["usuario"];
    $password = $_POST["password"];

    // Prepara la consulta SQL con un marcador de posición (?) para el nombre de usuario. En este caso, se espera un valor de cadena ("s").
    $stmt = $conexion->prepare("SELECT id, usuario, password FROM usuarios WHERE usuario = ?");
    if ($stmt === false) {
        die("Error en la preparación de la consulta: " . $conexion->error);
    }
    // Vincula el parámetro prError en la preparación de la consulta: Table 'alumnos.alumnos' doesn't existoporcionado 
    $stmt->bind_param("s", $usuario);
    // Ejecuta la consulta preparada con los valores vinculados.
    $stmt->execute();
    //Almacena el resultado de la consulta en el objeto de declaración preparada.
    $stmt->store_result();

    // Se obtienen los resultados de la consulta
    if ($stmt->num_rows > 0) {
        $stmt->bind_result($id, $usuario, $password);
        $stmt->fetch();

        // Verificar la contraseña sin hash
        if ($password) {
            // La contraseña es correcta
            session_start();
            $_SESSION['usuario_id'] = $id;
            $_SESSION['usuario'] = $usuario;

            echo 'Inicio de sesión exitoso. ¡Bienvenido, ' . $usuario . '!';
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
