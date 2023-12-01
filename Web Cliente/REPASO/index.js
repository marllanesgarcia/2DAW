"use strict";
/*
registroAnimales(20,5);

function registroAnimales(gatos, perros){
    console.log(gatosString.length)
    while (gatosString.length < 3){
        gatosString = "0" + gatosString;
    }
    console.log (gatosString + "Gatos");

    console.log(perrosString.length)
    while (perrosString.length < 3){
        perrossString = "0" + gatosString;
    }
    console.log (perrossString + "Perros");
}



Asi se hace de otra forma: 

var LeadingZero = (n, l, s="0") => n.toString().length>=l ? n.toString() : 
(s.repeat(l)+n.toString()).substr((l*s.length)+n.toString().length-l);

var string = LeadingZero(1,2);


console.log(string); */

/* ejercicio 2
function registroAnimales(cantidad, tipoAnimal) {
    var String = cantidad.toString();
    while (String.length < 3) {
        String = "0" + String;
    }
    console.log(String + " " + tipoAnimal);
}


var numeroGatos = 5;
registroAnimales(numeroGatos, "Gatos");
var numeroPerros = 8;
registroAnimales(numeroPerros, "Perros");
var numeroPajaros = 10;
registroAnimales(numeroPajaros, "Pajaros");

ejercicio 3
// primero dos argumentos
function minNumeros(x, y) {
    return Math.min(x, y);
}
var resultado = minNumeros(5, 8);
console.log("El valor mínimo es:", resultado);

// depues más de dos argumentos
function minNumeros(numeritos){
    return Math.min(numeritos);
}
var resultado2 = minNumeros(10,3,8,15,2);
console.log("El valor mínimo es:", resultado2);
--

function contarAparicionesLetra(string, letra) {
    let conteo = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === letra) {
            conteo++;
        }
    }
    return conteo;
}

--

ejercicio 4

function esPar(numerito){
   if(numerito == 0){
    console.log("es Par");
    console.log(numerito);
    return numerito;
   }else if(numerito == 1){
    console.log("es Impar");
    console.log(numerito);
    return numerito;
   }else if(numerito < 0){
    return esPar(numerito+2);
    console.log(numerito);
   }else{
    return esPar(numerito-2);
    console.log(numerito);
   }
}

var numerito = -6;
esPar(numerito);

ejercicio 5
*/


function contar(string,silaba){
    var numeritos = 0;

    for (var i=0;i<string.length;i++){
/*      numeritos = string[i].split(silaba);
        numeritos++;
        console.log(numeritos);
        return numeritos; */
        if (string[i] == silaba) {
            numeritos++;
        }
    }
    console.log(numeritos);

}

contar("holaquetalestaspaca","a");



