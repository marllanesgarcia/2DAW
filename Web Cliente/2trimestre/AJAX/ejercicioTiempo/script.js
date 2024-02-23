"use strict";

$(document).ready(function(){
    infoProv();
    $("#provincia").change(function(){
        $('#municipio').empty();
        infoMuni();
    });
    $('#clima').click(function(){infoClima()});
});

function infoProv(){

    fetch('https://www.el-tiempo.net/api/json/v2/provincias')
        .then(response=>response.json())
        .then((data)=> data.provincias.forEach(element => {
            var selectProv = document.getElementById("provincia");
            var opciones= document.createElement("option");
            opciones.setAttribute("value", element.CODPROV);
            opciones.innerHTML=element.NOMBRE_PROVINCIA;
            selectProv.appendChild(opciones);
            })
        );
}

function infoMuni(){
    var seleccionado = $("#provincia").val();
 //   console.log(seleccionado)
    fetch(`https://www.el-tiempo.net/api/json/v2/provincias/${seleccionado}/municipios`)
                .then(response=>response.json())
                .then((data)=> data.municipios.forEach(element => {
                    var selectMuni = document.getElementById("municipio");
                    var opciones2= document.createElement("option");
                    opciones2.setAttribute("value", element.CODIGOINE);
                    opciones2.innerHTML= element.NOMBRE;
                    selectMuni.appendChild(opciones2);
                    })
                );
}

function infoClima(){
    var seleccionado = $("#provincia").val();
    var seleccionado2 = $("#municipio").val();
    console.log(seleccionado)
    var seleccionado3 = seleccionado2.slice(0,5);
    console.log(seleccionado3)
         fetch(`https://www.el-tiempo.net/api/json/v2/provincias/${seleccionado}/municipios/${seleccionado3}`)
        .then(response=>response.json())
        .then((data) =>{   
                color(data.temperatura_actual);
                
            })
}

var fondo;
function color(temperaturaM){
    var aqui=document.getElementById("mensajeclima")
    switch(true){
        case temperaturaM<0:
        document.body.style="background-color:White";
        break;
        case temperaturaM<15:
        document.body.style="background-color:aqua";
        break;
        case temperaturaM<30:
        document.body.style="background-color:orange";
        break;
        default:
         document.body.style="background-color:red";
        break;
    }
    aqui.innerHTML=`La temperatura es de: ${temperaturaM} Grados`;
}