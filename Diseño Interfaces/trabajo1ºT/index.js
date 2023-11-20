"use strict";

$toggleButton = document.getElementById("toggleButton");


$toggleButton.click(function( event ){
    $heightDown = $(window).height() - $('#header').height();
             
    $('html, body').animate({
        scrollTop: $heightDown
    }, 1000);           
});

/*
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
 */
function openModal() {
    document.getElementById("menu").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("menu").style.display = "none";
  }