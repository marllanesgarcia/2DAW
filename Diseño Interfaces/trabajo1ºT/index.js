"use strict";

var modal = document.getElementById("myModal");
var menu = document.getElementById("menu");
var closeModalBtn = document.getElementById("closeModalBtn");

// Función para abrir el modal
menu.onclick = function() {
  modal.style.display = "block";
}

// Función para cerrar el modal
closeModalBtn.onclick = function() {
  modal.style.display = "none";
}

// Cerrar el modal si se hace clic fuera de él
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", function() {
    // Agregar un evento de clic al botón "START"
    var toggleButton = document.getElementById("toggleButton");
    toggleButton.addEventListener("click", function() {
      // Obtener la posición de la sección #containerP2
      var containerP2 = document.getElementById("containerP2");
      var containerP2Position = containerP2.offsetTop;
  
      // Desplazar la página suavemente hacia la sección #containerP2
      window.scrollTo({
        top: containerP2Position,
        behavior: "smooth"
      });
    });
  });
  

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
  