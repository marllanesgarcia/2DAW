<?php
$conexion = new mysqli('localhost', 'root', '', 'tienda');

// Verificar la conexión
if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $usuario = $_POST["usuario"];
    $password_ingresada = $_POST["password"];

    // Prepara la consulta SQL con un marcador de posición (?) para el nombre de usuario. En este caso, se espera un valor de cadena ("s").
    $stmt = $conexion->prepare("SELECT id, nombre, password FROM usuarios WHERE nombre = ?");
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

            if ($usuario) {
                // Lógica adicional de inicio de sesión exitoso
                $_SESSION['nombre_id'] = $id;
                $_SESSION['nombre'] = $usuario;

                echo "<body style= 'background-color: #c9c5e7;'>
                    <div style= 'display:block; justify-content:center; padding: 20%; padding-top:5%; padding-bottom:5%; '>
                        <h2>
                        Inicio de sesión exitoso. ¡Bienvenido, . $usuario .
                        </h2>
                        <br><br>
                        <a href='login.php'>
                        <button style=' background-color: #1b126d; color: white; font-style: italic;'>Volver</button></a>
                        <img src='https://i.pinimg.com/originals/cc/4e/13/cc4e13c7aa8896b068576783e9c379dd.gif'>
                    </div>
                    </body>";
            } else {
                echo "<body style= 'background-color: #c9c5e7;'>
                    <div style= 'display:block; justify-content:center; padding: 10%; '>
                        <h2>
                        Error: Usuario no encontrado.
                        </h2>
                        <br><br>
                        <a href='login.php'>
                        <button style=' background-color: #1b126d; color: white; font-style: italic;'>Volver</button></a>
                        <img src='https://i.pinimg.com/originals/57/f1/fe/57f1fe09982e0a9216a01862a29fa474.gif' style='width:200px; heigth:200px;'>
                    </div>
                    </body>";
            }
        } else {
            // Contraseña incorrecta
            echo "<body style= 'background-color: #c9c5e7;'>
                    <div style= 'display:block; justify-content:center; padding: 10%; '>
                        <h2>
                        Error: Contraseña incorrecta.
                        </h2>
                        <br><br>
                        <a href='login.php'>
                        <button style=' background-color: #1b126d; color: white; font-style: italic;'>Volver</button></a>
                        <img src='https://i.pinimg.com/originals/57/f1/fe/57f1fe09982e0a9216a01862a29fa474.gif' style='width:200px; heigth:200px;'>
                    </div>
                    </body>";
        }
    } else {
        // Usuario no encontrado
        echo "<body style= 'background-color: #c9c5e7;'>
                    <div style= 'display:block; justify-content:center; padding: 10%; '>
                        <h2>
                        Error: Usuario no encontrado.
                        </h2>
                        <br><br>
                        <a href='login.php'>
                        <button style=' background-color: #1b126d; color: white; font-style: italic;'>Volver</button></a>
                        <img src='https://i.pinimg.com/originals/57/f1/fe/57f1fe09982e0a9216a01862a29fa474.gif' style='width:200px; heigth:200px;'>
                    </div>
                    </body>";
    }

    $stmt->close();
    $conexion->close();
}
?>
