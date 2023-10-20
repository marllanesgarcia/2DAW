<?

// msqli = clase de conexion a una bbdd

// $conexion = new mysqli("host","usuario","clave","bbdd")

$conexion = new msqli("localhost","root","","cenec");

if($conexion -> connect_errno){  // registra el codigo de error que hubo
    echo "Error de conexion";
}else{
    echo "La conexion se ha realizado sin problemas";
}

$conexion -> close();

// jason es como se comunican el php y el javascript

?>