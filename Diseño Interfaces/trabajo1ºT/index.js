"use strict";

/* document.getElementById('scrollButton').addEventListener('click', function() {
    window.scrollTo({
        top: window.innerHeight, // Ajusta la posición hacia la que quieres desplazarte
        behavior: 'smooth' // Hace que el desplazamiento sea suave
    });
}); 

 */

function togglePart2() {
    var part1 = document.getElementById("containerP1");
    var part2 = document.getElementById("containerP2");
    var toggleButton = document.getElementById("toggleButton");

    if (part2.style.display === "none") {
        part1.style.display = "none";
        part2.style.display = "block";
        toggleButton.textContent = "Ocultar Parte 2";
    } else {
        part1.style.display = "block";
        part2.style.display = "none";
        toggleButton.textContent = "Mostrar Parte 2";
    }
}