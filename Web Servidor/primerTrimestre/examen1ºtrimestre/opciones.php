<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Monkey Island</title>
</head>
<body>

    <h3>Opciones</h3>
    <form id="formulario">
        <select id="opciones">
            <option value="pirata">Quiero ser un pirata</option>
            <option value="pelea">Quiero pelear</option>
            <option value="bromas">Pelea de bromas</option>
            <option value="adios">Despedirme</option>
        </select>
        <input type="button" value="continuar" onclick="redireccionar()">
    </form>

    <script>
        function redireccionar() {
            var seleccion = document.getElementById("opciones").value;

            switch (seleccion) {
                case 'pirata':
                    window.location.href = 'adivinanzas.php'; 
                    break;
                case 'pelea':
                    window.location.href = 'pelea.php'; 
                    break;
                case 'bromas':
                    window.location.href = 'bromas.php'; 
                    break;
                case 'adios':
                    window.location.href = 'adios.php'; 
                    break;
                default:
                    alert("Tienes que elegir una............");
                    break;
            }
        }
    </script>

</body>
</html>
