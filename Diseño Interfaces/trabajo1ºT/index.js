"use strict";

var modal = document.getElementById("myModal");
var menu = document.getElementById("menu");
var closeModalBtn = document.getElementById("closeModalBtn");

/* Función para abrir el modal con el boton */
menu.onclick = function() {
  modal.style.display = "block";
}

/* Función para cerrar el modal */
closeModalBtn.onclick = function() {
  modal.style.display = "none";
}

/* Cerrar el modal si se hace clic fuera de él */
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

/*  Funcion para el scroll           */
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
  
    /*  Funcion para la música    */
  document.addEventListener("DOMContentLoaded", function() {
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

  /* Código para la búsqueda de palabras en la barra buscadora    */
  document.addEventListener("DOMContentLoaded", function() {
    var searchForm = document.getElementById("searchForm");
    var buscadorInput = document.getElementById("buscador");
  
    searchForm.addEventListener("submit", function(event) {
      if (buscadorInput.value.trim() === "") {
        event.preventDefault(); 
      }
    });
  });
  