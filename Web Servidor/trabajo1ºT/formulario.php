<!DOCTYPE html>
<html>
<head>
    <title>Formulario de Registro</title>
</head>
<body>
    <?php
    // Valores predeterminados para usuario y contraseña (puedes cambiarlos según tus necesidades)
    $usuario_predeterminado = "usuario";
    $contrasena_predeterminada = "contrasena";

    // Verificar si se ha enviado el formulario
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Recuperar los datos del formulario
        $usuario = $_POST["usuario"];
        $contrasena = $_POST["contrasena"];

        // Validar los datos
        if (empty($usuario) || empty($contrasena)) {
            echo "Por favor, completa todos los campos.";
        } else {
            // Verificar la contraseña
            if ($usuario === $usuario_predeterminado && $contrasena === $contrasena_predeterminada) {
                // Mostrar el mensaje de bienvenida
                echo "¡Bienvenido, " . $usuario . "!";
            } else {
                // Mostrar un mensaje de error si la contraseña es incorrecta
                echo "Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.";
            }
        }
    }
    ?>
    
    <h2>Formulario de Registro</h2>
    <form method="post" action="

    <?php 
    echo htmlspecialchars($_SERVER["PHP_SELF"]); 
    ?> 

        <label for="usuario">Usuario:</label>
        <input type="text" name="usuario" id="usuario"><br><br>
        
        <label for="contrasena">Contraseña:</label>
        <input type="password" name="contrasena" id="contrasena"><br><br>
        
        <input type="submit" value="Registrarse">
    </form>
</body>
</html> 




<!-- 
con base de datos: 
<!DOCTYPE html>
<html>
<head>
    <title>Formulario de Registro</title>
</head>
<body>
   <?php
    // Conexión a la base de datos (modifica estas variables según tu configuración)
    /*
    $servername = "localhost";
    $username = "tu_usuario";
    $password = "tu_contraseña";
    $dbname = "tu_base_de_datos";

    // Crear una conexión
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Verificar la conexión
    if ($conn->connect_error) {
        die("Conexión fallida: " . $conn->connect_error);
    }

    // Verificar si se ha enviado el formulario
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Recuperar los datos del formulario
        $usuario = $_POST["usuario"];
        $contrasena = $_POST["contrasena"];

        // Validar los datos
        if (empty($usuario) || empty($contrasena)) {
            echo "Por favor, completa todos los campos.";
        } else {
            // Verificar la contraseña en la base de datos
            $sql = "SELECT * FROM usuarios WHERE usuario = ?";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("s", $usuario);
            $stmt->execute();
            $result = $stmt->get_result();

            if ($result->num_rows > 0) {
                $row = $result->fetch_assoc();
                $hash = $row["contrasena"];

                if (password_verify($contrasena, $hash)) {
                    echo "¡Bienvenido, " . $usuario . "!";
                } else {
                    echo "Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.";
                }
            } else {
                echo "Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.";
            }

            $stmt->close();
        }
    }

    // Cerrar la conexión a la base de datos
    $conn->close();*/
    ?>

    <h2>Formulario de Registro</h2>
    <form method="post" action="<?php // echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
        <label for="usuario">Usuario:</label>
        <input type="text" name="usuario" id="usuario"><br><br>
        
        <label for="contrasena">Contraseña:</label>
        <input type="password" name="contrasena" id="contrasena"><br><br>
        
        <input type="submit" value="Registrarse">
    </form>
</body>
</html>


 -->