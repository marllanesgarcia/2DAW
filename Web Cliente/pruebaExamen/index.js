/*var nombreUsuario;
var edadUsuario;
var puntuacion = 0;

function comenzarJuego() {
  nombreUsuario = document.getElementById('userName').value.trim();
  edadUsuario = parseInt(document.getElementById('userAge').value, 10);

  if (!nombreUsuario || isNaN(edadUsuario) || edadUsuario < 18) {
    alert('Debes ingresar un nombre válido y ser mayor de 18 años para jugar.');
    return;
  }
  mostrarCartaInicial();
}

function pedirCarta() {
  var carta = obtenerCarta();
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
    // Aqui reinicia el juego al reiniciar la pagina pulsando el boton
      location.reload(); 
    }
  });
}

function mostrarCartaInicial() {
  var cartaInicial = obtenerCarta();
  mostrarCarta(cartaInicial.imagen);
}

function mostrarCarta(imagen) {
  var cartasDiv = document.getElementById('cartasDiv');
  var cartaImg = document.createElement('img');
  cartaImg.src = imagen;
  cartasDiv.appendChild(cartaImg);
}

function obtenerCarta() {
  var cartas = [
    { valor: 1, imagen: "https://i.pinimg.com/564x/eb/ed/60/ebed60df503423f24b5c93e012e81ed6.jpg" },
    { valor: 2, imagen: "https://i.pinimg.com/564x/1c/9a/89/1c9a89757ab64f3897dc4bc77e911326.jpg" },
    { valor: 3, imagen: "https://i.pinimg.com/564x/53/b0/e8/53b0e89df8a9a7d417cb480ab0d903bd.jpg" },
    { valor: 4, imagen: "https://i.pinimg.com/564x/63/af/a6/63afa62b47efa84b8b87d3e39ef42bc1.jpg" },
    { valor: 5, imagen: "https://i.pinimg.com/564x/53/b0/e8/53b0e89df8a9a7d417cb480ab0d903bd.jpg" },
    // ... 
  ];

  return cartas[Math.floor(Math.random() * cartas.length)];
}

function reiniciarJuego() {
  puntuacion = 0;
  document.getElementById('score').innerText = '0';
  document.getElementById('cartasDiv').innerHTML = '';
}
*/



//  sin div de juego, crearlo desde 0:

var nombreUsuario;
var edadUsuario;
var puntuacion = 0;

document.getElementById('comenzarBtn').addEventListener('click', comenzarJuego);

function comenzarJuego() {
  nombreUsuario = document.getElementById('userName').value.trim();
  edadUsuario = parseInt(document.getElementById('userAge').value, 10);

  if (!nombreUsuario || isNaN(edadUsuario) || edadUsuario < 18) {
    alert('Debes ingresar un nombre válido y ser mayor de 18 años para jugar.');
    return;
  }

  var gameDiv = document.createElement('div');
  gameDiv.id = 'gameDiv';

  var divPuntuacion = document.createElement('div');
  var puntuacionText = document.createElement('p');
  puntuacionText.textContent = 'Puntuación: ';
  var scoreSpan = document.createElement('span');
  scoreSpan.id = 'score';
  scoreSpan.textContent = '0';
  puntuacionText.appendChild(scoreSpan);
  divPuntuacion.appendChild(puntuacionText);

  var cartasDiv = document.createElement('div');
  cartasDiv.id = 'cartasDiv';

  var divBotones = document.createElement('div');
  var pedirCartaBtn = document.createElement('button');
  pedirCartaBtn.textContent = 'Pedir Carta';
  pedirCartaBtn.addEventListener('blur', pedirCarta);
  var plantarseBtn = document.createElement('button');
  plantarseBtn.textContent = 'Me Planto';
  plantarseBtn.addEventListener('blur', plantarse);

  divBotones.appendChild(pedirCartaBtn);
  divBotones.appendChild(plantarseBtn);

  gameDiv.appendChild(divPuntuacion);
  gameDiv.appendChild(cartasDiv);
  gameDiv.appendChild(divBotones);

  var inputDiv = document.getElementById('inputDiv');
  var body = document.body;
  body.replaceChild(gameDiv, inputDiv);

  gameDiv.style.display = 'block';

  mostrarCartaInicial();
}

function pedirCarta() {
  var carta = obtenerCarta();
  puntuacion += carta.valor;

  mostrarCarta(carta.imagen);
  document.getElementById('score').innerText = puntuacion.toFixed(1);

  if (puntuacion > 7.5) {
    mostrarResultado('Perdiste', 'Te has pasado de 7.5. ¿Quieres seguir jugando?', true);
  }
}

function plantarse() {
  mostrarResultado('Ganaste', `¡Felicidades ${nombreUsuario}! Has conseguido ${puntuacion.toFixed(1)} puntos.`, false);
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
  var cartaInicial = obtenerCarta();
  mostrarCarta(cartaInicial.imagen);
}

function mostrarCarta(imagen) {
  var cartasDiv = document.getElementById('cartasDiv');
  var cartaImg = document.createElement('img');
  cartaImg.src = imagen;
  cartasDiv.appendChild(cartaImg);
}

function obtenerCarta() {
  var cartas = [
    { valor: 1, imagen: "https://i.pinimg.com/564x/eb/ed/60/ebed60df503423f24b5c93e012e81ed6.jpg" },
    { valor: 2, imagen: "https://i.pinimg.com/564x/1c/9a/89/1c9a89757ab64f3897dc4bc77e911326.jpg" },
    { valor: 3, imagen: "https://i.pinimg.com/564x/53/b0/e8/53b0e89df8a9a7d417cb480ab0d903bd.jpg" },
    { valor: 4, imagen: "https://i.pinimg.com/564x/63/af/a6/63afa62b47efa84b8b87d3e39ef42bc1.jpg" },
    { valor: 5, imagen: "https://i.pinimg.com/564x/53/b0/e8/53b0e89df8a9a7d417cb480ab0d903bd.jpg" },
    // ... 
  ];
  return cartas[Math.floor(Math.random() * cartas.length)];
}

function reiniciarJuego() {
  puntuacion = 0;
  document.getElementById('score').innerText = '0';
  document.getElementById('cartasDiv').innerHTML = ''; // Limpiar el contenedor de cartas
}
