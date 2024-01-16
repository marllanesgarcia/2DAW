

export class Resena {
    constructor(puntuacion, comentario) {
      this.puntuacion = puntuacion;
      this.comentario = comentario;
    }
  }
  
export class Libro {
    constructor(autor, titulo) {
      this.autor = autor;
      this.titulo = titulo;
      this.resenhas = [];
    }
}