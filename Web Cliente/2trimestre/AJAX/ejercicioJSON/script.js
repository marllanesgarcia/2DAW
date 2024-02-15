"use strict";

document.addEventListener("DOMContentLoaded", function() {

    var boton = document.querySelector("#mostrar");
    boton.addEventListener("click", enviarSolicitud);

});

function enviarSolicitud() {
    
var xhr = new XMLHttpRequest();
    var comunidad = document.getElementById("comunidad").value;
    console.log(comunidad);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var respuesta2 = JSON.parse(xhr.responseText);
            respuesta(respuesta2);
        }
    };
    xhr.open("POST", "function.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("comunidad=" + comunidad, true);
}


function respuesta(respuesta2){

    document.getElementById("resultado").innerHTML = respuesta2.clima+"<br>" + respuesta2.extension +"<br>" +respuesta2.provincias;
    
}

