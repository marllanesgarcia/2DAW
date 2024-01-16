"use strict";

//function calcularLetra(){

let formulario=document.getElementById("formulario");

formulario.addEventListener("submit", function(event){
    event.preventDefault(); // quita la funcion predeterminada del submit para que tu le digas que ahcer despues

    var nombre=document.getElementById("nombre").value;
    var apellidos=document.getElementById("apellidos").value;
    var dni=document.getElementById("dni").value;
    
    console.log(dni);
    
    var letras = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E','T'];
    var letras2 = 'TRWAGMYFPDXBNJZSQVHLCKET';
    
    var dniSinLetra= dni.slice(0,(dni.length-1));
    console.log(dniSinLetra);

    function calcularLetra(dniSinLetra) {
        let resto = dniSinLetra%23;
        return letras[resto];
    }
    
});




/* for (var i = 1 ; i = 8 ; i ++){
    var totalNumeros = (parseFloat)(dniSinLetra + dniSinLetra)^i;
}

var cociente = (totalNumeros % 23);
var resultado = letras2.substring(cociente,cociente+1);
var ultimaLetra= dni.length-1;

if(ultimaLetra === resultado){
    resultado= "Es valido, muy bien. "+"</br>"+ nombre+" "+apellidos+ ", tu DNI esta correcto.";

    console.log("Es valido, muy bien. "+"</br>"+ nombre+" "+apellidos+ ", tu DNI esta correcto.");
}else{
    resultado= "Está mal, eres ilegal, "+nombre;

    console.log("No es válido, "+nombre);
}


document.getElementById("resultado").innerHTML = "Resultado: " + resultado;



}     */        




/* 



"use strict";

    function calcularLetra() {
  var nombre = document.getElementById("nombre").value;
  var apellidos = document.getElementById("apellidos").value;
  var dni = document.getElementById("dni").value;

  var letras = 'TRWAGMYFPDXBNJZSQVHLCKET';
  var dniSinLetra = dni.slice(0, -1);
  var totalNumeros = 0;

  for (var i = 0; i < 8; i++) {
    totalNumeros += parseInt(dniSinLetra.charAt(i)) * (2 ** (7 - i));
  }

  var cociente = totalNumeros % 23;
  var letraCalculada = letras.charAt(cociente);
  var ultimaLetra = dni.charAt(8);

  if (letraCalculada === ultimaLetra) {
    var resultado = "Es válido, muy bien. " + nombre + " " + apellidos + ", tu DNI está correcto.";
    console.log("Es válido, muy bien. " + nombre + " " + apellidos + ", tu DNI está correcto.");
  } else {
    var resultado = "Está mal, eres ilegal, " + nombre;
    console.log("No es válido, " + nombre);
  }

  document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}
 */