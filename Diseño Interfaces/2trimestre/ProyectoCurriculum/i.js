"use script";

var menu = document.getElementById("menu");
var contenido = document.querySelectorAll("class")[0];
var menu = document.getElementById("menu");
var astronauta = document.getElementById("cuadrado");
var planeta2 = document.getElementById("planetaInfo2");


 document.addEventListener("DOMContentLoaded", function () {
   /*Esta funcion sirve para mover el muñeco por la pantalla */
   // astronauta.addEventListener("click", function(){arrastrar()});

    menu.addEventListener("click", function () {
        Swal.fire({
            title: "Intrucciones de movimiento.",
            html: `Usa las flechas para moverte: </br>` +
                `\nFlecha derecha ⮕ : Moverte hacia la derecha.</br>` +
                `\nFlecha izquierda ⬅ : Moverte hacia la izquierda. </br>` +
                `\nFlecha arriba ⬆ : Moverte hacia arriba. </br>` +
                `\nFlecha abajo ⬇ : Moverte hacia abajo.`,
            imageUrl: "https://www.icegif.com/wp-content/uploads/2023/12/icegif-939.gif",
            imageWidth: 110,
            imageHeight: 110,
            imageAlt: "imagen intrucciones"
        });
    }); 



$("#cuadrado").draggable();

$("#planetaInfo2").droppable({
    drop: function( event, ui ) {
        alert("BIEN");
    }
});



});