<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Listado de Personas</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</head>
<body>

<h2>Listado de Personas</h2>

<button id="btnTodos">Todos</button>
<button id="btnHombres">Hombres</button>
<button id="btnMujeres">Mujeres</button>

<div id="listaPersonas"></div>

<script>
$(document).ready(function(){
    cargarPersonas();

    $('#btnTodos').click(function(){
        cargarPersonas();
    });

    $('#btnHombres').click(function(){
        filtrarPersonas('hombre');
    });

    $('#btnMujeres').click(function(){
        filtrarPersonas('mujer');
    });

    function cargarPersonas(){
        $.ajax({
            url: 'obtener_personas.php',
            method: 'GET',
            success: function(response){
                $('#listaPersonas').html(response);
            }
        });
    }

    function filtrarPersonas(genero){
        $.ajax({
            url: 'obtener_personas.php',
            method: 'POST',
            data: { genero: genero },
            success: function(response){
                $('#listaPersonas').html(response);
            }
        });
    }
});
</script>

</body>
</html>
