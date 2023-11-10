"use strict";
var nombre = document.getElementById("nombre");
var fecha = document.getElementById("fecha");
var hora = document.getElementById("hora");
var formulario = document.getElementById("reservas");
var selectTipoCita = document.createElement("select");
var errorCita = document.getElementById("errorCita");
var tiempoEstimado = document.createElement("input");
var errorTiempo = document.createElement("span");
var reloj = document.createElement("div")
var boton = document.getElementsByTagName("button")[0];

var fechaNueva = new Date();

document.addEventListener("DOMContentLoaded", function () {
    cargarTipoCita();
    cargarTiempoEstimado();
    nombre.addEventListener("blur", validarNombre);
    fecha.addEventListener("blur", validarFecha);
    hora.addEventListener("blur", validarHora);
    tiempoEstimado.addEventListener("keypress", validarNumeros)
    tiempoEstimado.addEventListener("blur", validarTiempo);
})


function validarNombre() {
    //let patron = /^[a-zA-Z]+$/;
    //mejoramos la expresión regular añadiendo espacios (\s) en el nombre puesto que puede ser compuesto 
    //y vocales acentuadas
    let patron = /^[a-zA-ZÁÉÍÓÚáéíóú\s]+$/
    let error = document.getElementById("errorNombre");
    //le damos estilo al span
    error.style.color = "red";
    error.style.fontSize = "14px";
    if (!patron.test(nombre.value)) {
        error.innerHTML = "Introduzca un valor correcto";
        nombre.focus();
    } else {
        error.innerHTML = "";
    }
}

function validarFecha() {
    let mes;
    let error = document.getElementById("errorFecha");
    error.style.color = "red";
    error.style.fontSize = "14px";
    //este patron solo deja introducir numeros en grupros separados por/ (ej: 2222/22/22)
    let patron = /[0-9]{4}\/[0-9]{2}\/[0-9]{2}/;
    //como vamos a permitir otro formato de fecha creamos para no eliminar del tirón esta función la vamos a adaptar perminiendo un segundo patron
    let patron2 = /[0-9]{2}\/[0-9]{2}\/[0-9]{4}/;

    if (patron2.test(fecha.value)) {
        let anio = fecha.value.slice(6, 10);
        let mes = fecha.value.slice(3, 5);
        let dia = fecha.value.slice(0, 2)
        console.log(anio);
        console.log(mes);
        console.log(dia);
        fecha.value = anio + "/" + mes + "/" + dia;

    }
    if (!patron.test(fecha.value)) {
        error.innerHTML = "Introduzca un valor correcto";
        fecha.focus();
    } else {
        error.innerHTML = "";
        //una vez que sigue el patron numérico dividimos los valores en grupos referentes al año, mes y dia
        let año = parseInt(fecha.value.slice(0, 4));
        if (parseInt(fecha.value.slice(5, 7)) < 10) {//en el mes comprobamos que no tenga un valor 0 delante, es decir que si se introduce 01 dejamos el mes en 1
            mes = parseInt(fecha.value.slice(6, 7));
        } else {
            mes = parseInt(fecha.value.slice(5, 7));
        }
        let dia = parseInt(fecha.value.slice(8, 10));

        //creamos una fecha nueva con los valores de la cadena (en el mes restamos uno porque los meses en js van del 0 al 11)
        fechaNueva.setFullYear(año, mes - 1, dia);
        let fechaComprobar = año + "/" + mes + "/" + dia;

        //compruebo la fecha creada con el objeto date y la cadena recibida por parametros
        let fechaNuevaComprobar = fechaNueva.getFullYear() + "/" + (fechaNueva.getMonth() + 1) + "/" + fechaNueva.getDate();

        //declaramos la fecha de hoy para comprobar que la fecha no sea anterior al día de hoy
        let fechaHoy = new Date();

        if (fechaComprobar != fechaNuevaComprobar) {
            error.innerHTML = "Introduce una fecha valida";
            fecha.focus();
        } else {
            error.innerHTML = "";
            if (fechaNueva < fechaHoy) {
                error.innerHTML = "Introduce una fecha futura";
                fecha.focus();
            } else {
                error.innerHTML = "";
                cargarReloj();
            }
        }
    }
}
/*
//opcion alternativa de usar un validar fecha
function validarFecha() {
    var error = document.getElementById("errorFecha");
    error.style.color = "red";
    error.style.fontSize = "14px";

    //formato dd/mm/aaaa
    //let patronFecha= /^(0[1-9]|[12]\d|3[01])-(0[13578]|1[02])-202[0-9]$|^(0[1-9]|[12]\d|30)-(0[469]|11)-202[0-9]$|^(0[1-9]|[1]\d|[2][0-8])-(02)-202[0-9]$/

    //se ha cambiado el patro de fecha para:
    //poner primero los años
    //dejar que seleccione los años desde 2000 hasta 2099
    //que la separación entre año,mes y día se haga con barras en lugar de guiones. 
    let patronFecha1 = /^20[0-9]{2}\/(0[13578]|1[02])\/(0[1-9]|[12]\d|3[01])$|^20[0-9]{2}\/(0[469]|11)\/(0[1-9]|[12]\d|30)$|^20[0-9]{2}\/(02)\/(0[1-9]|[1]\d|[2][0-8])$/
    if (patronFecha1.test(fecha.value)) {
        let hoy = new Date();    
        let fechaCita = new Date(fecha.value); 
        if (hoy < fechaCita) {
            error.textContent = "";
        } else {
            error.textContent = "Debe seleccionar una fecha posterior al día de hoy";
            fecha.focus();
        }
    } else {
        error.textContent = "Debe de poner un formato correcto para la fecha: aaaa/mm/dd";
        fecha.focus(); 
    }
}*/

