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

/* 
<script>
   console.log("me meti");

    Swal.fire({
        title: "La información es correcta.",
        text: "Nombre de la reserva:" + nombre.value+
        "Fecha de la reserva: " + fecha.value+
        "Hora de la reserva:  " + hora.value +
        "Tipo de cita: " + selectTipoCita.value+
            "¡Continuar!",
        imageUrl: "https://i.pinimg.com/originals/cc/4e/13/cc4e13c7aa8896b068576783e9c379dd.gif",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "imagen del gato"
    });
</script>

<script>
    Swal.fire({
        title: "¡Error!",
        text: "Hubo un problema al registrar el usuario.",
        icon: "error",
        showConfirmButton: true,
    });
</script>



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