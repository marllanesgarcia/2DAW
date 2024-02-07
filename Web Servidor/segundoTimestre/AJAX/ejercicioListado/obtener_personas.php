<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "personas";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

$sql = "SELECT * FROM personas";
if(isset($_POST['genero'])) {
    $genero = $_POST['genero'];
    $sql = "SELECT * FROM personas WHERE genero='$genero'";
}

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "<ul>";
    while($row = $result->fetch_assoc()) {
        echo "<li>" . $row["nombre"] . " - " . $row["genero"] . "</li>";
    }
    echo "</ul>";
} else {
    echo "0 resultados";
}

$conn->close();
?>
