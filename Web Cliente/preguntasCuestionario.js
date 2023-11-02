"use strict";

var p = document.getElementById("pregunta");

var preguntas = [
    { //1
        pregunta: "¿Cuál es el felino más grande del mundo?",
        respuesta: "tigre"
      },
      { // 2
        Pregunta: "¿Cuál es la esperanza de vida promedio de un gato doméstico?",
        Respuesta: "15 años"
      },
      { // 3
        Pregunta: "¿Qué raza de gato tiene pelaje rizado?",
        Respuesta: "gato rex"
      },
      { // 4
        Pregunta: "¿Qué raza de gato tiene orejas grandes y puntiagudas?",
        Respuesta: "gato siamés"  
      },
      { // 5
        Pregunta: "¿Qué parte del cuerpo de un gato utiliza para equilibrarse?",
        Respuesta: "cola"
      },
      { // 6
        Pregunta: "¿Cómo se llama el proceso de limpieza que realizan los gatos con su lengua áspera?",
        Respuesta: "grooming"
      },
      { // 7
        Pregunta: "¿Cuál es el nombre científico del gato doméstico?",
        Respuesta: "felis catus"
      },
      { // 8
        Pregunta: "¿Cuál es el gato más grande registrado en la historia?",
        Respuesta: "gato maine coon"
      },
      { // 9
        Pregunta: "¿Qué raza de gato es conocida por tener un pelaje completamente negro?",
        Respuesta: "gato bombay"
      },
      { // 10
        Pregunta: "¿Qué país se asocia comúnmente con el gato de la raza Manx?",
        Respuesta: "isla de man"
      }];

var intervalID = setInterval(cuestionario(),1000);

function preguntasRandom(){

for (var i=preguntas.length-1 ; i>0 ; i--){
        var x = Math.floor(Math.random() * (i + 1));
        [preguntas[x], preguntas[i]] = [preguntas[i], preguntas[x]];
        console.log(preguntas);
    }};

function cuestionario() {
    preguntasRandom();
    var contador = 0;
    var puntos = (contador / preguntas.length);

for (var j = 0; j < preguntas.length; j++) {
    var preguntaActual = preguntas[j].pregunta;
    var respuestaCorrecta = preguntas[j].respuesta;

    var respuestaU = document.getElementById("pregunta").textContent=preguntaActual;

if (respuestaU && respuestaU.toLowerCase() === respuestaCorrecta.toLowerCase()) {
        contador++;
        document.getElementById("respuesta").textContent = "¡Has Acertado! ¡Bieeeen!";
} else {
    document.getElementById("respuesta").textContent = "Noup, te equivocaste, wey";
    }
    }

if (puntos >= 5) {
      console.log("GANASTE SUUUUUUUUUUUU").alert("GANASTE OLEEEEEEEEEEE");
} else {
    //  console.log("Nah, perdiste").prompt("PERDISTE");
      mostrarPreguntas(); 
}
}

mostrarPreguntas();