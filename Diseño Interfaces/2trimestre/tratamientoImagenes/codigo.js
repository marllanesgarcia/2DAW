"use strict";

document.addEventListener('DOMContentLoaded',function(){

    var musica = document.getElementById("musica");
    var velocidad = document.getElementById("velocidad");
    var play = document.getElementById("botonPlay");
    var parar = document.getElementById("BotonStop");

    play.addEventListener("click", function() {
    if (musica.paused) {
        musica.play();
        play.textContent = "Pausa";
    } else {
        musica.pause();
        play.textContent = "Reproducir";
    }
    });

    parar.addEventListener("click", function() {
    musica.pause();
    musica.currentTime = 0;
    play.textContent = "Reproducir";
    });

    velocidad.addEventListener("change", function() {
    musica.playbackRate = parseFloat(velocidad.value);
    });

        var video = document.getElementById("video");
        video.play();

})

