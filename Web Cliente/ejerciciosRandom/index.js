// FALTA EL SWEETALERT Y PONERLO BONITO

document.addEventListener("DOMContentLoaded", function () {
  var cartasDiv = document.getElementById("cartas");
  var puntuacionDiv = document.getElementById("puntuacion");
  var baraja = document.getElementById("baraja");
  var plantarseBtn = document.getElementById("plantarse");
  var pedirCartaBtn = document.getElementById("pedirCarta");
  var inicioBtn = document.getElementById("inicio");
  var nombreInput = document.getElementById("nombre");
  var edadInput = document.getElementById("edad");

  var partidasJugadas = 0;
  var puntuacion;
  var cartas = [];

  function comenzarJuego() {
    puntuacion = 0;
    cartas = [];
    partidasJugadas++;

    var nombre = nombreInput.value.trim();
    var edad = parseInt(edadInput.value);

    if (nombre && /^[a-zA-Z0-9]+$/.test(nombre) && !isNaN(edad) && edad >= 18) {
      cartasDiv.style.display = "block";
      cartasDiv.style.justifyContent = "center";
      pedirCartaBtn.disabled = false;
      plantarseBtn.disabled = false;
    } else {
      alert("Añade una edad valida y mayor que 18 años.");
      return;
    }
  }

  function pedirCarta() {
    var nuevaCarta = obtenerCartaAleatoria();
    cartas.push(nuevaCarta);
    actualizarPuntuacion();
    mostrarCarta(nuevaCarta);

    if (puntuacion > 7.5) {
      mostrarResultado("¡Te has pasado de 7.5! Has perdido.");
    } else if (puntuacion === 7.5) {
      mostrarResultado("¡Felicidades, has llegado a 7.5! ¡Has ganado!");
    }
  }

  function plantarse() {
    mostrarResultado(`¡Te has plantado! Puntuación final: ${puntuacion}`);
  }

  function obtenerCartaAleatoria() {
    var cartasPosibles = [1, 2, 3, 4, 5, 6, 7, "Rey", "Caballo", "Sota"];
    var cartaAleatoria = cartasPosibles[Math.floor(Math.random() * cartasPosibles.length)];

    switch (cartaAleatoria) {
      case "Rey":
      case "Caballo":
      case "Sota":
        return 0.5;
      default:
        return cartaAleatoria;
    }
  }

  function mostrarCarta(carta) {
    baraja.innerHTML = "";
    var cartaImagen = document.createElement("img");
    cartaImagen.src = `carta_${carta}.png`;

    // Ajusta el tamaño de la carta
    cartaImagen.style.width = "100px";
    cartaImagen.style.height = "150px";

    baraja.appendChild(cartaImagen);
  }

  function actualizarPuntuacion() {
    puntuacion = cartas.reduce((total, carta) => total + carta, 0);
    puntuacionDiv.textContent = `Puntuación: ${puntuacion}`;
  }

  // ESTO CON SWEETALERT, SOLO FALTA QUE SALGA LA PUTA CARTA
  function mostrarResultado(mensaje) {
    var ultimaCarta = cartas[baraja.length - 1];
    var mensajeFinal = `${mensaje}\nPuntuación total: ${puntuacion}\nPartidas jugadas: ${partidasJugadas}\nÚltima carta: ${ultimaCarta}`;

    alert(mensajeFinal);
    reiniciarJuego();
  }

  function reiniciarJuego() {
    cartasDiv.style.display = "none";
    puntuacionDiv.textContent = "Puntuación: 0";
    baraja.innerHTML = "";
    pedirCartaBtn.disabled = true;
    plantarseBtn.disabled = true;
  }

  // Asignar eventos a los botones
  pedirCartaBtn.addEventListener("click", pedirCarta);
  plantarseBtn.addEventListener("click", plantarse);
  inicioBtn.addEventListener("click", comenzarJuego);
});
