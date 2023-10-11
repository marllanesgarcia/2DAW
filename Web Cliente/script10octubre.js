"use strict";

var ancho = window.innerWidth;
var alto =window.innerHeight;

console.log(ancho);
console.log(alto);

//----------------------

var urlOrigen =location.href;
console.log(urlOrigen);
var urlDestino =location.href= "https://www.google.es";

var nuevaVentana = window.open("htpps:/www.google.es","_blank");
setTimeout(function(){nuevaVentana.close();},5000);

//------------------------

// opcion  1
if(confirm("¿Quieres saber el tamaño de tu pantalla?")){
    var ancho = window.innerWidth || document.body.clientWidth;
    var alto =window.innerHeight || document.body.clientHeight;
    alert("El ancho de tu pantalla es: "+ancho+" y el alto es: "+alto);
}else{
    alert("chao");
}

// opcion 2
functionmonstrarDimensiones();{
    var anchoVentana = window.innerWidth;
    var altoVentana =window.innerHeight;
    alert("El ancho de tu pantalla es: "+ancho+" y el alto es: "+alto);
}

// ---------------------------
// Si te quieres subscribir o no a un canal, con dos botones.
function subscribirse(){
    alert("Ya estas subscrito!!!!");
}
function noSubscribirse(){
    alert("Pos chao");
}

// ----------------
// crear una pagina con un fondo inicial. 
// Utiliza el evento onresive para cambiar el fondo cuando sea menor de ancho 800px y restaurar el fondo original cuando sea mayor de ancho 800px



// un html con dos botones : abrir ventana ( se abre una ventana al margen) y cerrar ventana (se cierra)
// para ser emergente el boton de open tiene que ser "_blank"







