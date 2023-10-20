"use strict";

// usuario

// var opciones=document.getElementById("seleccion");

/* 
var papel=document.getElementById("papel").value;
var piedra=document.getElementById("piedra").value;
var tijera=document.getElementById("tijera").value;
 */
/*  var opcionSeleccionada;

opciones.addEventListener("submit",function(event){
    event.preventDefault(); 
}); 
/* 
    if(opciones == opcionSeleccionada("papel").value){
        opcionSeleccionada=="papel";
    } else if(opciones == opcionSeleccionada("piedra").value) {
        opcionSeleccionada=="piedra";
    } else if (opciones == opcionSeleccionada("tijera").value){
        opcionSeleccionada=="tijera";
    }

    console.log(opcionSeleccionada);


    var opciones; */


function jugar(opcionSeleccionada){

    console.log("El usuario ha elegido: "+opcionSeleccionada);
 
// MAQUINA 

var arrayOpciones = ["piedra","papel","tijeras"];

var valor = Math.floor(Math.random()*arrayOpciones.length);
var valor2 = arrayOpciones[valor];
console.log("La maquina eligió: "+valor2)


// RESULTADOS

var resultado = document.getElementById("ganador");
var opcionesJugadores = document.createElement("span");
var tabla= document.getElementsByClassName("table");
tabla.insertBefore(opcionSeleccionada, tabla.nextSibling);
tabla.insertBefore(valor2, tabla.nextSibling);
opcionesJugadores.innerHTML=`
${opcionSeleccionada}
${eleccionImgUsuario=document.createElement("img")}
${eleccionImgUsuario.id="opcionSeleccionada"}
${eleccionImgUsuario.src= opcionSeleccionada + ".png"}`;

imagenItem.appendChild(eleccionImgUsuario); 


switch(valor2){
    case "papel":
        if(opcionSeleccionada === "piedra"){
           console.log("Has perdido, parguela");
            resultado.textContent= "Has perdido, parguela";

        }else if(opcionSeleccionada === "tijeras"){
            console.log("Has Ganado, Oleeeeeee");
            resultado.textContent= "Has Ganado, Oleeeeeee";

        }else if(opcionSeleccionada === "papel"){
            console.log("Has empatado, meeh");
            resultado.textContent= "Has empatado, meeh";
        }
        break;
    case "piedra":
        if(opcionSeleccionada === "tijeras"){
           console.log("Has perdido, parguela");
           resultado.textContent= "Has perdido, parguela";

        }else if(opcionSeleccionada === "papel"){
            console.log("Has Ganado, Oleeeeeee");
            resultado.textContent= "Has Ganado, Oleeeeeee";

        }else if(opcionSeleccionada === "piedra"){
            console.log("Has empatado, meeh");
            resultado.textContent= "Has empatado, meeh";
            
        }
        break;
    case "tijeras":
        if(opcionSeleccionada === "papel"){
            console.log("Has perdido, parguela");
            resultado.textContent= "Has perdido, parguela";
 
         }else if(opcionSeleccionada === "piedra"){
             console.log("Has Ganado, Oleeeeeee");
             resultado.textContent= "Has Ganado, Oleeeeeee";
 
         }else if(opcionSeleccionada === "tijeras"){
             console.log("Has empatado, meeh"); 
             resultado.textContent= "Has empatado, meeh";
         }
        break;

}

}