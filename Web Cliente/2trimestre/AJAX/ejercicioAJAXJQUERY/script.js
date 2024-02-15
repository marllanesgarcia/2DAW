"use strict";
var xhr = new XMLHttpRequest();
var boton = document.getElementById("buscar");

document.addEventListener('DOMContentLoaded', function(){

    boton.addEventListener("click", buscarColores);

});

function buscarColores(){
    var term = document.getElementById("searchTerm").value;

    $.ajax({
        type: "GET",
        url: "buscar.php",
        data: { term: term},

        success: function (respuesta2){
            respuesta (respuesta2);
        },

        error: function () {
            console.error("Error al realizar la solicitud");
        }

    });

} 


function respuesta(respuesta2){
    var parseado = JSON.parse(respuesta2);;
    document.getElementById("searchResults").innerHTML = "<ul><li> "+parseado.toString()+" </li> </ul>";
}