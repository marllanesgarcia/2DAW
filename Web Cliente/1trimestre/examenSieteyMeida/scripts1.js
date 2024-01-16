"use strict";


function validarNombre(nombre) {
    var patron = /^[a-zA-Z0-9]+$/;
    return patron.test(nombre);
}


function validarEdad(edad) {
    return parseInt(edad, 10) >= 18;
}

function validarFormulario() {
    var nombreInput = document.getElementById("usuario");
    var edadInput = document.getElementById("edad");
    var errorUser = document.getElementById("errorUser");
    var errorEdad = document.getElementById("errorEdad");

    // Validar nombre
    if (!validarNombre(nombreInput.value)) {
        errorUser.textContent = "El nombre debe contener solo letras y números.";
        return false;
    } else {
        errorUser.textContent = "";
    }

    // Validar edad
    if (!validarEdad(edadInput.value)) {
        errorEdad.textContent = "La edad debe ser mayor o igual a 18 años.";
        return false;
    } else {
        errorEdad.textContent = "";
    }

    // Si todo es válido, puedes hacer otras operaciones o enviar el formulario
    // ...

    return true;
}


document.getElementById("comenzar").addEventListener("click", function () {
    validarFormulario();
});
