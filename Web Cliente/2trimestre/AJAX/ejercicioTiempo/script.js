$(document).ready(function(){
    $('#provincia').change(infoMuni);
    $('#clima').click(infoClima);
});

function infoMuni(){

    var selectProv = $('#provincia').val();

    if(selectProv){

            fetch('https://www.tiempo.com/geo/provinciasAPI/'+selectProv+'/municipios/')
                .then(response=>response.json())
                .then((data)=>
                data.results.array.foreach(element => {
                    var municipios = data.municipios;
                var opciones = '<option value="" selected disabled>. . .</option>';

                municipios.forEach(function(municipio){
                    opciones += '<option value="'+ municipio.id +'">' +municipio.nombre+'</option>';
                });

                $('#municipio').html(opciones);
                })
                );
    }
}

var fondo;
function color(temperaturaM){
    if(temperaturaM < 0){
        fondo = 'white';
        $('body').addClass(color);
    } else if(temperaturaM >= 0 && temperaturaM < 15){
        fondo = 'blue';
        $('body').addClass(color);
    } else if(temperaturaM >= 15 && temperaturaM < 30){
        fondo = 'orange';
        $('body').addClass(color);
    } else {
        fondo = 'red';
        $('body').addClass(color);
    }
    
}

var texto = '';
function temperatura(temperaturaM){

    if(temperaturaM < 0){
        texto = 'El clima es menor de 0 grados.';
    } else if(temperaturaM >= 0 && temperaturaM < 15){
        texto = 'El clima es de 0 a 15 grados.';
    } else if(temperaturaM >= 15 && temperaturaM < 30){
        texto = 'El clima es de 15 a 30 grados.';
    } else {
        texto = 'El clima es mayor de 30 grados.';
    }
    $('#clima').after('<h1 id="mensajeclima">' + texto + '</h1>');
}

function infoClima(){

    var selectMuni = $('#municipio').val();

    if(selectMuni){
        
        fetch('https://www.tiempo.com/api/json/')
        .then(response=>response.json())
        .then((data)=>
        data.results.array.foreach(element => {
            var clima = data.weather;
                var temperaturaM = clima.temp_c;
                temperatura(temperaturaM);
                color(temperaturaM);
        })
        );

    } else {
        alert('Tienes que elegir un municipio porque o sino no va');
    } 
}



