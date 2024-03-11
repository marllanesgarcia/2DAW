
// llamada al formulario para realizar las funciones necesarias y eventos, en este caso se realizo
// un evento para el submit
$('#exam-form').submit(function(e){
    event.preventDefault();
    $('#sombrero').on("click", errores());
    
    $('#btnasignaturas').on("click", function(){
        alert();
    });

});

// funcion para los errores donde se verifica si los campos están vacios o no y, si todo esta bien,
// se llama a la peticion de ajax

function errores(){
    console.log($('option'))
    if (($('input').is(':empty'))){
        $('#errorNombre').html('Error, esta vacío').css('color','red').focus();
    }else if($('option'.val() == null)){
        console.log(entro);
        $('#errorCualidad1').html('Error, esta vacío').css('color','red').focus();
        $('#errorCualidad2').html('Error, esta vacío').css('color','red').focus();
    }

    peticionAjax();
}

// Esta es una funcion para hacer la funcion Ajax para llavar al documento php y extraer los datos necesarios

// ERROR: Access to XMLHttpRequest at 'file:///C:/Users/2DAW/Desktop/MaterialesExamenJS2Trimestre/php/sombrero.php' 
// from origin 'null' has been blocked by CORS policy: Cross origin requests are only supported for protocol 
// schemes: http, data, isolated-app, chrome-extension, chrome, https, chrome-untrusted

// ERROR: POST file:///C:/Users/2DAW/Desktop/MaterialesExamenJS2Trimestre/php/sombrero.php 
function peticionAjax(){
    let datos ={
        cualidad1: $('select:first').val(),
        cualidad2: $('select:last').val()
    }
    $.ajax({
        type:"POST",
        url:"php/sombrero.php",
        data: datos
    })
    .done(function(responseText){
        alert('<p>tu casa es: '+responseText+'</p>');
    
    })
    .fail(function(responseText){
        alert("Error");
    })
} 

// ERROR: Access to XMLHttpRequest at 'file:///C:/Users/2DAW/Desktop/MaterialesExamenJS2Trimestre/php/asignaturas.php' 
// from origin 'null' has been blocked by CORS policy: Cross origin requests are only supported for protocol 
// schemes: http, data, isolated-app, chrome-extension, chrome, https, chrome-untrusted

// ERROR: GET file:///C:/Users/2DAW/Desktop/MaterialesExamenJS2Trimestre/php/asignaturas.php 
function asignaturasCasa(){
    fetch('php/asignaturas.php')
        .then(response => response.json())
        .then(data => {
            data.array.forEach(element => {
                $('#tabla-container').append('<th> Nombre Asignatura </th><td id="casa">'+ element.nombre_asignatura +'</td');
                $('#tabla-container').append('<th> Profesor </th><td id="casa">'+ element.profesor +'</td');
                $('#tabla-container').append('<th> Nivel Dificultad </th><td id="casa">'+ element.nivel +'</td');
                $('#tabla-container').append('<th> Obligatoria </th><td id="casa">'+ element.casa +'</td');
                $('#tabla-container').append('<th> para Seleccionar </th><button type="button" id="btnSeleccionar" class="btn btn-primary">Seleccionar</button></th>');
                
            });
        })

        $('#btnasignaturas').css('display','flex');
}