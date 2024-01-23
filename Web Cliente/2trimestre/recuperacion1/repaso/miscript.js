"use strict";
var nombre = document.getElementById("name");
var email = document.getElementById("email");
var password = document.getElementsByClassName("password");
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

var final;

var selectCA = document.getElementById("selectCA");
var selectCiudad = document.getElementById("selectCity");

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

    /* Sexto ejercicio */
    selectCA.addEventListener("blur",function(){validarSelectCA(selectCA.value)});
    selectCiudad.addEventListener("blur",function(){validarCiudad(selectCiudad.value)});


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

function validarApellidos(){
    var expresion2 = /^[A-Z][a-z]*(-[A-Z][a-z]*)*$/;
    var apellido2Value = apellido2Input.value.trim();
    var apellido1Value = apellido1Input.value.trim();

    if(!expresion2.test(apellido1Value)){
        mostrarError(apellido2Input, 'el apellido 1 esta mal, ARREGLALO');
        apellido1Input.style.borderColor = 'red';
        apellido1Input.focus();
        console.log(apellido1Input);
    }  else if(!expresion2.test(apellido2Value)) {
        mostrarError(apellido2Input, 'el apellido 2 esta mal, ARREGLALO');
        apellido2Input.style.borderColor = 'red';
        apellido2Input.focus();
        console.log(apellido1Input);
    }else{
        limpiarError(apellido2Input);
        limpiarError(apellido1Input);
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
        generarContraseña();
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
    apellido1Input.focus();

}

function generarContraseña(){
    var passwordNombre = password.value;
    var primeraLetraNombre = passwordNombre.trim().charAt(0).toUpperCase();
    var primerApellido = apellido1Input.value.trim();
    var tresLetrasApellido1 = primerApellido.charAt.trim().substring(0,3).toLowerCase();
    var passwordApellido2 = apellido2Input.trim().value;
    var primeraLetraApellido2 = passwordApellido2.charAt(0).toUpperCase();
    var random = Math.floor(1000 + Math.random()*9000);
    final = primeraLetraNombre + tresLetrasApellido1 + primeraLetraApellido2 + random;

    password.value = final;
    validarContraseña();
}

function validarContraseña(){
    var contraseñaValue = password.value;
    var patron = /[A-Z][a-z]{3}[A-Z][0-9]{4}$/;    
    var valido = patron.test(contraseñaValue);
    if(!valido){
       mostrarError(password,"contraseña no valida, hazla de nuevo");
       password.focus();
    }else{
        limpiarError(password);
        final=contraseñaValue;
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

var array = undefined;
function validarSelectCA(valor){
    if(array!=undefined){
        selectCiudad.innerHTML = "";
    }
    switch (true){
        case valor == "":
            mostrarError(selectCA, "Selecciona una opción");
            selectCA.focus();
            break;
        case valor == "Andalucia":
            limpiarError(selectCA);
            array = ["Selecciona una ciudad","Almería","Granada", "Málaga","Jaén","Córdoba","Sevilla","Cádiz","Huelva"];
            break;
        case valor == "Extremadura":
            limpiarError(selectCA);
            array = ["Selecciona una ciudad","Cáceres","Badajoz"];
            break;
        case valor == "CastillaLaMancha":
            limpiarError(selectCA);
            array = ["Selecciona una ciudad","Albacete","Ciudad Real", "Cuenca","Guadalajara","Toledo"];
            break;
        case valor == "Valencia":
            limpiarError(selectCA);
            array = ["Selecciona una ciudad","Alicante","Castellón", "Valencia"];
            break;
    }

    if(array!=undefined){
        selectCiudad.removeAttribute("disabled");
        for(var i=0;i<array.length;i++){
            var opcion = document.createElement("option");
            opcion.setAttribute("name",array[i]);
            opcion.innerHTML = array[i];
            selectCiudad.append(opcion);
        }
    }
}

function validarCiudad(valor){
    if(valor == "Seleccionar Ciudad"){
        mostrarError(selectCiudad, "Selecciona una ciudad válida");
        selectCiudad.focus();
    }else{
        limpiarError(selectCiudad);
    }
}
