"use strict";

document.addEventListener('DOMContentLoaded', function () {

    var divLogo = document.getElementById('logo');
    divLogo.addEventListener('click', mostrarMenu);

});

function mostrarMenu() {
    var divsPequeños = document.querySelector('.menu');
    var estiloDisplay = window.getComputedStyle(divsPequeños).getPropertyValue('display');

    if (estiloDisplay === 'none') {
        divsPequeños.style.display = 'block';
        setTimeout(function() {
            divsPequeños.style.opacity = '10';
            divsPequeños.style.transform = 'translateX(0)';
        }, 80);
    } else {
        divsPequeños.style.opacity = '0';
        divsPequeños.style.transform = 'translateX(-25px)';
        setTimeout(function() {
            divsPequeños.style.display = 'none';
        }, 500);
    }
}




/*

opcion 1: 

function mostrarMenu(){

    var posicionX = event.clientX - parent.offsetLeft;
    var posicionY = event.clientY - parent.offsetTop;
    var divPequeño = 3;
    var radio = 50;
    var distancia = (2*Math.PI)/divLogo;
    
    for (var i = 0;i < divPequeño; i++){
        var divNuevo = document.createElement('div');
        var textoNuevo = document.createElement('h5');
        textoNuevo.textContent = 'tituloTituo';
        divNuevo.style.top = posicionY+radio*Math.sin(i*distancia)+'px';
        divNuevo.style.left = posicionX+radio*Math.cos(i*distancia)+'px';
        divNuevo.style.width = '150px';
        divNuevo.style.height = '80px';
        divNuevo.style.border = '2px solid rgb(100, 34, 34)';
        divLogo.appendChild(divNuevo);
        divNuevo.appendChild(textoNuevo);
    }
}
*/
