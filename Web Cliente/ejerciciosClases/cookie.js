document.cookie= "luis=azul";
document.cookie= "maría=rojo";
/* Si se quiere machacar una cookie, se pone un valor por encima:
document.cookie= " luis=verde"; 
se pone al final de todos los que se intanciaron para hacer que el aiterior no sea válido*/

/* Para crear una cookie con fecha de expiracion: */

var fecha = new Date ("2023-12-12").toGMTString;
document.cookie = "susana=amarillo;expires="+fecha;

/* Cuando se tiene una cadema y se quiere acceder  uno de los usuarios:  */
var cookies= document.cookie;

var arrayCookies = cookies.slipt(";");
for (var i=0; i<arrayCookies.length; i++){
    var co=arrayCookies[i].trim()
    console.log(co+"-");
}






console.log(cookies);
