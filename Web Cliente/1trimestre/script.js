
"use strict";

// ejercicio 1: tus notas 
/*var nota;
nota=prompt ("Introduzca una calificacion");

var mensaje="no vale";

switch (true) {
    case nota < 5:
        mensaje="suspenso";
    break;

    case nota >=5:
        mensaje="aprobado";
    break;
}

console.log (mensaje);

*/


// ejercicio 2: triangulo

/*

var medida1 =prompt ("Dame una medida");
var medida2 =prompt ("Dame otra medida"); 
var medida3 =prompt ("Dame la ultima medida");  

var mensaje2 = "noup, no sale";
switch (true){

    case (medida1===medida2&&medida2===medida3):
    mensaje2="triangulo equilátero";
    break;
    case (medida1,medida3===medida2&&medida1,medida2===medida3&&medida2,medida3===medida1):
    mensaje2="triangulo isósceles";
    break;
    case (medida1,medida3,medida2!==medida1,medida3,medida2):
    mensaje2="triangulo escaleno";
    break;
    case (medida1+medida3>medida2&&medida1+medida2>medida3&&medida2+medida3>medida1):
    mensaje2="se puede formar";
    break;
}
console.log (mensaje2);
/*
// Ejercicio 3: que recoja un numero que recoja el mes 

var numero= prompt ("dime un numero");

var mensaje3="te equivocaste";
switch(true){
    case (numero == 1):
        mensaje3="El mes que elegiste es Enero";
        break;
    case (numero == 2):
            mensaje3="El mes que elegiste es Febrero";
    break;
    case (numero == 3):
                mensaje3="El mes que elegiste es Marzo";
    break;
    case (numero == 4):
        mensaje3="El mes que elegiste es Abril";
    break;
    case (numero == 5):
        mensaje3="El mes que elegiste es Mayo";
    break;
    case (numero == 6):
        mensaje3="El mes que elegiste es Junio";
    break;
    case (numero == 7):
        mensaje3="El mes que elegiste es Julio";
    break;
    case (numero == 8):
        mensaje3="El mes que elegiste es  Agosto";
    break;
    case (numero == 9):
        mensaje3="El mes que elegiste es Septiembre";
    break;
    case (numero == 10):
        mensaje3="El mes que elegiste es Octubre";
    break;
    case (numero == 11):
        mensaje3="El mes que elegiste es Noviembre";
    break;
    case (numero == 12):
        mensaje3="El mes que elegiste es Diciembre";
    break;
}
console.log (mensaje3);

------------------------------------------------------------   */

// Dia 5 de Octubre
// Ejercicio 1 : calcular la letra del DNI
/* 
var dni = prompt ("Dime unos números");

var letras = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E','T'];
var letras2 = 'TRWAGMYFPDXBNJZSQVHLCKET';
/*
var b;

for (var i = 1 ; i = 8 ; i ++){
    b = (dni + dni)^i;
}
alert (b); */

/*
var cociente = (dni % 23);

var resultado = letras2.substring(cociente,cociente+1);

alert (" Tu dni es "+dni+" - "+resultado);

*/

// Ejercicio 2 : navegador cuando se inicia elige un numero del 1 al 10, despues nosotros elegimos del 1 al 10. Si coinciden, sale una alerta de que hemos ganado o sino hemos perdido. 
// Para ver el resultado, tiene que salir por consola. 
/*
var numeroRandom = Math.random ()*10+1;

var numeritosPersona = prompt ("Dime un número del 1 al 10, a ver si ganas.");

if (numeroRandom = numeritosPersona){

    alert ("OLEEEEEEE, ACERTASTE !!!!!!" + numeroRandom);
} else {
    alert ("Cagaste, has perdido Loser :(((" + numeroRandom);
}

console.log ("numero ordenador "+numeroRandom+" numero persona "+numeritosPersona);
*/
// Ejercicio 3 : cadena de Hola mundo en el html.

// var frase = document.write ("Hola_Mundo");
/*
var frase =  "Hola_Mundo";

for ( var i = 1 ; i < frase.length+1 ; i++){

    document.write(frase.substring (0,i)+ "</br>");

}
*/

// Ejercicio 4 : piramide pero con números
/*
document.addEventListener("DOMContentLoaded",function(){
var numFilas=6;
for(var i=1;i<=numFilas;i++){
    var fila="";
    for(var j=1;j<=i;j++){
        fila+=i;
}
    document.write(fila+"</br>");
    }});
*/

// Ejercicio 5: Sorteo trampa. Son 3 participantes Ana, Jose y Juan. Ana un 60%, Jose 30% y Juan un 10%. Se imprime en htmlo
// 50 veces el resultado para ver que Ana sale mas. En el Console se tiene que ver cuantas veces salio cada persona

/*
const personas = ['Ana', 'Jose', 'Juan'];
const probabilidad = [0.6, 0.3, 0.1];
const elTotal = 50;
const ganadores = [];
const resultado = {};


for (let i = 0; i < elTotal; i++) {
    const random = Math.random(); 
    let contador = 0;
    for (let j = 0; j < probabilidad.length; j++) {
        contador += probabilidad[j];
        if (random <= contador) {
            const ganador = personas[j];
            ganadores.push(ganador); 

            if (resultado[ganador]) {
                resultado[ganador]++;
            } else {
                resultado[ganador] = 1;
            }


            break;
        }
    }
}

console.log('El resultado es = ');
console.log(resultado);

document.write('<h1>Los ganadores del sorteo.....</h1></br> <h2>Son: </h2>');
document.write('<ul>');
for (const ganador of ganadores) {
    document.write('<li>' + ganador + '</li>');
}
document.write('</ul>');
*/

// Ejercicio 5 : numeros del 1 al 500 y que se vean los múltiplos de 4 y 5

let mostrar = 0;

for (let numero = 1; numero <= 500; numero++) {
    if (numero % 4 === 0 || numero % 5 === 0) {
        console.log(numero);
        mostrar++;

        if (mostrar === 5) {
            console.log('*********************');
            mostrar = 0;
        }
    }
}
