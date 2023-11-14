let nombreUsuario;
let edadUsuario;
let puntuacion = 0;

function comenzarJuego() {
  nombreUsuario = document.getElementById('userName').value.trim();
  edadUsuario = parseInt(document.getElementById('userAge').value, 10);

  if (!nombreUsuario || isNaN(edadUsuario) || edadUsuario < 18) {
    alert('Debes ingresar un nombre válido y ser mayor de 18 años para jugar.');
    return;
  }

  document.getElementById('inputDiv').style.display = 'none';
  document.getElementById('gameDiv').style.display = 'block';
  mostrarCartaInicial();
}

function pedirCarta() {
  const carta = obtenerCarta();
  puntuacion += carta.valor;

  mostrarCarta(carta.imagen);
  document.getElementById('score').innerText = puntuacion.toFixed(1);

  if (puntuacion > 7.5) {
    mostrarResultado('Perdiste', 'Te has pasado de 7.5. ¿Quieres seguir jugando?', true);
  }
}

function plantarse() {
  mostrarResultado("Ganaste", "¡Felicidades ",nombreUsuario,"! Has conseguido ",puntuacion.toFixed(1)," puntos", false);
}

function mostrarResultado(titulo, mensaje, permitirReinicio) {
  Swal.fire({
    title: titulo,
    text: mensaje,
    showCancelButton: permitirReinicio,
    confirmButtonText: 'Sí, quiero seguir jugando',
    cancelButtonText: 'No, salir',
    reverseButtons: true,
  }).then((result) => {
    if (result.isConfirmed) {
      reiniciarJuego();
    } else {
      location.reload(); // Recargar la página para reiniciar el juego
    }
  });
}

function mostrarCartaInicial() {
  const cartaInicial = obtenerCarta();
  mostrarCarta(cartaInicial.imagen);
}

function mostrarCarta(imagen) {
  const cartasDiv = document.getElementById('cartasDiv');
  const cartaImg = document.createElement('img');
  cartaImg.src = imagen;
  cartasDiv.appendChild(cartaImg);
}

function obtenerCarta() {
  const cartas = [
    { valor: 1, imagen: "https://i.pinimg.com/564x/eb/ed/60/ebed60df503423f24b5c93e012e81ed6.jpg" },
    { valor: 2, imagen: "https://i.pinimg.com/564x/1c/9a/89/1c9a89757ab64f3897dc4bc77e911326.jpg" },
    { valor: 3, imagen: "https://i.pinimg.com/564x/53/b0/e8/53b0e89df8a9a7d417cb480ab0d903bd.jpg" },
    { valor: 4, imagen: "https://i.pinimg.com/564x/63/af/a6/63afa62b47efa84b8b87d3e39ef42bc1.jpg" },
    { valor: 5, imagen: "https://i.pinimg.com/564x/53/b0/e8/53b0e89df8a9a7d417cb480ab0d903bd.jpg" },
    
  ];

  return cartas[Math.floor(Math.random() * cartas.length)];
}

function reiniciarJuego() {
  puntuacion = 0;
  document.getElementById('score').innerText = '0';
  document.getElementById('cartasDiv').innerHTML = ''; // Limpiar el contenedor de cartas
}
