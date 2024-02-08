/* "use script";

var menu = document.getElementById("menu");
var contenido = document.querySelectorAll("class")[0];
var menu = document.getElementById("menu");


document.addEventListener('DOMContentLoaded', function () {
    /* Esta funcion sirve para mover el muñeco por la pantalla
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


$(document).ready(function() {
    $(window).scroll(function() {
      var cuadrado = $('#cuadrado');
      var bloque = $('#bloque1');

      var cuadradoTop = cuadrado.offset().top;
      var cuadradoBottom = cuadradoTop + cuadrado.height();

      var bloqueTop = bloque.offset().top;
      var bloqueBottom = bloqueTop + bloque.height();

      if (cuadradoBottom >= bloqueTop && cuadradoTop <= bloqueBottom) {
        Swal.fire({
          title: 'El cuadrado está debajo del bloque',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        });
      }
    });
  }); */

  $(document).ready(function() {
    document.addEventListener('keydown', function (event) {
        var cuadrado = $('#cuadrado');
        var left = parseInt(cuadrado.css('left'));
        var top = parseInt(cuadrado.css('top'));
        var step = 10;

        switch (event.key) {
            case 'ArrowUp':
                top -= step;
                break;
            case 'ArrowDown':
                top += step;
                break;
            case 'ArrowLeft':
                left -= step;
                break;
            case 'ArrowRight':
                left += step;
                break;
        }

        cuadrado.css('left', left + 'px');
        cuadrado.css('top', top + 'px');

        // Verificar si el cuadrado pasa por debajo de otro cuadrado
        $('img').each(function() {
          if (this !== cuadrado[0]) {
            var cuadradoRect = cuadrado[0].getBoundingClientRect();
            var cuadradoRect = this.getBoundingClientRect();

            /* if (
              cuadradoRect.bottom >= cuadradoRect.top &&
              cuadradoRect.top <= cuadradoRect.bottom &&
              cuadradoRect.right >= cuadradoRect.left &&
              cuadradoRect.left <= cuadradoRect.right
            ) { */
              Swal.fire({
                title: '¡Ganaste!',
                text: 'Pasaste por debajo de un cuadrado',
                icon: 'success',
                confirmButtonText: 'Aceptar'
              });
           // }
          }
        });
    });
  });