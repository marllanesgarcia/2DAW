"use strict";

var nombre = document.getElementById("nombre");
var fecha = document.getElementById("fecha");
var hora = document.getElementById("hora");
var selectTipoCita = document.createElement("select");
var tiempo = document.createElement("input");
var errorTiempo = document.createElement("span");

var labelContador = document.createElement("div"); // contador

var duracion = document.getElementById("duracion");
var formulario = document.getElementById("formulario");
var boton = document.getElementsByClassName("btn btn-outline-dark")[0]; // devuele un array

var fechaPartes;
var dia;
var mes;
var año;


    document.addEventListener("DOMContentLoaded", function () {
        nombre.addEventListener("blur", validarNombre);
        fecha.addEventListener("input", validarFecha);  
        hora.addEventListener("input", validarHora);    
        cargartiempo();
        tiempo.addEventListener("keypress", validarNumeros);
        tiempo.addEventListener("blur", validarTiempo);
        cargarTipoCita();
        formulario.getElementsByClassName("button");
        console.log(selectTipoCita);
        formulario.insertBefore(labelContador, boton);
    });


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
    var patron =/^202[0-9]-(0[13578]|1[02])-(0[1-9]|[12]\d|3[01])$|^202[3-9]-(0[469]|11)-(0[1-9]|[12]\d|30)$|^202[0-9]-(02)-(0[1-9]|[1]\d|[2][0-8])-(02)$/; 
    var error = document.getElementById("errorFecha");
    var fechaInput = fecha.value;

    if (!patron.test(fechaInput)) {
       error.innerHTML = "Introduzca un valor correcto";
        fecha.focus();
    } else {
        fechaPartes = fechaInput.split('/');
        dia = parseInt(fechaPartes[0], 10);
        mes = parseInt(fechaPartes[1], 10) - 1;
        año = parseInt(fechaPartes[2], 10);
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

        
        var horaMananaInicio = 10;
        var horaMananaFin = 14;
        var horaTardeInicio = 18.5; 
        var horaTardeFin = 20;

        var horaDecimal = horas + minutos / 60; 

        if (
            (horaDecimal >= horaMananaInicio && horaDecimal < horaMananaFin) ||
            (horaDecimal >= horaTardeInicio && horaDecimal <= horaTardeFin)
        ) {
            error.innerHTML = "";
            contador();
        } else {
            error.innerHTML = "Las citas solo pueden realizarse de 10:00 a 14:00 y de 18:30 a 20:00.";
            hora.focus();
        }
    }
}



// el tipo de cita
function cargarTipoCita() {
    var opciones = ["---", "Médica", "Legal", "Reunión"];
    var errorCita = document.getElementById("errorCita");  

    let error = document.createElement("span");
    let label = document.createElement("label");
    formulario.insertBefore(selectTipoCita, boton);
    formulario.insertBefore(label, selectTipoCita);
    formulario.insertBefore(error, boton);
    label.textContent = "Seleccione el tipo de cita"
    error.style.color = "red";
    error.style.fontSize = "14px";
    error.id = "errorCita";
    selectTipoCita.id = "tipoCita";
    selectTipoCita.className = "form-control";
    selectTipoCita.style.marginBottom = "10px";

    for (let i = 0; i < opciones.length; i++) {
        var option = document.createElement("option");
        option.value = opciones[i].toLowerCase();
        option.textContent = opciones[i];
        selectTipoCita.appendChild(option);
    }
}

// temporizador

function contador() {

    var temporizador = setInterval(function () {
        var fechaSeleccionada = new Date(fecha.value);
        var fechaActual = new Date();
        var tiempoRestante = fechaSeleccionada - fechaActual;

        if (tiempoRestante > 0) {
            var dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
            var horas = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
            var segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

            labelContador.innerHTML ="Faltan: "+ `${dias}d ${horas}h ${minutos}m ${segundos}s`;
            labelContador.style="color: rgb(70, 5, 70); font-size: 30px; background-color: rgba(70, 5, 70, 0.363);";

            
        } else {
            if (minutos <= 10) {
                alert("¡FALTAN 10 MINUTOS PARA LA CITA, CORRE!");
            }else{
            clearInterval(temporizador);
            labelContador.innerHTML = "F, te quedaste sin cita je";
        }}
    }, 1000);

    var stop = setTimeout(function () {
        Swal.fire({
            title: "Te vas ya o????????",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUEku4Nl773f3Id6MfdlH2IIoybCosxmWy_mMtnqbTft4BJ6eWUpQ5EwE3Lfs3icgsNfo&usqp=CAU",
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "imagen del meme"
        });
    }, 4000);
}

function cargartiempo() {
    let label = document.createElement("label");
    label.textContent = "Introduzca el tiempo estimado";
    errorTiempo.id = "errorTiempo";
    errorTiempo.style.color = "red";
    errorTiempo.style.fontSize = "14px";
    let salto = document.createElement("br");
    tiempo.className = "form-control";

    let tiempoContainer = document.createElement("div");
    tiempoContainer.appendChild(label);
    tiempoContainer.appendChild(tiempo);
    tiempoContainer.appendChild(errorTiempo);
    tiempoContainer.appendChild(salto);

    formulario.insertBefore(tiempoContainer, boton);
}


function validarNumeros(e) {
    let evento = e || event;
    if (evento.which < 48 || evento.which > 57) {
        e.preventDefault();
    }
}
function validarTiempo() {
    var duracionCita = parseInt(tiempo.value, 10);
    if (duracionCita < 5 || duracionCita > 60 || duracionCita % 15 !== 0) {
        errorTiempo.textContent = "La duración de la cita debe ser un múltiplo de 15 minutos y estar entre 5 y 60 minutos.";
        tiempo.focus();
    } else {
        errorTiempo.textContent = "";
    }
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
            text: "Nombre de la reserva:" + nombre.value+
            "Fecha de la reserva: " + fecha.value+
            "Hora de la reserva:  " + hora.value +
            "Tipo de cita: " + selectTipoCita.value+
                "¡Continuar!",
            imageUrl: "https://i.pinimg.com/originals/cc/4e/13/cc4e13c7aa8896b068576783e9c379dd.gif",
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "imagen del gato"
    });
 }
  });