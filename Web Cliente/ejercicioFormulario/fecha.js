"use strict";

var nombre = document.getElementById("nombre");
var fecha = document.getElementById("fecha");
var hora = document.getElementById("hora");
var selectTipoCita = document.createElement("select");
var labelContador = document.createElement("div");
var duracion = document.getElementById("duracion");
var formulario = document.getElementById("formulario");
var boton = document.getElementsByClassName("btn btn-outline-dark")[0]; // devuele un array

nombre.addEventListener("blur", validarNombre);
fecha.addEventListener("blur", validarFecha);
hora.addEventListener("blur", validarHora);
duracion.addEventListener("blur", validarDuracion);
// tipo cita
cargarTipoCita();
formulario.getElementsByClassName("button");
formulario.insertBefore(selectTipoCita, boton);
console.log(selectTipoCita);
// contador
formulario.insertBefore(labelContador, boton);
labelContador.addEventListener("blur",contador);
contador();

function validarNombre() {
    var patron = /^[a-zA-Z]+$/;
    var error = document.getElementById("errorNombre");
    if (!patron.test(nombre.value)) {
        error.innerHTML = "Introduzca un valor correcto";
        nombre.focus();
    } else {
        error.innerHTML = "";
    }
}

function validarFecha() {
    var patron = /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/202[3-9]$/; 
    var error = document.getElementById("errorFecha");
    var fechaInput = fecha.value;

    if (!patron.test(fechaInput)) {
        error.innerHTML = "Introduzca un valor correcto";
        fecha.focus();
    } else {
        var fechaPartes = fechaInput.split('/');
        var dia = parseInt(fechaPartes[0], 10);
        var mes = parseInt(fechaPartes[1], 10) - 1;
        var año = parseInt(fechaPartes[2], 10);
        var fechaIngresada = new Date(año, mes, dia);
        var fechaActual = new Date();

        if (fechaIngresada < fechaActual) {
            error.innerHTML = "Introduzca un valor correcto";
            fecha.focus();
        } else {
            error.innerHTML = "";
        }
    }
}

function validarHora() {
    var horaU = hora.value;
    var error = document.getElementById("errorHora");

    var patronHora = /^([01]\d|2[0-3]):([0-5]\d)$/;
    if (!patronHora.test(horaU)) {
        error.innerHTML = "Introduzca una hora válida en formato hh:mm (de 00:00 a 23:59)";
        hora.focus();
    } else {
        var horaPartes = horaU.split(':');
        var horas = parseInt(horaPartes[0], 10);
        var minutos = parseInt(horaPartes[1], 10);

        if (horas < 0 || horas > 23 || minutos < 0 || minutos > 59) {
            error.innerHTML = "La hora debe estar en el rango de 00:00 a 23:59.";
            hora.focus();
        } else {
            error.innerHTML = "";
        }
    }
}

// el tipo de cita
function cargarTipoCita() {
    var opciones = ["----","Médica","Legal","Reunión"];
    let error = document.createElement("span");
    let label = document.createElement("label");
    selectTipoCita.className = "form-control";
    formulario.insertBefore(selectTipoCita, boton);
    formulario.insertBefore(label, selectTipoCita);
    formulario.insertBefore(error, boton);
    
    label.textContent = "Seleccione el tipo de cita";
    error.style.color = "red";
    error.style.fontSize = "14px";
    error.id= "errorCita";
    selectTipoCita.id = "tipoCita";
    selectTipoCita.className = "form-control";
    selectTipoCita.style.marginBottom = "2px";

    for (let i = 0; i < opciones.length; i++){
        var option = document.createElement("option");
        option.value = opciones[i].toLocaleLowerCase();
        option.textContent = opciones[i];
        selectTipoCita.appendChild(option);
    }
}

// temporizador
/* function contador () {
    var label = document.createElement("label");
    label.textContent= "Faltan "+ (fecha - (new Date));
} */

function contador() {
    var fechaSeleccionada = new Date(fecha.value);
    var fechaActual = new Date();
    var hora = fechaSeleccionada - fechaActual;
    var label = document.createElement("label");

    var diasFaltantes = Math.ceil(hora / (1000 * 60 * 60 * 24));
    label.textContent = 'Faltan ' + diasFaltantes + ' días.';
}


function validarDuracion() {
    var duracionInput = parseInt(duracion.value, 10);
    var error = document.getElementById("errorDuracion");
}

boton.addEventListener("click", function () {

    if (nombre.value === "" && fecha.value === "" && hora.value === "" && selectTipoCita.value === "" && duracion.value === "") {
        event.preventDefault();
        alert("Porfavor complete el formulario correctamente >:(");
    }else if (selectTipoCita.value == "----") {
        event.preventDefault();
        errorCita.textContent = "Por favor complete correctamente el campo Tipo de Cita";
    }else{
        event.preventDefault();
        errorCita.textContent = "";
        Swal.fire({
            title: "La información es correcta.",
            text: "Nombre: " + nombre.value + "\n" +
                "Fecha: " + fecha.value + "\n" +
                "Hora: " + hora.value + "\n" +
                "Tipo de Cita: " + selectTipoCita.value + "\n" +
                "Duración estimada (minutos): " + duracion.value + "\n" +
                "¡Continuar!",
            imageUrl: "https://i.pinimg.com/originals/cc/4e/13/cc4e13c7aa8896b068576783e9c379dd.gif",
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "imagen del gato"
    });
 }
  });

        /* Swal.fire({
            title: "La información es correcta.",
            text: "Nombre: " + nombre.value + "\n" +
                "Fecha: " + fecha.value + "\n" +
                "Hora: " + hora.value + "\n" +
                "Tipo de Cita: " + tipoCita.value + "\n" +
                "Duración estimada (minutos): " + duracion.value + "\n" +
                "¡Continuar!",
            imageUrl: "https://i.pinimg.com/originals/cc/4e/13/cc4e13c7aa8896b068576783e9c379dd.gif",
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "imagen del gato"
        });
    } else {
        var errorMessage = "Hay errores, debes corregir lo siguiente:\n";
        if (errorNombre !== "") {
            errorMessage += "* " + errorNombre + "\n";
        }
        if (errorFecha !== "") {
            errorMessage += "* " + errorFecha + "\n";
        }
        if (errorHora !== "") {
            errorMessage += "* " + errorHora + "\n";
        }
        if (errorTipoCita !== "") {
            errorMessage += "* " + errorTipoCita + "\n";
        }
        if (errorDuracion !== "") {
            errorMessage += "* " + errorDuracion + "\n";
        }
        Swal.fire({
            icon: "error",
            title: "Corrija los siguientes errores:",
            html: errorMessage,
        }); */
