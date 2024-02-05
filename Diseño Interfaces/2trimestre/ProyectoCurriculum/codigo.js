"use script";

var menu = document.getElementById("menu");
var contenido = document.querySelectorAll("class")[0];
var menu = document.getElementById("menu");


document.addEventListener('DOMContentLoaded', function () {
    /* Esta funcion sirve para mover el muñeco por la pantalla*/
    document.addEventListener('keydown', function (event) {

        var element = document.getElementById('cuadrado');
        var left = parseInt(element.style.left) || 0;
        var top = parseInt(element.style.top) || 0;
        var step = 10;

        // El muñequito se mueve dependiendo de la cantidad de pixeles

        switch (event.key) {
            case 'ArrowUp':
                top -= step;
                break;
            case 'ArrowDown':
                top += step;
                break;
            case 'ArrowLeft':
                left -= step
                break;
            case 'ArrowRight':
                left += step;
                break;
        }

        element.style.left = left + 'px';
        element.style.top = top + 'px';
    })

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

    




});




