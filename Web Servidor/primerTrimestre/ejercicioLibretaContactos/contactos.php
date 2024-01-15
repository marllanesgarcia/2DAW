<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>

    <title>Libreta de Contactos</title>
</head>
<body>
<div class="container mt-5">
        <?php
            include 'codigocontactos.php';

            if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['action'])) {
            if ($_POST['action'] === 'add') {
                $name = $_POST['name'];
                $address = $_POST['address'];
                $phone = $_POST['phone'];
                $email = $_POST['email'];

                addContact($name, $address, $phone, $email);
            } elseif ($_POST['action'] === 'edit') {
                $index = $_POST['index'];
                echo '<h2>Editar Contacto</h2>';
                echo '<form method="post" action="contactos.php">';
                echo '<input type="hidden" name="action" value="update">';
                echo '<input type="hidden" name="index" value="' . $index . '">';
                echo 'Nombre: <input type="text" name="name" value="' . $_SESSION['contacts'][$index]['name'] . '" required><br>';
                echo 'Dirección: <input type="text" name="address" value="' . $_SESSION['contacts'][$index]['address'] . '" required><br>';
                echo 'Teléfono: <input type="tel" name="phone" value="' . $_SESSION['contacts'][$index]['phone'] . '" required><br>';
                echo 'Email: <input type="email" name="email" value="' . $_SESSION['contacts'][$index]['email'] . '" required><br>';
                echo '<input type="submit" value="Actualizar Contacto">';
                echo '</form>';
            } elseif ($_POST['action'] === 'update') {
                $index = $_POST['index'];
                $name = $_POST['name'];
                $address = $_POST['address'];
                $phone = $_POST['phone'];
                $email = $_POST['email'];

                editContact($index, $name, $address, $phone, $email);
            } elseif ($_POST['action'] === 'delete') {
                $index = $_POST['index'];
                deleteContact($index);
            }
        }

        echo '<h2 class="mb-3">Lista de Contactos</h2>';
        echo '<table class="table">';
        echo '<thead class="thead-dark">';
        echo '<tr>';
        echo '<th scope="col">Nombre</th>';
        echo '<th scope="col">Dirección</th>';
        echo '<th scope="col">Teléfono</th>';
        echo '<th scope="col">Email</th>';
        echo '<th scope="col">Acciones</th>';
        echo '</tr>';
        echo '</thead>';
        echo '<tbody>';
        foreach ($_SESSION['contacts'] as $index => $contact) {
            echo '<tr>';
            echo '<td>' . $contact['name'] . '</td>';
            echo '<td>' . $contact['address'] . '</td>';
            echo '<td>' . $contact['phone'] . '</td>';
            echo '<td>' . $contact['email'] . '</td>';
            echo '<td>';
            echo '<form method="post" action="contactos.php">';
            echo '<input type="hidden" name="action" value="edit">';
            echo '<input type="hidden" name="index" value="' . $index . '">';
            echo '<button type="submit" class="btn btn-warning btn-sm">Editar</button>';
            echo '</form>';
            echo '<form method="post" action="contactos.php">';
            echo '<input type="hidden" name="action" value="delete">';
            echo '<input type="hidden" name="index" value="' . $index . '">';
            echo '<button type="submit" class="btn btn-danger btn-sm">Eliminar</button>';
            echo '</form>';
            echo '</td>';
            echo '</tr>';
        }
        echo '</tbody>';
        echo '</table>';

        // Formulario para agregar nuevo contacto
        echo '<h2 class="mt-5 mb-3">Agregar Nuevo Contacto</h2>';
        echo '<form method="post" action="contactos.php">';
        echo '<input type="hidden" name="action" value="add">';
        echo '<div class="form-group">';
        echo '<label for="name">Nombre:</label>';
        echo '<input type="text" class="form-control" name="name" required>';
        echo '</div>';
        echo '<div class="form-group">';
        echo '<label for="address">Dirección:</label>';
        echo '<input type="text" class="form-control" name="address" required>';
        echo '</div>';
        echo '<div class="form-group">';
        echo '<label for="phone">Teléfono:</label>';
        echo '<input type="tel" class="form-control" name="phone" required>';
        echo '</div>';
        echo '<div class="form-group">';
        echo '<label for="email">Email:</label>';
        echo '<input type="email" class="form-control" name="email" required>';
        echo '</div>';
        echo '<button type="submit" class="btn btn-primary">Agregar Contacto</button>';
        echo '</form>';
    ?>
</body>
</html>