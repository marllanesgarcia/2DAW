"use strict";
//ordenar numeros en orden
/* var numeritos=prompt("Dime un numero que quieras.");

var numeritosArray = nuerito.split(",");
numeritosArray.sort(function(a,b){
    return a-b;
});
console.log(numeritosArray); */


var info=document.getElementById("info");
// evento KeyDown
document.addEventListener("keydown",function(event) {
    info.innerHTML=`Evento keydown : Tecla Presionada - ${event.key}`;
});
// evento keypress
document.addEventListener("keypress",function(event) {
    info.innerHTML+=`<br>Evento keypress : Tecla Presionada - ${event.key}`;
});
// evento keyup
document.addEventListener("keyup",function(event) {
    info.innerHTML+=`<br>Evento keyup : Tecla Liberada - ${event.key}`;
});


document.addEventListener("DOMContentLoaded", function(){
    var miBoton= document.getElementById("miBoton");
    miBoton.addEventListener("click",function(){
        alert("has hecho clik en el boton!!");
    });
});

// ejercicio evento teclado
/*
Realiza una funcion que detecte que tecla presionamos y en funcion de cual
sea me ponga por consola:
- letra mayuscula
- letra minuscula
    - numero
    - simbolo
*/

document.addEventListener('keydown', function(event) {
    var teclaPresionada = event.key;
    var codigoASCII = teclaPresionada.charCodeAt(0);
 
    if (codigoASCII >= 65 && codigoASCII <= 90) {
      console.log('Letra mayúscula: ' + teclaPresionada);

    } else if (codigoASCII >= 97 && codigoASCII <= 122) {
      console.log('Letra minúscula: ' + teclaPresionada);

    } else if (codigoASCII >= 48 && codigoASCII <= 57) {
      console.log('Número: ' + teclaPresionada);

    } else {
      console.log('Símbolo: ' + teclaPresionada);
    }
  });




