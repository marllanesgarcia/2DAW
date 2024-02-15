<?php
header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $comunidad = $_POST["comunidad"];

    $comunidades = array(
        "Andalucia" => array("provincias" => 8, "extension" => "87,268 km²", "clima" => "Mediterráneo"),
        "Extremadura" => array("provincias" => 2, "extension" => "41,634 km²", "clima" => "Mediterráneo continental"),
        "Galicia" => array("provincias" => 4, "extension" => "29,574 km²", "clima" => "Oceánico"),
    );

    if (array_key_exists($comunidad, $comunidades)) {
        $datos = $comunidades[$comunidad];

        echo json_encode($datos);
    } else {
        echo json_encode(array("error" => "Comunidad autónoma no válida"));
    }
}
?>
