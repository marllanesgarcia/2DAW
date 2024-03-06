<?php
$conexion = new mysqli('localhost', 'root', '', 'proyectoFinal');

if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $usuario = $_POST["usuario"];
    $password_ingresada = $_POST["password"];

    $stmt = $conexion->prepare("SELECT id, usuario, password, correo FROM usuarios WHERE usuario = ?");
    if ($stmt === false) {
        die("Error en la preparación de la consulta: " . $conexion->error);
    }
    
    $stmt->bind_param("s", $usuario);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        $stmt->bind_result($id, $usuario, $password_bd, $correo);
        $stmt->fetch();

        if ($password_ingresada == $password_bd) {
            session_start();
            $_SESSION['password'] = $password_bd;
            $_SESSION['password_id'] = $id;

            if ($usuario) {
                $_SESSION['usuario_id'] = $id;
                $_SESSION['usuario'] = $usuario;

                echo "<body style= 'width: 100%; height: 100%; margin: 0; padding: 0;background: linear-gradient(to bottom right, #5C0000, #9E1717);'>
                <div style= 'position: relative; top:10%; left: 50%; transform: translate(-50%, 50%);
                width: 80%; max-width: 400px; padding: 20px; background-color: #f0f0f0b9;
                border-radius: 10px; text-align: center; box-shadow: 0 0 10px white;'>
                <h2 style='color:white'>
                Inicio de Sesión Realizado <br>
                ¡Bienvenido, " . $usuario . "!
                </h2>
                <br>
                <a href='index.php'>
                <button style='background-color:black; color: white; font-style: italic; padding: 8px 16px; border-radius: 4px; border: none; cursor: pointer;'>Home</button></a>
                </br>
            </div>
            </body>";
            } else {
                echo "<body style= 'width: 100%; height: 100%; margin: 0; padding: 0;background: linear-gradient(to bottom right, #5C0000, #9E1717);'>
                <div style= 'position: relative; top:10%; left: 50%; transform: translate(-50%, 50%);
                width: 80%; max-width: 400px; padding: 20px; background-color: #f0f0f0b9;
                border-radius: 10px; text-align: center; box-shadow: 0 0 10px white;'>
                <h2 style='color:white'>
                Error: Usuario No Encontrado.
                </h2>
                <br>
                <a href='login.php'>
                <button style='background-color:black; color: white; font-style: italic; padding: 8px 16px; border-radius: 4px; border: none; cursor: pointer;'>Home</button></a>
                </br>
            </div>
            </body>";
            } 
        } else {
            echo "<body style= 'width: 100%; height: 100%; margin: 0; padding: 0;background: linear-gradient(to bottom right, #5C0000, #9E1717);'>
            <div style= 'position: relative; top:10%; left: 50%; transform: translate(-50%, 50%);
            width: 80%; max-width: 400px; padding: 20px; background-color: #f0f0f0b9;
            border-radius: 10px; text-align: center; box-shadow: 0 0 10px white;'>
            <h2 style='color:white'>
            Error: Contraseña Incorrecta.
            </h2>
            <br>
            <a href='login.php'>
            <button style='background-color:black; color: white; font-style: italic; padding: 8px 16px; border-radius: 4px; border: none; cursor: pointer;'>Home</button></a>
            </br>
        </div>
        </body>";
        }
    } else {
        echo "<body style= 'width: 100%; height: 100%; margin: 0; padding: 0;background: linear-gradient(to bottom right, #5C0000, #9E1717);'>
                <div style= 'position: relative; top:10%; left: 50%; transform: translate(-50%, 50%);
                width: 80%; max-width: 400px; padding: 20px; background-color: #f0f0f0b9;
                border-radius: 10px; text-align: center; box-shadow: 0 0 10px white;'>
                <h2 style='color:white'>
                Error: Usuario No Encontrado.
                </h2>
                <br>
                <a href='login.php'>
                <button style='background-color:black; color: white; font-style: italic; padding: 8px 16px; border-radius: 4px; border: none; cursor: pointer;'>Home</button></a>
                </br>
            </div>
            </body>";
    }

    $stmt->close();
    $conexion->close();
}
?>
