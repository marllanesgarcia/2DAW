/* document.cookie= "luis=azul";
document.cookie= "maría=rojo";
// Si se quiere machacar una cookie, se pone un valor por encima:
document.cookie= " luis=verde"; 
//se pone al final de todos los que se intanciaron para hacer que el aiterior no sea válido

// Para crear una cookie con fecha de expiracion: 

var fecha = new Date ("2023-12-12").toGMTString;
document.cookie = "susana=amarillo;expires="+fecha;

// Cuando se tiene una cadema y se quiere acceder  uno de los usuarios: 
var cookies= document.cookie;

var arrayCookies = cookies.slipt(";");
for (var i=0; i<arrayCookies.length; i++){
    var co=arrayCookies[i].trim()
    console.log(co+"-");
}
console.log(cookies);
 */


document.addEventListener('DOMContentLoaded',function(){

    var boton1 = document.getElementById("morado")
  
    var boton2 = document.getElementById("naranja");
    var boton3 = document.getElementById("amarillo");

    boton1.addEventListener('click', function () {
        cambiarColor('rgb(175, 109, 236)');
    });;

    boton2.addEventListener('click', function () {
        cambiarColor('rgb(241, 169, 105)');
    });

    boton3.addEventListener('click', function () {
        cambiarColor('rgb(248, 248, 168)');
    });

    var cookies = document.cookie .split(";");
    for (var i=0; i<cookies.length; i++){
        //aqui
            var prueba=cookies[i].split("=");
            console.log("aqui entro yo");
            console.log(prueba+"esta es la prueba");
        if(prueba[0]=="color"){
            console.log(prueba);
            prueba[1]="purple";
        }
    }
})

function cambiarColor(color){
    console.log("entra");
    console.log(color);
    document.body.style.backgroundColor=color;
    var fecha = new Date ("2023-12-12").toGMTString();
    document.cookie = "color="+color+";expires="+fecha;
    var imprimir = document.cookie;

}

/* 
    var boton1 = document.getElementById("morado")
  
    var boton2 = document.getElementById("naranja");
    var boton3 = document.getElementById("amarillo");



    boton1.addEventListener('click', function () {
        cambiarColor('rgb(175, 109, 236)');
    });;

    boton2.addEventListener('click', function () {
        cambiarColor('rgb(241, 169, 105)');
    });

    boton3.addEventListener('click', function () {
        cambiarColor('rgb(248, 248, 168)');
    });


function cambiarColor(color) {
    document.body.style.backgroundColor = color;
    console.log("Color seleccionado:", color);
 
    document.cookie = "colorFondo=" + color;

    var fecha = new Date("2023-12-31");
    
    document.cookie = "colorFondo=" + color + ";expires=" + fecha.toGMTString();
    console.log("hola aqui estoy")
}

var cookie = document.cookie;

var fecha = new Date("2023-12-12").toGMTString(); 
document.cookie = "colorFondo=" + document.body.style.backgroundColor + "; expires=" + fecha; 
var cookiesArray = document.cookie.split(';');
for (var i = 0; i < cookiesArray.length; i++) {
    console.log("hola aqui estoy x 2")
    var co = cookiesArray[i].trim();
    console.log(co + "-");
} */