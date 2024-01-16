"use strict";
var nombre = document.getElementById("name");
var email = document.getElementById("email");
var password = document.getElementById("password");
/* 
Otra forma de hacerlo:
var telf1 = document.querySelectorAll("input[type=text]")[2];
var telf2 = document.querySelectorAll("input[type=text]")[3]; 
*/
var telf1 = document.getElementsByName("telefono")[0];
var telf2 = document.getElementsByName("telefono")[1];
var edad = document.getElementsByName("edad");

/*   crear elementos */
var errorElement = document.createElement('span');
errorElement.className = 'error-message';

var apellido1Label = document.createElement('label');
apellido1Label.textContent = 'Apellido 1:';
var apellido1Input = document.createElement('input');
apellido1Input.type = 'text';
apellido1Input.id = 'apellido1';
apellido1Input.name = 'apellido1';
var apellido2Label = document.createElement('label');
apellido2Label.textContent = 'Apellido 2:';
var apellido2Input = document.createElement('input');
apellido2Input.type = 'text';
apellido2Input.id = 'apellido2';
apellido2Input.name = 'apellido2';



document.addEventListener('DOMContentLoaded', function () {
    /* 
    Primer ejercicio:
    El campo nombre debe aceptar primera letra en mayúscula y el resto en minúsculas,
    puede aceptar espacios y en el caso de aparecer el siguiente bloque debe de empezar
    por mayúscula y seguir por minúscula. Se debe comprobar cuando pierda el foco y si no
    es correcto se añadirá un mensaje de error justo debajo de la casilla, se pondrá el borde
    del elemento en rojo y se le devolverá el foco. Si es correcto se añadirá desde el script
    los capos apellido 1 y apellido 2 justo debajo.
    
    Segundo ejercicio:
    Los apellidos seguirán el mismo patrón que el nombre pero en lugar de espacios se podrá
    poner guiones. Se validarán los dos apellidos cuando se pierda el foco del segundo
    elemento. Si fallan se pondrá el fondo del input en rojo, se lanzará un mensaje de error
    justo debajo y se le dará el foco al primer apellido. Una vez validados los dos apellidos se
    comprobará que el campo nombre está completo y se deshabilitarán los tres campos.
    Dentro de nombre.
    */
    nombre.addEventListener('blur', validarNombre);



});

function validarNombre() {
    //var expresion = /^[a-zA-ZÁÉÍÓÚáéíóúñ]+$/;
    var expresion2 = /^[A-Z][a-z]*(\s[A-Z][a-z]*)*$/;
    var nombreValue = nombre.value.trim();

    if (!expresion2.test(nombreValue)) {
        mostrarError(nombre, 'el nombre no vale, inserte otro');
        nombre.style.borderColor = 'red';
        console.log(nombre);
    } else {
        limpiarError(nombre);
        meterApellidos();
    }
}


function mostrarError(elemento, mensaje) {
    
    errorElement.textContent = mensaje;
    errorElement.style.color = 'red';
    elemento.parentNode.insertBefore
    (errorElement, elemento.nextSibling);
    elemento.focus();    

}

function limpiarError(elemento) {
    var errorElement = elemento.parentNode.querySelector('.error-message');
    if (errorElement) {
        errorElement.parentNode.removeChild(errorElement);
    }
    elemento.style.borderColor = '';
}

function meterApellidos() {

    var apellidoDiv = document.createElement('div');
    apellidoDiv.appendChild(apellido1Label);
    apellidoDiv.appendChild(apellido1Input);
    apellidoDiv.appendChild(apellido2Label);
    apellidoDiv.appendChild(apellido2Input);
    nombre.parentNode.insertBefore(apellidoDiv, nombre.nextSibling);

    var expresion2 = /^[A-Z][a-z]*(\s[A-Z][a-z]*)*$/;
    
}



/*

"use strict";

var nombre = document.getElementById("name");
var apellido1Label = document.createElement('label');
apellido1Label.textContent = 'Apellido 1:';
var apellido1Input = document.createElement('input');
apellido1Input.type = 'text';
apellido1Input.id = 'apellido1';
apellido1Input.name = 'apellido1';
var apellido2Label = document.createElement('label');
apellido2Label.textContent = 'Apellido 2:';
var apellido2Input = document.createElement('input');
apellido2Input.type = 'text';
apellido2Input.id = 'apellido2';
apellido2Input.name = 'apellido2';

document.addEventListener('DOMContentLoaded', function () {
    nombre.addEventListener('blur', validarNombre);

    // Agregar evento blur al segundo campo de apellido
    apellido2Input.addEventListener('blur', validarApellidos);
});

function validarNombre() {
    var expresion2 = /^[A-Z][a-z]*(\s[A-Z][a-z]*)*$/;
    var nombreValue = nombre.value.trim();

    if (!expresion2.test(nombreValue)) {
        mostrarError(nombre, 'El nombre no es válido, inserte otro');
        nombre.style.borderColor = 'red';
    } else {
        limpiarError(nombre);
        meterApellidos();
    }
}

function validarApellidos() {
    var expresionApellidos = /^[A-Z][a-z]*(\-?[A-Z][a-z]*)*$/;
    var apellido1Value = apellido1Input.value.trim();
    var apellido2Value = apellido2Input.value.trim();

    if (!expresionApellidos.test(apellido1Value) || !expresionApellidos.test(apellido2Value)) {
        mostrarError(apellido2Input, 'Los apellidos no son válidos, inserte otros');
        apellido1Input.style.borderColor = 'red';
        apellido2Input.style.borderColor = 'red';
        apellido1Input.focus();
    } else {
        limpiarError(apellido2Input);
        deshabilitarCampos();
    }
}

function mostrarError(elemento, mensaje) {
    var errorElement = document.createElement('span');
    errorElement.className = 'error-message';
    errorElement.textContent = mensaje;
    errorElement.style.color = 'red';

    // Insertar el elemento de error justo debajo del elemento actual
    elemento.parentNode.insertBefore(errorElement, elemento.nextSibling);
    elemento.style.borderColor = 'red';
    elemento.focus();
}

function limpiarError(elemento) {
    var errorElement = elemento.parentNode.querySelector('.error-message');
    if (errorElement) {
        errorElement.parentNode.removeChild(errorElement);
    }
    elemento.style.borderColor = '';
}

function meterApellidos() {
    // Crear un nuevo div para agrupar los elementos de apellido
    var apellidoDiv = document.createElement('div');

    // Añadir campos de apellido 1 y apellido 2 al div
    apellidoDiv.appendChild(apellido1Label);
    apellidoDiv.appendChild(apellido1Input);
    apellidoDiv.appendChild(apellido2Label);
    apellidoDiv.appendChild(apellido2Input);

    // Añadir el div al formulario, justo después del campo de nombre
    nombre.parentNode.insertBefore(apellidoDiv, nombre.nextSibling);
}

function deshabilitarCampos() {
    // Comprobar que el campo nombre y ambos apellidos están completos
    if (nombre.value.trim() && apellido1Input.value.trim() && apellido2Input.value.trim()) {
        // Deshabilitar los tres campos
        nombre.disabled = true;
        apellido1Input.disabled = true;
        apellido2Input.disabled = true;
    }
}



*/