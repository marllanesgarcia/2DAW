<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mini Red Social de Lectura</title>
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>

<div class="container mt-5">
    <h1 class="mb-4">Mini Red Social de Lectura</h1>
    
    <form method="post" action="codigoapp.php">
        <div class="form-group">
            <label for="titulo">Título del libro:</label>
            <input type="text" class="form-control" name="titulo" required>
        </div>

        <div class="form-group">
            <label for="autor">Autor del libro:</label>
            <input type="text" class="form-control" name="autor" required>
        </div>

        <div class="form-group">
            <label for="critica">Escribe tu crítica:</label>
            <textarea class="form-control" name="critica" required></textarea>
        </div>

        <button type="submit" class="btn btn-primary">Publicar crítica</button>
    </form>
</div>

</body>
</html>
