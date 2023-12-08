"use strict";

var modal = document.getElementById("myModal");
var menu = document.getElementById("menu");
var closeModalBtn = document.getElementById("closeModalBtn");

/* Función para abrir el modal con el boton */
menu.onclick = function () {
  modal.style.display = "block";
}

/* Función para cerrar el modal */
closeModalBtn.onclick = function () {
  modal.style.display = "none";
}

/* Cerrar el modal si se hace clic fuera de él */
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

/* Funcion para el boton de lista de deseos  */
function coger(ev) {
  ev.dataTransfer.setData("text/plain", ev.target.innerText);
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drop(ev) {
  ev.preventDefault();
  var textoDeseo = ev.dataTransfer.getData("text/plain");

  var deseo = document.createElement("div");
  deseo.className = "deseo";
  deseo.innerText = textoDeseo;

  var corazon = document.createElement("span");
  corazon.className = "corazon";
  corazon.innerText = "❤️";

  deseo.appendChild(corazon);

  document.getElementById("contenedorCorazones").appendChild(deseo);

  agregarATabla(textoDeseo);
}

function agregarATabla(texto) {
  var table = document.getElementById("tablaDeseos");
  var row = table.insertRow(-1);
  var cell = row.insertCell(0);
  cell.innerHTML = texto;
}

function agregarATabla(texto) {
  var table = document.getElementById("tablaDeseos2");
  var row = table.insertRow(-1);
  var cell = row.insertCell(0);
  cell.innerHTML = texto;
}



/*  Funcion para el scroll       */    
 document.addEventListener("DOMContentLoaded", function() {
    var toggleButton = document.getElementById("toggleButton");
    toggleButton.addEventListener("click", function() {

      var containerP2 = document.getElementById("containerP2");
      var containerP2Position = containerP2.offsetTop;
  
      window.scrollTo({
        top: containerP2Position,
        behavior: "smooth"
      });
    });
  });

    /*  Funcion para la música   */
document.addEventlListener("DOMContentLoaded", function() {
    var myAudio = document.getElementById("myAudio");
    var playPauseButton = document.getElementById("playPauseButton");
    var volumeSlider = document.getElementById("volumeSlider");
  
    playPauseButton.addEventListener("click", function() {
      if (myAudio.paused) {
        myAudio.play();
      } else {
        myAudio.pause();
      }
    });
  
    volumeSlider.addEventListener("input", function() {
      myAudio.volume = volumeSlider.value / 100;
    });
  });  

/* Codigo de contacto  */
function guardarDatos() {
  var nombre = document.getElementById('nombre').value;
  var email = document.getElementById('email').value;

  localStorage.setItem('nombre', nombre);
  localStorage.setItem('email', email);

  mostrarDatosGuardados();
}

function mostrarDatosGuardados() {
  var nombre = localStorage.getItem('nombre');
  var email = localStorage.getItem('email');

  if (nombre && email) {
      document.getElementById('datosGuardados').innerHTML =
          'Nombre: ' + nombre + '<br>' +
          'Email: ' + email;
  } else {
      document.getElementById('datosGuardados').innerHTML = 'No hay datos almacenados.';
  }
}
mostrarDatosGuardados();