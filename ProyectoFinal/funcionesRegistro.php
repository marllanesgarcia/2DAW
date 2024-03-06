<?php
$conexion = new mysqli('localhost', 'root', '', 'proyectofinal');

if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}

$usuario = $_POST['usuario'];
$password = $_POST['password'];
$correo = $_POST['correo'];


if (!preg_match('/^[a-zA-Z0-9]{4,}$/', $usuario)) {

    echo "<body style= 'width: 100%; height: 100%; margin: 0; padding: 0;background: linear-gradient(to bottom right, #5C0000, #9E1717);'>
    <div style= 'position: relative; top:10%; left: 50%; transform: translate(-50%, 50%);
    width: 80%; max-width: 400px; padding: 20px; background-color: #f0f0f0b9;
    border-radius: 10px; text-align: center; box-shadow: 0 0 10px white;'>
        <h2 style='color:white'>
        Error al registrar el usuario: <br> 
        <strong>El nombre de usuario debe contener al menos 4 caracteres alfanuméricos.</strong>
        </h2>
        <br>
        <a href='registrarse.php'>
        <button style='background-color:black; color: white; font-style: italic; padding: 8px 16px; border-radius: 4px; border: none; cursor: pointer;'>Volver</button></a>
        </br>
    </div>
    </body>";

    exit;
}else if (!filter_var($correo, FILTER_VALIDATE_EMAIL)) {
    
    echo "<body style= 'width: 100%; height: 100%; margin: 0; padding: 0;background: linear-gradient(to bottom right, #5C0000, #9E1717);'>
    <div style= 'position: relative; top:10%; left: 50%; transform: translate(-50%, 50%);
    width: 80%; max-width: 400px; padding: 20px; background-color: #f0f0f0b9;
    border-radius: 10px; text-align: center; box-shadow: 0 0 10px white;'>
        <h2 style='color:white'>
        Error al registrar el usuario: <br> 
        <strong>El formato del correo electrónico es inválido.</strong>
        </h2>
        <br>
        <a href='registrarse.php'>
        <button style='background-color:black; color: white; font-style: italic; padding: 8px 16px; border-radius: 4px; border: none; cursor: pointer;'>Volver</button></a>
        </br>
    </div>
    </body>";

    exit;
} else if (!preg_match('/^[a-zA-Z0-9!@#$%^&*()_.,;:{}\-+=~<>|\/?]{6,}$/', $password)) {
    
    echo "<body style= 'width: 100%; height: 100%; margin: 0; padding: 0;background: linear-gradient(to bottom right, #5C0000, #9E1717);'>
    <div style= 'position: relative; top:10%; left: 50%; transform: translate(-50%, 50%);
    width: 80%; max-width: 400px; padding: 20px; background-color: #f0f0f0b9;
    border-radius: 10px; text-align: center; box-shadow: 0 0 10px white;'>
        <h2 style='color:white'>
        Error al registrar el usuario: <br> 
        <strong>La contraseña debe contener al menos 6 caracteres alfanuméricos y puede incluir los siguientes caracteres especiales: !@#$%^&*()_.</strong>
        </h2>
        <br>
        <a href='registrarse.php'>
        <button style='background-color:black; color: white; font-style: italic; padding: 8px 16px; border-radius: 4px; border: none; cursor: pointer;'>Volver</button></a>
        </br>
    </div>
    </body>";

    exit;
}else{
    $query = "INSERT INTO usuarios (usuario, password, correo) VALUES ('$usuario', '$password','$correo')";

    if ($conexion->query($query) === TRUE) {
        echo "<body style= 'width: 100%; height: 100%; margin: 0; padding: 0;background: linear-gradient(to bottom right, #5C0000, #9E1717);'>
        <div style= 'position: relative; top:10%; left: 50%; transform: translate(-50%, 50%);
        width: 80%; max-width: 400px; padding: 20px; background-color: #f0f0f0b9;
        border-radius: 10px; text-align: center; box-shadow: 0 0 10px white;'>
            <h2 style='color:white'>
                Usuario registrado con éxito.
                ¡Bienvenido, " . $usuario . "! <br> El registro fue exitoso. <br>
                ¡¡Por favor, inicia sesion!!
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
                Error al registrar el usuario: " . $conexion->error."
                </h2>
                <br>
                <a href='registrarse.php'>
                <button style='background-color:black; color: white; font-style: italic; padding: 8px 16px; border-radius: 4px; border: none; cursor: pointer;'>Volver</button></a>
                </br>
            </div>
            </body>";
    }
}
    $conexion->close();

?>