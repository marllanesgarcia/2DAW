<?
echo "HOLA CARACOLA";
var_dump($_POST);
// Recibimos la información del formulario mediante POST
$usuario = $_POST['usuario'];
$contrasena = $_POST['contrasena'];


if ($usuario == "Paco" && $contrasena == "123456") {
    echo "Bienvenido Paco";
} else {
    echo "Error: Credenciales incorrectas.";
}
?>
