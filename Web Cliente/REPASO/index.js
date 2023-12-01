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