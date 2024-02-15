"use strict";

var xhr = new XMLHttpRequest();

document.addEventListener('DOMContentLoaded', function(){

    var mostrar = document.querySelector("#boton");
    mostrar.addEventListener("click", function(){iniciarSesion()});
    console.log(mostrar);
});

function iniciarSesion(){

    var nombre = document.getElementById("nombre").value;
    var password = document.getElementById("password").value;

    console.log(nombre);
    console.log(password);

    xhr.onreadystatechange = function () {
        if(xhr.readyState == 4 && xhr.status== 200){
            console.log(xhr.responseText);
        }
    }

    xhr.open("GET", 'admin.php?nombre='+nombre+'&password='+password, true);
    xhr.send();

}
