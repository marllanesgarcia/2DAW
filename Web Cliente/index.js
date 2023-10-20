"use script";

var nuevaTarea=document.getElementById("nuevaTarea");
var tareaForm=document.getElementById("tareaForm");
var listaTareas=document.getElementById("listaTareas");

console.log(tareaForm);
console.log(nuevaTarea);
console.log(listaTareas);

tareaForm.addEventListener("submit",function(event){
    event.preventDefault(); // antes de enviar los datos, esta funcion los analiza

    var tareaTexto=nuevaTarea.value.trim();
    

    if(tareaTexto!=""){
        agregarTarea(tareaTexto);
    }

});

function agregarTarea(texto){
    var tareaItem=document.createElement("li");
    tareaItem.innerHTML=`
    <span>${texto}</span>
    <button class="btn btn-danger btn-sm float-rigth" onclick="eliminarTarea(this)">Eliminar</button>
    <button class="btn btn-success btn-sm float-rigth" onclick="modificarTarea(this)">Modificar</button></bn>`;

    listaTareas.appendChild(tareaItem); // sirve para añadir todo el texto que se ha hecho
}

function eliminarTarea(boton){
    var tareaItem = boton.parentElement;
    tareaItem.remove();
}

function modificarTarea(boton){
   var tareaItem = boton.parentElement;
    /*  var tareaModificada=prompt("modifica la tarea:",tareaItem);
    var nuevaTarea=tareaModificada;
    nuevaTarea.innerHTML;
 */

    var tareaTexto = tareaItem.querySelector("span").textContent;
    var nuevoTexto= prompt("modifica la tarea:", tareaTexto);

    if(nuevoTexto !==null && nuevoTexto !== ""){   // se pone por si acaso
        tareaItem.querySelector("span").textContent = nuevoTexto;
    }
}