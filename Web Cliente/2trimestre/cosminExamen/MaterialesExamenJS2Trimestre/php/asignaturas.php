<?php
include 'connection.php'; 

try {
    $sql = "SELECT nombre_asignatura, profesor, nivel, casa FROM asignaturas";
    $stmt = $pdo->prepare($sql);
    $stmt->execute();
    $asignaturasProfesores = $stmt->fetchAll(PDO::FETCH_ASSOC);
    if ($asignaturasProfesores) {
        echo json_encode($asignaturasProfesores);
    } else {
        echo "No se encontraron asignaturas y profesores.";
    }
} catch (PDOException $e) {
    echo "Error al ejecutar la consulta: " . $e->getMessage();
}
?>
