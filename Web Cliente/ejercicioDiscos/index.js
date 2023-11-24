"use strict";

let discos = [];
let mostrarMenu = true;
let opcion;

/*  Los datos del disco cuando lo añade el usuario   */
function agregarDisco() {

  let nombre = prompt("Nombre del disco:");
  let cantante = prompt("Cantante:");
  let año = parseInt(prompt("Año de publicación:"));
  let tipo = prompt("Tipo de música (Rock, Pop, Indie, Punk):");
  let localizacion = parseInt(prompt("Número de estantería:"));
  let prestado = false;

  if (año < 1902 || año > 2020) {

    alert("Año no válido. Debe estar entre 1902 y 2020.");
    return;
  }

  let disco = new Disco(nombre, cantante, año, tipo, localizacion, prestado);

  discos.push(disco);
  alert("Disco agregado con éxito.");

}

/*  Se crea la clase Disco con los diferentes tipos que lo constituyen     */
class Disco {

    constructor(nombre, cantante, año, tipo, localizacion, prestado) {
      this.nombre = nombre;
      this.cantante = cantante;
      this.año = año;
      this.tipo = tipo;
      this.localizacion = localizacion;
      this.prestado = prestado;
    }

    validarAño() {
      return this.año >= 1902 && this.año <= 2020;
    }

    cambiarLocalizacion(nuevaLocalizacion) {
      this.localizacion = nuevaLocalizacion;
    }

    comprobarDisponibilidad() {
      return !this.prestado;
    }
  }

  function mostrarNumeroDiscos() {

    alert(`Número de discos que hay registrados: ${discos.length}`);
  }

  /*  Esto sirve para mostrar los datos de forma ascendente de lo que se ha guardado  */
  function mostrarListadoAscendente() {
    discos.sort((a, b) => a.nombre.localeCompare(b.nombre));

    let listaDiscosContainer = document.getElementById("lista");

    listaDiscosContainer.innerHTML = "";

    discos.forEach(disco => {

      let discoElement = document.createElement("div");
      discoElement.classList.add("disco");

      let tituloElement = document.createElement("div");
      tituloElement.classList.add("titulo");
      tituloElement.textContent = disco.nombre;

      let infoElement = document.createElement("div");
      infoElement.innerHTML = `
        <p><strong>Cantante:</strong> ${disco.cantante}</p>
        <p><strong>Año:</strong> ${disco.año}</p>
        <p><strong>Tipo:</strong> ${disco.tipo}</p>
        <p><strong>Estantería:</strong> ${disco.localizacion}</p>
        <p><strong>Prestado:</strong> ${disco.prestado ? 'Sí' : 'No'}</p>
      `;

      /* Aqui se muestran los datos en un div hijo    */
      discoElement.appendChild(tituloElement);
      discoElement.appendChild(infoElement);

      listaDiscosContainer.appendChild(discoElement);
    });

    /* Aqui se desactiva el menu despues de haberlo mostrado    */
    mostrarMenu = false;
  }


  /*  Lo muestra por año del disco    */
  function mostrarListadoDescendente() {

    discos.sort((a, b) => b.año - a.año);

    let mensaje = "Listado de discos (Descendente por Año de Publicación):\n";
    discos.forEach(disco => mensaje += `${disco.nombre} - ${disco.año}\n`);
    alert(mensaje);
  }


  /* Intervalo segun el año de los discos    */
  function mostrarIntervaloConcreto() {

    let añoInicio = parseInt(prompt("Año de inicio del intervalo:"));
    let añoFin = parseInt(prompt("Año de fin del intervalo:"));

    let discosIntervalo = discos.filter(disco => disco.año >= añoInicio && disco.año <= añoFin);

    let mensaje = `Listado de discos en el intervalo ${añoInicio}-${añoFin}:\n`;
    discosIntervalo.forEach(disco => mensaje += `${disco.nombre} - ${disco.año}\n`);

    alert(mensaje);
  }

  /*  Por si quieres borrar el disco    */
  function borrarDisco() {

    let nombreDisco = prompt("Nombre del disco para borrar:");

    discos = discos.filter(disco => disco.nombre !== nombreDisco);

    alert("Disco borrado sin problema.");
  }
  

  /*  Los diferentes generos de musica que se pueden guardar y por los que se clasifican los discos   */
  function mostrarTipoMusicaConcreta() {

    let tipoMusica = prompt("Tipo de genero musical (Rock, Pop, Indie, Punk):");

    let discosTipoMusica = discos.filter(disco => disco.tipo.toLowerCase() === tipoMusica.toLowerCase());

    let mensaje = `Listado de discos de ${tipoMusica}:\n`;
    discosTipoMusica.forEach(disco => mensaje += `${disco.nombre} - ${disco.año}\n`);
    alert(mensaje);
  }

  /*  Cuiando quieres cambiar detalles del disco como la estanteria  */
  function cambiarLocalizacionDisco() {

    let nombreDisco = prompt("Nombre del disco:");
    let nuevaLocalizacion = parseInt(prompt("Nueva estantería:"));

    let disco = discos.find(disco => disco.nombre === nombreDisco);

    if (disco) {
      disco.cambiarLocalizacion(nuevaLocalizacion);

      alert("Localización cambiada sin problema.");
    } else {

      alert("Disco no encontrado.");
    }
  }

  function comprobarNum(num){
    if((isNaN(num) || num ==="" || num === null)){
      return false;
    } else{
      return true;
    }
  }

/* Recurrimos a un Do While para poder mostrar el menú de opciones al cliente mediante una ventana emergente      */
  do {
    if (mostrarMenu) {

      alert(
      "Menú:\n"+
      "1. Añadir un disco\n"+
      "2. Mostrar el número de discos registrados\n"+
      "3. Mostrar el listado de discos (Ascendente por Título)\n"+
      "4. Mostrar el listado de discos (Descendente por Año de Publicación)\n"+
      "5. Mostrar los discos de un intervalo concreto\n"+
      "6. Mostrar los discos de un tipo de música concreta\n"+
      "7. Borrar un disco\n"+
      "8. Cambiar disco de estantería\n"+
      "9. Terminar");

      opcion = parseInt(prompt("Escribe el numero de la opcion que quieres:"));

    } else {

      opcion = 9;
    }

    switch (opcion) {
      case 1:

        agregarDisco();
        break;
      case 2:

        mostrarNumeroDiscos();
        break;
      case 3:

        mostrarListadoAscendente();
        break;
      case 4:

        mostrarListadoDescendente();
        break;
      case 5:

        mostrarIntervaloConcreto();
        break;
      case 6:

        mostrarTipoMusicaConcreta();
        break;
      case 7:

        borrarDisco();
        break;
      case 8:

        cambiarLocalizacionDisco();
        break;
      case 9:

        alert("¡Adios mi pana!");
        break;
      default:

        alert("No vale, añade algo que sirva.");
    }
  } while (opcion !== 9 && comprobarNum(opcion));
