<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="post" action="upload.php" enctype="multipart/form-data">  <!--para cuando es de tipo fichero el enctype -->
    <span> Introduce el fichero a subir </span>
    
    <input type="file" name="uploadfile">
    <input type="file" value="Enviar">
    </body>
</html>