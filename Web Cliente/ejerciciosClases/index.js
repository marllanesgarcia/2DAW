class Resena {
    constructor(puntuacion, comentario) {
      this.puntuacion = puntuacion;
      this.comentario = comentario;
    }
  }
  
  class Libro {
    constructor(autor, titulo) {
      this.autor = autor;
      this.titulo = titulo;
      this.resenhas = [];
    }
  
    agregarResenha(resenha) {
      this.resenhas.push(resenha);
    }
  
    obtenerResenhas() {
      return this.resenhas;
    }
  
    calcularMediaPuntuacion() {
      if (this.resenhas.length === 0) {
        return 0; 
      }
  
      var sumaPuntuaciones = this.resenhas.reduce((suma, resenha) => suma + resenha.puntuacion, 0);
      return sumaPuntuaciones / this.resenhas.length;
    }
  }
  
  /*  Ejemplos de libros para ver si me funciona  */
  var libroEjemplo = new Libro('Autor Ejemplo', 'Título Ejemplo');
  
  var resena1 = new Resena(5, 'Buena lectura, me encantó.');
  var resena2 = new Resena(2, 'No me gustó mucho, la trama era confusa.');
  
  libroEjemplo.agregarResenha(resena1);
  libroEjemplo.agregarResenha(resena2);
  
  var resenhasDelLibro = libroEjemplo.obtenerResenhas();
  
  console.log(`Libro: ${libroEjemplo.titulo} - ${libroEjemplo.autor}`);
  console.log('Reseñas:');
  resenhasDelLibro.forEach((resenha, index) => {
    console.log(`${index + 1}. Puntuación: ${resenha.puntuacion}, Comentario: ${resenha.comentario}`);
  });
  
  var mediaPuntuacion = libroEjemplo.calcularMediaPuntuacion();
  console.log(`Media de Puntuación: ${mediaPuntuacion}`);
  


  /* forma de la profe con un archivo de clases a parte:


  "use strict";

import * as todo from "./clases.js"

var libro1 = new Libro("El tiempo", "Carlos");

var resena1= new Resena (5,"Buena");
libro1.resenas.push(resena1);

var resena2 = new Resenas (8,"Buena");
libro1.resenas.push(resena2);
libro1.resenas.push(resenas2);
var puntuacionTotal=0;

for (var i= 0; i<libro1.resenas.length; i++){
    puntuacionTotal=puntuacionTotal+libro1.resenas[i].puntuacion;
}

console.log(puntuacion/libro1.resenas.length);
  
*/