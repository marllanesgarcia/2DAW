"use script";

var menu = document.getElementById("menu");
var contenido = document.querySelectorAll("class")[0];



document.addEventListener('DOMContentLoaded', function () {
    /* Esta funcion sirve para mover el muñeco por la pantalla*/
    document.addEventListener('keydown', function(event) {
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

    boton.addEventListener("click", function (event) {
        event.preventDefault();
        
            errorCita.textContent = "";
            /* Aqui se muestra una alerta utilizando la biblioteca SweetAlert */
            Swal.fire({
                title: "La información es correcta.",
                text: "Nombre de la reserva: " + nombre.value +
                    "\nFecha de la reserva: " + fecha.value +
                    "\nHora de la reserva: " + hora.value +
                    "\nTipo de cita: " + selectTipoCita.value +
                    "\n¡Continuar!",
                imageUrl: "https://i.pinimg.com/originals/cc/4e/13/cc4e13c7aa8896b068576783e9c379dd.gif",
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: "imagen del gato"
            });
    });
});




