<?php
// primera forma
class Database {
    private $host;
    private $username;
    private $password;
    private $database;
    private $conn;

    public function __construct($host, $username, $password, $database) {
        $this->host = $host;
        $this->username = $username;
        $this->password = $password;
        $this->database = $database;

        $this->connect();
    }

    private function connect() {
        $this->conn = new mysqli($this->host, $this->username, $this->password, $this->database);

        if ($this->conn->connect_error) {
            die("Connection failed: " . $this->conn->connect_error);
        }
    }

    public function query($sql) {
        return $this->conn->query($sql);
    }

    public function close() {
        $this->conn->close();
    }
}

// Uso de la clase
$host = "localhost";
$username = "tu_usuario";
$password = "tu_contraseña";
$database = "tu_base_de_datos";

$db = new Database($host, $username, $password, $database);

// Ejemplo de consulta
$query = "SELECT * FROM tu_tabla";
$result = $db->query($query);

// Cerrar la conexión al finalizar
$db->close();




// seguunda forma
$conexion = new mysqli('localhost', 'root', '', 'phasmofobia');

if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}

$usuario = $_POST['usuario'];
$contrasena = $_POST['contrasena'];
$rol = $_POST['rol'];

$query = "INSERT INTO usuarios (usuario, contrasena, rol) VALUES ('$usuario', '$contrasena','$rol')";


// tercera forma
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




?>


