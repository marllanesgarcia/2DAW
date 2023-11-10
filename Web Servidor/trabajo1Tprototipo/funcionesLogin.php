<?php
include ("./funciones.php");
$nombre = $_POST["nombre"];
$contrasena = $_POST["contrasena"];

conectar();

$sql = "INSERT INTO alumnos (nombre, contrasena) 
        VALUES ('$nombre', '$contrasena')";

$resultado = $conexion->query($sql);


volver();

/* 
//crear instancia clase conectar
$conexion_db = new conectar_db();

if($_SERVER["REQUEST_METHOD"]=="POST"){
    $usuario = $_POST["usuario"];
    $contrasena = $_POST["contrasena"];

    //verificar si el usuario exixtse
    $consulta= "SELECT id FROM usuarios WHERE usuario = '$usuario' AND contrasena = '$contrasena'";

    if ($conexion_db -> contar_resultados($consulta)>0){
        //usuario existe
        echo "¡Inicio de sesion con exito!";
    }else{
        //usuario no existe, lo inserto
        $consulta = "INSERT INTO usuarios (usuario, contrasena) VALUES ('$usuario', '$contrasena')";
        if($conexion_db -> consultar($consulta)){
            echo "Nuevo usuario registrado";

        }else{
            echo "Error al registrar usuario";
        }
    }

    //cerrar conexion

    $conexion_db -> cerrar();

} */

?>