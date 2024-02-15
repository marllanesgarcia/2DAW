"use strict";


var xmlHttp = new XMLHttpRequest();

document.addEventListener('DOMContentLoaded', function(){
    
    var boton = document.querySelector("#enviar");
    boton.addEventListener("click", peticion);

});

function peticion(){

    var nombre = document.getElementById("nombre").value;
    var mensaje = document.getElementById("mensaje").value;

    xmlHttp.onreadystatechange = function () {
        if(xmlHttp.readyState == 4 && xmlHttp.status== 200){
            var respuesta2 = xmlHttp.responseText;
            respuesta(respuesta2);
        }
    }
    
    xmlHttp.open("POST", "function.php", true);
    xmlHttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlHttp.send("nombre="+ nombre + "&mensaje="+mensaje);

}

function respuesta(respuesta2){

    document.getElementById("respuesta").innerHTML = respuesta2;
    
}
