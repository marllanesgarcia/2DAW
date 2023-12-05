"use strict";

var nombre = document.getElementById("nombre");
var apellido = document.getElementsByName("apellido");
var correo = document.l
var contrasena = document.getElementsByClassName("contrasena"); // devuelve un array :)
var pais = document.getElementById("pais");
var genero = document.getElementById("genero");
var checkbox = document.getElementById("casilla");

document.addEventListener("DOMContentLoaded", function () {

    nombre.addEventListener("blur", validarNombre);
    apellido.addEventListener("blur", validarApellido);  
    hora.addEventListener("input", validarHora);
    tiempo.addEventListener("keypress", validarNumeros);
    tiempo.addEventListener("blur", validarTiempo);




});