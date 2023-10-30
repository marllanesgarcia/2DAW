"use strict";
var nombre= document.getElementById("nombre");
var apellido1=document.getElementById("apellido1");
var apellido2=document.getElementById("apellido2");

var telefono=document.getElementById("tlf");

document.addEventListener("DOMContentLoaded",function(event){
    nombre.focus();
    nombre.addEventListener("blur",function(){validarNombre(nombre,"errorNombre")});
    apellido1.addEventListener("blur",function(){validarNombre(apellido1,"errorApellido1")} );
    apellido2.addEventListener("blur",function(){validarNombre(apellido2,"errorApellido2")} );
    telefono.addEventListener ("keypress",validarNumero());  
})


function validarNombre(){
    let error = document.getElementById("errorNombre");
    if(nombre.value.length<2 || nombre.value.length>20){
        error.innerHTML = "Introduzca un valor correcto";
        nombre.focus();
    }else{
        error.innerHTML ="";
    }
}

// que la funcion sirva para tres variables mas
function validarTodo(nombre){
    let elemento = calor.id.charAt(0).toUpperCase()+validarNombre.id.slice(1);
    let nombreError= "erro"+elemento;
    let error=document.getElementById(nombreError);
    console.log(elemento);

    if(nombre.value.length<2 || nombre.value.length>20){
        error.innerHTML = "Introduzca un valor correcto";
        error.style.color='red';
        error.style.fontWeight='bold';
        error.style.fontStyle='italic';
        error.style.fontSize='10px';

        nombre.focus();
    }else{
        error.innerHTML ="";
    }
}

function validarNumero(e){
    if(e.which<48 || e.which>57){
        e.preventDefault();
    }
}
