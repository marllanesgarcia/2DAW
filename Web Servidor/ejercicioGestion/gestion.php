<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
    <title>Gestor de Presupuestos</title>
</head>
<body>
    <h1>Gestor de Presupuestos</h1>

    <form action="codigogestion.php" method="post">
        <label for="category">Categoría:</label>
        <input type="text" name="category" required>

        <label for="amount">Cantidad:</label>
        <input type="number" name="amount" required>

        <button type="submit">Agregar Gasto</button>
    </form>
</body>
</html>
