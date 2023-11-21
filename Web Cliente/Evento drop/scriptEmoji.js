"use script";

var zonaEmoji = document.getElementById("emojis");
var zonaComida = document.getElementById("comidas");
var zonaObjetos = document.getElementById("objetos");

var emojis = document.getElementById("emojisCaras");
var comidas = document.getElementById("emojisComidas");
var objetos = document.getElementById("emojisObjetos");

function arrastrar(event) {
    //extraigo la id del elemento que estamos arrastrando
    var idImagen = event.target.id;
    //con este método estamos configurando los datos que vamos a conservar del objeto que estamos arrastrando
    event.dataTransfer.setData("text/plain", idImagen);
}

// esto sirve para ponerle color de fondo cuando mueves la imagen al cuadrado
function mover(event) {
    event.preventDefault();
    zonaEmoji.style.background = "#A8BCE5";
    zonaComida.style.background = "#A8BCE5";
    zonaObjetos.style.background = "#A8BCE5";
}

function fondo(event){
    event.preventDefault();
    zonaEmoji.style.background = "initial";
    zonaComida.style.background = "initial";
    zonaObjetos.style.background = "initial";
}

function soltar(){

}

// funcion para cuando arrastras que sume puntos
function sumaPuntos(){

}

// funcion para restar puntos
function restarPuntos(){

}



// funcion para calcular la puntuacion
function puntuacion(){

}




