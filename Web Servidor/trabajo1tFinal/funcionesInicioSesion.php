<?php
$conexion = new mysqli('localhost', 'root', '', 'phasmofobia');

if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $usuario = $_POST["usuario"];
    $contrasena_ingresada = $_POST["contrasena"];

    $stmt = $conexion->prepare("SELECT id, usuario, contrasena, rol FROM usuarios WHERE usuario = ?");
    if ($stmt === false) {
        die("Error en la preparación de la consulta: " . $conexion->error);
    }
    
    $stmt->bind_param("s", $usuario);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        $stmt->bind_result($id, $usuario, $contrasena_bd, $rol);
        $stmt->fetch();

        if ($contrasena_ingresada == $contrasena_bd) {
            session_start();
            $_SESSION['contrasena'] = $contrasena_bd;
            $_SESSION['contrasena_id'] = $id;

            if ($usuario) {
                $_SESSION['usuario_id'] = $id;
                $_SESSION['usuario'] = $usuario;

                echo "<body style= 'background-color: black;'>
                    <div style= 'display:block; justify-content:center; padding: 20%; padding-top:5%; padding-bottom:5%; '>
                        <h2 style= 'color:white;'>
                        Inicio de sesión exitoso. ¡Bienvenido, $usuario!
                        </h2>
                        <br><br>
                        <a href='index.php'>
                        <button style=' background-color: purple; color: white; font-style: italic;'>Volver</button></a>
                        <img src='https://i.pinimg.com/originals/cc/4e/13/cc4e13c7aa8896b068576783e9c379dd.gif'>
                    </div>
                    </body>";
            } else {
                echo "<body style= 'background-color: black;'>
                    <div style= 'display:block; justify-content:center; padding: 10%; '>
                        <h2 style= 'color:white;'>
                        Error: Usuario no encontrado.
                        </h2>
                        <br><br>
                        <a href='formulario.php'>
                        <button style=' background-color: purple; color: white; font-style: italic;'>Volver</button></a>
                        <img src='https://i.pinimg.com/originals/57/f1/fe/57f1fe09982e0a9216a01862a29fa474.gif' style='width:200px; heigth:200px;'>
                    </div>
                    </body>";
            }
        } else {
            echo "<body style= 'background-color: black;'>
                    <div style= 'display:block; justify-content:center; padding: 10%; '>
                        <h2 style= 'color:white;'>
                        Error: Contraseña incorrecta.
                        </h2>
                        <br><br>
                        <a href='formulario.php'>
                        <button style=' background-color: purple; color: white; font-style: italic;'>Volver</button></a>
                        <img src='https://i.pinimg.com/originals/57/f1/fe/57f1fe09982e0a9216a01862a29fa474.gif' style='width:200px; heigth:200px;'>
                    </div>
                    </body>";
        }
    } else {
        echo "<body style= 'background-color: black;'>
                    <div style= 'display:block; justify-content:center; padding: 10%; '>
                        <h2 style= 'color:white;'>
                        Error: Usuario no encontrado.
                        </h2>
                        <br><br>
                        <a href='formulario.php'>
                        <button style=' background-color: purple; color: white; font-style: italic;'>Volver</button></a>
                        <img src='https://i.pinimg.com/originals/57/f1/fe/57f1fe09982e0a9216a01862a29fa474.gif' style='width:200px; heigth:200px;'>
                    </div>
                    </body>";
    }

    $stmt->close();
    $conexion->close();
}
?>
