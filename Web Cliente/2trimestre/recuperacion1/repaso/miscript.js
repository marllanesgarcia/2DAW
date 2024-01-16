"use strict";
var nombre = document.getElementById("name");
var email = document.getElementById("email");
//var password = document.getElementById("password");
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
    */
    nombre.addEventListener('blur', validarNombre);
    /*
    Segundo ejercicio:
    Los apellidos seguirán el mismo patrón que el nombre pero en lugar de espacios se podrá
    poner guiones. Se validarán los dos apellidos cuando se pierda el foco del segundo
    elemento. Si fallan se pondrá el fondo del input en rojo, se lanzará un mensaje de error
    justo debajo y se le dará el foco al primer apellido. Una vez validados los dos apellidos se
    comprobará que el campo nombre está completo y se deshabilitarán los tres campos.
    */
    apellido2Input.addEventListener('blur', validarApellidos);
    /*
    Tercer ejercicio:
    El correo electrónico deberá ser corporativo, es decir solo se aceptará si tiene la extensión
    @cenec.es. Cuando se valide que el correo es correcto se debe generar una contraseña
    aleatoria y mostrarla en el campo de contraseña, además se le debe de dar el foco al
    campo contraseña. La contraseña estará formada por la primera letra del nombre en
    mayúscula, seguido de las primeras tres letras de su primer apellido y de la primera letra
    en mayúscula de su segundo apellido. Para terminar le seguirán cuatro números
    aleatorios. Ejemplo de contraseña BguiC3456. Si el correo no se validó se debe de avisar
    con un mensaje de span y devolverle el foco.
    
        
    Cuarto ejercicio:
     El campo contraseña puede aceptar la contraseña generada o permitir una que cumpla
    con el mismo patrón. Cuando pierda el foco deberá cambiar el valor por una fila de
    asteriscos de igual longitud, pero si volvemos a tener el foco en el campo contraseña
    debe aparecer la contraseña que existía antes de perder el foco    
    */
    email.addEventListener('blur',validarEmail);

    /*   
    Quinto ejercicio:
    Para los teléfonos necesito que el primer campo sea un fijo de Málaga, con prefijo 952
    y para el segundo campo que sea un móvil y por tanto debe comenzar por 6 o por 7. La
    edad debe ser superior a 18. Se irá pasando el foco de uno a otro de los tres campos
    siempre que se cumplan las condiciones mencionadas y si no es así se avisará con los
    correspondientes errores. Es importante que no se permita escribir letras en ninguno de
    los campos.
    */
    telf1.addEventListener('blur',validarTelefono1);
    telf2.addEventListener('blur',validarTelefono2);
    edad.addEventListener('blur',validarEdad);


});

function validarNombre() {
    //var expresion = /^[a-zA-ZÁÉÍÓÚáéíóúñ]+$/;
    var expresion2 = /^[A-Z][a-z]*(-[A-Z][a-z]*)*$/;
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

function validarApellidos(){
    var expresion2 = /^[A-Z][a-z]*(\s[A-Z][a-z]*)*$/;
    
    var apellido2Value = apellido2Input.value.trim();
    var apellido1Value = apellido1Input.value.trim();

    if(!(expresion2.test(apellido1Value))|| !(expresion2.test(apellido2Value))){
        mostrarError(apellido1Input, 'el apellido 1 esta mal, ARREGLALO');
        mostrarError(apellido2Input, 'el apellido 2 esta mal, ARREGLALO');
        apellido1Input.style.borderColor = 'red';
        apellido2Input.style.borderColor = 'red';
        console.log(apellido2Input);
    } else {
        limpiarError(apellido2Input);
        limpiarError(apellido1Input);
        deshabilitarCampos();
    }
}

function deshabilitarCampos() {
    if (nombre.value.trim() && apellido1Input.value.trim() && apellido2Input.value.trim()) {
        nombre.disabled = true;
        apellido1Input.disabled = true;
        apellido2Input.disabled = true;
    }
}

function validarEmail(){
    var expresionEmail = /^[a-zA-Z0-9._-]+@cenec\.es$/;
    var expresionEmailValue = email.value.trim();

    if (!expresionEmail.test(expresionEmailValue)) {
        mostrarError(email, 'el email no vale, inserte otro');
        email.style.borderColor = 'red';
    } else {
        limpiarError(email);
        validarContraseña();
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

}

function validarContraseña(){
    var primeraLetraNombre = nombre.value.trim().charAt(0).toUpperCase();
    var primerApellido = apellido1Input.value.trim().slice(0, 3);
    var primeraLetraApellido2 = apellido2Input.value.trim().charAt(0).toUpperCase();
    var random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    var passwordNew = primeraLetraNombre + primerApellido + primeraLetraApellido2 + random;
    password.value = passwordNew;
    password.focus();
    /*   
        Ejercicio cuatro
    */
    if(!password.focus()){
        var asteriscos = '*'.repeat(password.value.length);
        password.value = asteriscos;
    }
}

function validarTelefono1(){
    var expresionTelf = /^952\d{6}$|^6\d{8}$|^7\d{8}$/;
    var expresionTelfValue = telf1.value.trim();

    if (!expresionTelf.test(expresionTelfValue)) {
        mostrarError(telf1, 'el telefono 1 no existe, inserte otro');
        telf1.style.borderColor = 'red';
    } else {
        limpiarError(telf1);
    }
}

function validarTelefono2(){
    var expresionTelf = /^952\d{6}$|^6\d{8}$|^7\d{8}$/;
    var expresionTelfValue = telf2.value.trim();

    if (!expresionTelf.test(expresionTelfValue)) {
        mostrarError(telf2, 'el telefono 2 no existe, inserte otro');
        telf2.style.borderColor = 'red';
    } else {
        limpiarError(telf2);
    }
}

function validarEdad(){
    var mayorEdad = /^(1[89]|[2-9]\d+)$/;
    var mayorEdadValue = edad.value.trim();

    if (!mayorEdad.test(mayorEdadValue)) {
        mostrarError(edad, 'DEBES SER MAYOR DE EDAD');
        edad.style.borderColor = 'red';
    } else {
        limpiarError(edad);
    }
}

