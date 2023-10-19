<?php

// esto sirve para organizar ficherosº

// var_dump($_FILES);
$fileTemPath = $_FILES["uploadfile"]["tmp_name"]; // carpeta y nombre temporal
$fileName = $_FILES["uploadfile"]["name"]; // nombre del archivo
$fileSize = $_FILES["uploadfile"]["size"]; // tamaño
$fileType = $_FILES["uploadfile"]["type"]; // tipo archivo

// averiguar la version del archivo

$fileNameCaps = explode(".",$fileName);  // da lugar a un array con las partes del nombre partida por el punto
$fileExtension = strtolowerend(end($fileNameCaps));  // end te coge el ulitmo elemento del array pero en minusculas

// sanitizar el nombre del archivo
$newFileName = md5(time (). $fileName). "." . $fileExtension; // md5 es un sistema de codificacion

echo "El nuevo nombre del archivo es " . $newFileName

// para restringir las extensiones de los archivos y permitir algunas

$allowedFileExtensions = array("jpg","gif","png");

// control del máximo tamaño del archivo

$max_file_size = 200000;

if(in_array($fileExtension, $allowedFileExtensions )&& $fileSize < $max_file_size){  // if(in_array("lo que busco","donde lo busco"))

    $uploadFileDir = "./upload_files/";  // carpeta donde se van a guardar los archivos
    $destino_path = $uploadFileDir . $newFileName; // carpeta màs el nombre del archivo

    if(move_uploaded_file($fileTemPath, $destino_path)){
        header ( "location: inicio_formulario.php");
    }

}else{
    echo "Algo fue mal";
}

?>