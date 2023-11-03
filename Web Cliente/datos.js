"use strict";
var nombre= document.getElementById("nombre");
var apellido1=document.getElementById("apellido1");
var apellido2=document.getElementById("apellido2");
var edad=document.getElementById("edad");
var correo=document.getElementById("correo");
var formulario=document.getElementById("Formulario");


document.addEventListener("DOMContentLoaded",function(event){
    /* 
    nombre.addEventListener("blur", function() {
    validarNombre(nombre, "errorNombre");
    });
    apellido1.addEventListener("blur", function() {
        validarNombre(apellido1, "errorApellido1");
    });
    apellido2.addEventListener("blur", function() {
        validarNombre(apellido2, "errorApellido2");
    });
    correo.addEventListener("blur", function() {
        validarCorreo(correo, "errorCorreo");
    });
    */
    correo.addEventListener("blur",function(){validarCorreo()}); 
    console.log(correo);
})

function validarCorreo(){
    let error = document.getElementById("errorCorreo");
    
    var patron = /^[a-zA-Z0-9]{3,20}@[a-zA-Z0-9]{3,20}\.[a-zA-Z]{2}$/;
    
    // var patron=/a-zA-Z0-9{3,20}$/+"@"+/a-zA-Z0-9{3,20}$/+"."+/a-zA-Z{3}$/;
    console.log(correo.value);
    if (!patron.test(correo.value)){
        error.innerHTML= "Esta mal, tienes que poner un valor que sea valido";
    }else{
        error.innerHTML= "Es correcto";
    }
}

function validarEdad(){
    let error = document.getElementById("errorEdad");
    
    var patron = /^([1-9][]){2}.[1-12]{2}\.[]{4}$/
    


}


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

/*  function validarNumero(e){
     if(e.which<48 || e.which>57){
         e.preventDefault();
     }
} */
