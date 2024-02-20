"use strict";

$(document).ready(function(){
    var boton = document.getElementById("personajes");

    boton.addEventListener("click", cargarPersonajes);
});


function cargarPersonajes(){
    var div =  document.getElementById("contenedorPersonajes");
    var div2 = document.getElementById("informacionPersonajes");

    fetch("https://rickandmortyapi.com/api/character")
        .then(response=>response.json())
        .then((data)=>
        data.results.array.foreach(element => {
            div.innerHTML+=`<img src="${element.image}" alt=${element.name}>`
            div2.innerHTML+= `<p style="display: column">${element.name} , ${element.species} , ${element.origin.name}</p>`
        })
        );
}

