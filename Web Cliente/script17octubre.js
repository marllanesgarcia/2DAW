"use strict";

// funcion que se llame "sumar" y que devuelva la suma de ellos
var num1;
var num2;

function sumar (num1,num2){
   return  num1 + num2;
}

sumar (2,2); 

// funcion que imprima un nombre pasado por un parametro

function imprimir(nombre) {
    console.log("El nombre es: " + nombre);
  }
  
imprimir("Juan");
  

// funcion que recoja dos valores por parametro, que realice la suma. 
// Imprime el resultado de llamar a la funcion con los parametros que queramos

function sumarYImprimir(valor1, valor2) {
    var suma = valor1 + valor2;
    console.log("La suma de " + valor1 + " y " + valor2 + " es: " + suma);
  }
sumar (2,2);

// crear html con un formulario donde se van a registrar dos campos numéricos y un select con varias opciones
// para sumar, restar, multiplicar y dividir. No olvidar el boton submit

function calcularResultado() {

    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    var operacion = document.getElementById("operacion").value;

    var resultado;
  
    if (operacion === "sumar") {
        resultado = numero1 + numero2;
      } else if (operacion === "restar") {
        resultado = numero1 - numero2;
      } else if (operacion === "multiplicar") {
        resultado = numero1 * numero2;
      } else if (operacion === "dividir") {
        if (numero2 === 0) {
          resultado = "No se puede dividir por cero.";
        } else {
          resultado = numero1 / numero2;
        }
      } else {
        resultado = "Operación no válida";
      }
  
    document.getElementById("resultado").textContent = "Resultado: " + resultado;

    console.log("el numero 1 es: "+numero1);
    console.log("el numero 2 es: "+numero2);
    console.log("La operacion es: " + operacion);
    console.log("Resultado: " + resultado);
  }
  




