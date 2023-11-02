"use strict";
var boton = document.getElementById("siguiente");
var p = document.getElementById("pregunta");
var respuesta = document.getElementById("respuesta");
var contador = 0;
var preguntaActual = 0;
var texto=document.getElementById("texto");
var tiempoRestante = 0;
var intervalID = null;

var preguntas = [
    { //1
        p: "¿Cuál es el felino más grande del mundo?"
      },
      { // 2
        p: "¿Cuál es la esperanza de vida promedio de un gato doméstico?"
      },
      { // 3
        p: "¿Qué raza de gato tiene pelaje rizado?"
      },
      { // 4
        p: "¿Qué raza de gato tiene orejas grandes y puntiagudas?"
      },
      { // 5
        p: "¿Qué parte del cuerpo de un gato utiliza para equilibrarse?",
      },
      { // 6
        p: "¿Cómo se llama el proceso de limpieza que realizan los gatos con su lengua áspera?"
      },
      { // 7
        p: "¿Cuál es el nombre científico del gato doméstico?"
      },
      { // 8
        p: "¿Cuál es el gato más grande registrado en la historia?"
      },
      { // 9
        p: "¿Qué raza de gato es conocida por tener un pelaje completamente negro?"
      },
      { // 10
        p: "¿Qué país se asocia comúnmente con el gato de la raza Manx?"
      }];

var respuestas = [{respuesta: "tigre"},{respuesta:"15 años"},{respuesta: "gato rex"},
    {respuesta: "gato rex"},{respuesta: "cola"},{respuesta: "grooming"},
    {respuesta: "felis catus"},{respuesta: "gato maine coon"},{respuesta: "gato bombay"},{respuesta: "isla de man"}];

    function preguntasRandom() {
        for (var i = preguntas.length - 1; i > 0; i--) {
            var x = Math.floor(Math.random() * (i + 1));
            [preguntas[x], preguntas[i]] = [preguntas[i], preguntas[x]];
            [respuestas[x], respuestas[i]] = [respuestas[i], respuestas[x]];
        }
    }
    
    function mostrarPregunta() {
      if (preguntaActual < preguntas.length) {
         //   iniciarContador(30);
            p.textContent = preguntas[preguntaActual].p;
            texto.value = "";
        } else {
            if (contador >= 5) {
                alert( "¡GANASTE SUUUUUUUUUUUU!");
            } else {
                alert("Nah, perdiste");
                location.reload();
            }
        }
    }
    
function verificarRespuesta() {
    var respuestaUsuario = respuesta.value;
    if (respuestaUsuario.toLowerCase() === respuestas[preguntaActual].respuesta.toLowerCase()) {
        contador++;
        texto.textContent = "¡Has Acertado! ¡Bieeeen!";
    } else {
        texto.textContent = "Noup, te equivocaste, wey";
    }
    preguntaActual++;
    mostrarPregunta();
}
    
    mostrarPregunta();
    
    boton.addEventListener("click", function () {
        verificarRespuesta();
        respuesta.value="";
    });

// esto pa los segundos

/* function iniciarContador(segundos) {
    tiempoRestante = segundos;
    actualizarContador();
    intervalID = setInterval(function() {
        tiempoRestante--;
        if (tiempoRestante <= 0) {
            clearInterval(intervalID);
            alert("Se acabó el tiempo. Continúa con la siguiente pregunta.");
            preguntaActual++;
            mostrarPregunta();
        } else {
            actualizarContador();
        }
    }, 1000)
}

function actualizarContador() {
    var contadorElement = document.getElementById("contador");
    contadorElement.textContent = "Tiempo que te queda: " + tiempoRestante + " segundos";
} */
