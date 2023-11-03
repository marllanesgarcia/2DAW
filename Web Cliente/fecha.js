"use sctrict";
var nombre= document.getElementById("nombre");
var fecha=document.getElementById("fecha");
var hora=document.getElementById("hora");
var formulario=document.getElementById("formulario");
var boton=document.getElementById("confirmar");

nombre.addEventListener("blur",validarNombre);
fecha.addEventListener("blur",validarFecha);
hora.addEventListener("blur",validarHora);

function validarNombre(){
    var patron=/^[a-zA-Z]+$/;
    let error = document.getElementById("errorNombre");
    if(!patron.test(nombre.value)){
         error.innerHTML = "Introduzca un valor correcto";
        nombre.focus();
    }else{
        error.innerHTML ="";
    }
}

/*
/^(0[1-9]|[12]\d|3[01])-(0[13578] /*meses con 31 dias*//* |1[02])-202[0-9]$
|^(0[1-9]|[12]\d|30)-(0[469]|11)-202[0-9]$ /*meses con 30 dias*//*
|^(0[1-9]|[1]\d|[2][0-8])-(02)-202[0-9]$ /*solo con el mes de febrero porque tiene 28 dias solo */



function validarFecha(){
    var patron = /^(0[1-9]|[12]\d|3[01])-(0[13578] |1[02])-202[3-9]$|^(0[1-9]|[12]\d|30)-(0[469]|11)-202[3-9]$|^(0[1-9]|[1]\d|[2][0-8])-(02)-202[3-9]$/;
    let error = document.getElementById("errorFecha");
    var fechaActual =  new Date("November 03, 2023 00:00:00");
        

    if(!patron.test(fecha.value) || fecha.min <= fechaActual){
        console.log(fecha.value);
        error.innerHTML = "Introduzca un valor correcto";
        fecha.focus();
    }else{
        error.innerHTML ="";
    }

}

function validarHora(){
    var horaActual = new Date().toLocaleTimeString('it-IT',{ hour: '2-digit', minute: '2-digit' });
    if(!hora.min==horaActual){
        console.log(hora.value);
        error.innerHTML = "Introduzca un valor correcto";
        hora.focus();
    }else{
        error.innerHTML ="";
    }
}

boton.addEventListener("click",function(){
   if(fecha && hora && nombre){
    
    alert("Tu informacion ha sido guardada, ¡hasta pronto!");
   }else{

   }

    
}); 