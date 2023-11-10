<?php
// CONFIGURACION BASE DE DATOS

// Crear conexión
$conn = new mysqli($phpmyadmin, $mar, $password, $tareas);

// Verificar la conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

function agregarTarea($titulo, $descripcion) {
    global $conn;

    // Prevenir inyección de SQL
    $titulo = $conn->real_escape_string($titulo);
    $descripcion = $conn->real_escape_string($descripcion);

    // Insertar la tarea en la base de datos
    $sql = "INSERT INTO tareas (titulo, descripcion) VALUES ('$titulo', '$descripcion')";
    $conn->query($sql);
}

function obtenerTareas() {
    global $conn;

    //tareas de la base de datos
    $sql = "SELECT * FROM tareas";
    $result = $conn->query($sql);

    $tareas = [];

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $tareas[] = $row;
        }
    }

    return $tareas;
}

    // CREAR, EDITAR, MODIFICAR Y BORRAR TAREAS CON TITULO Y DESCRIPCION Y QUE APAREZCAN

    $tareas = [];

// agregar una tarea
function agregarTarea($titulo, $descripcion) {
    global $tareas;
    $tareas[] = ['titulo' => $titulo, 'descripcion' => $descripcion];
}

//borrar una tarea
function borrarTarea($indice) {
    global $tareas;
    unset($tareas[$indice]);
    $tareas = array_values($tareas);
}

//editar una tarea
function editarTarea($indice, $titulo, $descripcion) {
    global $tareas;
    $tareas[$indice] = ['titulo' => $titulo, 'descripcion' => $descripcion];
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['crear'])) {
        $titulo = $_POST['titulo'];
        $descripcion = $_POST['descripcion'];
        agregarTarea($titulo, $descripcion);
    } elseif (isset($_POST['borrar'])) {
        $indice = $_POST['indice'];
        borrarTarea($indice);
    } elseif (isset($_POST['editar'])) {
        $indice = $_POST['indice'];
        $titulo = $_POST['titulo'];
        $descripcion = $_POST['descripcion'];
        editarTarea($indice, $titulo, $descripcion);
    }
}

?>