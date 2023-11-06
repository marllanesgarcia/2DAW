"use strict";

document.getElementById('scrollButton').addEventListener('click', function() {
    window.scrollTo({
        top: window.innerHeight, // Ajusta la posición hacia la que quieres desplazarte
        behavior: 'smooth' // Hace que el desplazamiento sea suave
    });
});