function validarHora() {
    let patron = /^([0-1][0-9]|2[0-3]):([0-5][0-9])$/
    let error = document.getElementById("errorHora");
    error.style.color = "red";
    error.style.fontSize = "14px";

    if (!patron.test(hora.value)) {
        error.textContent = "Hora no válida. Verifique";
        hora.focus();
    } else {
        error.textContent = "";
        cargarReloj()
    }
}



//errores que tenia este método: 
//var selectTipoCita = document.getElementById("select");
//no se estaba creando el elemento.
//selectTipoCita.ClassName="form-control"; // class con minúscula
//se había declarado la variable opcion pero se daban valores a option
// var opcion = document.createElement("option");
//y que para que apareciera el texto habría que darle un textContent. 
function cargarTipoCita() {
    var opciones = ["---", "Médica", "Legal", "Reunión"];
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

function cargarTiempoEstimado() {
    let label = document.createElement("label");
    label.textContent = "Introduzca el tiempo estimado";
    errorTiempo.id = "errorTiempo";
    errorTiempo.style.color = "red";
    errorTiempo.style.fontSize = "14px";
    let salto = document.createElement("br");
    tiempoEstimado.className = "form-control";
    formulario.insertBefore(tiempoEstimado, boton);
    formulario.insertBefore(label, tiempoEstimado);
    formulario.insertBefore(errorTiempo, boton);
    formulario.insertBefore(salto, boton);

}
function validarNumeros(e) {
    let evento = e || event;
    if (evento.which < 48 || evento.which > 57) {
        e.preventDefault();
    }
}
function validarTiempo() {
    console.log(parseInt(tiempoEstimado.value))
    if (parseInt(tiempoEstimado.value) < 5 || parseInt(tiempoEstimado.value) > 60) {
        console.log("if");
        errorTiempo.textContent = "Introduzca un tiempo entre 5 y 60 (minutos)";
        tiempoEstimado.focus();
    } else {
        errorTiempo.textContent = ""
    }

}

function cargarReloj() {
    
    formulario.insertBefore(reloj, boton);
    console.log(fecha.value)
    let fechaSeleccionada = new Date(fecha.value);

    var temporizador = setInterval(function () {
        let hoy = new Date();
        let tiempoRestante = fechaSeleccionada - hoy;
        let dias = Math.floor(tiempoRestante / 86400000)
        tiempoRestante %= 86400000;
        let horas = Math.floor(tiempoRestante / 3600000);
        tiempoRestante %= 3600000;
        let minutos = Math.floor((tiempoRestante % 3600000) / 60000);
        let segundos = Math.floor((tiempoRestante % 60000) / 1000);

        reloj.textContent = `Tiempo restante: ${dias} día y ${horas}:${minutos}:${segundos}`;
    }, 1000)

}

formulario.addEventListener("submit", function (event) {

    if (nombre.value == "" || fecha.value == "" || hora.value == "" || tiempoEstimado.value == "") {
        event.preventDefault();
        alert("Por favor, complete correctamente los campos del formulario de reserva")
    } else if (selectTipoCita.value == "---") {
        event.preventDefault();
        errorCita.textContent = "Por favor complete el campo Tipo de Cita";
    } else {
        event.preventDefault();
        errorCita.textContent = "";
        Swal.fire({
            title: "Datos de la Cita",
            html: "Reserva realizada correctamente con los siguientes datos:\n" +
                "Nombre de la reserva:" + nombre.value + "<br/>" +
                "Fecha de la reserva: " + fecha.value + "<br/>" +
                "Hora de la reserva:  " + hora.value + "<br/>" +
                "Tipo de cita: " + selectTipoCita.value + "<br/>" +
                "Gracias por realizar la reserva",
            icon: "success"
        });
    }
});




