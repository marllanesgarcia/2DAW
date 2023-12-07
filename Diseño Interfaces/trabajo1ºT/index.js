"use strict";

var modal = document.getElementById("myModal");
var menu = document.getElementById("menu");
var closeModalBtn = document.getElementById("closeModalBtn");

/* Función para abrir el modal con el boton */
menu.onclick = function () {
  modal.style.display = "block";
}

/* Función para cerrar el modal */
closeModalBtn.onclick = function () {
  modal.style.display = "none";
}

/* Cerrar el modal si se hace clic fuera de él */
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

/* Funcion para el boton de lista de deseos   */
function coger(ev) {
  ev.dataTransfer.setData("text/plain", ev.target.innerText);
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drop(ev) {
  ev.preventDefault();
  var textoDeseo = ev.dataTransfer.getData("text/plain");

  var deseo = document.createElement("div");
  deseo.className = "deseo";
  deseo.innerText = textoDeseo;

  var corazon = document.createElement("span");
  corazon.className = "corazon";
  corazon.innerText = "❤️";

  deseo.appendChild(corazon);

  document.getElementById("contenedorCorazones").appendChild(deseo);

  agregarATabla(textoDeseo);
}

function agregarATabla(texto) {
  var table = document.getElementById("tablaDeseos");
  var row = table.insertRow(-1);
  var cell = row.insertCell(0);
  cell.innerHTML = texto;
}



/*  Funcion para el scroll       */    
 document.addEventListener("DOMContentLoaded", function() {
    var toggleButton = document.getElementById("toggleButton");
    toggleButton.addEventListener("click", function() {

      var containerP2 = document.getElementById("containerP2");
      var containerP2Position = containerP2.offsetTop;
  
      window.scrollTo({
        top: containerP2Position,
        behavior: "smooth"
      });
    });
  });

    /*  Funcion para la música   */
document.addEventlListener("DOMContentLoaded", function() {
    var myAudio = document.getElementById("myAudio");
    var playPauseButton = document.getElementById("playPauseButton");
    var volumeSlider = document.getElementById("volumeSlider");
  
    playPauseButton.addEventListener("click", function() {
      if (myAudio.paused) {
        myAudio.play();
      } else {
        myAudio.pause();
      }
    });
  
    volumeSlider.addEventListener("input", function() {
      myAudio.volume = volumeSlider.value / 100;
    });
  });  

  /* Código para la búsqueda de palabras en la barra buscadora   */  
document.getElementById('buscar').addEventlistener('submit', function(event) {
    event.preventDefault();
    search();
  });
  
  function search() {
    var terminoino = document.getElementById('buscador').value.toLowerCase();
    var paginas = buscarPaginas(terminoino);
  
    resultadosPosibles(paginas);
  }
  
  function buscarPaginas(terminoino) {
    var links = [
      { titulo: 'Página 1', url: 'index.html' },
      { titulo: 'Página 2', url: 'info.html' },
      { titulo: 'Página 3', url: 'kpop.html' },
      { titulo: 'Página 4', url: 'khiphop.html' },
      { titulo: 'Página 5', url: 'krock.html' },
      { titulo: 'Página 6', url: 'kclassic.html' },
    ];
      // metodo para buscar por filtro (filter)
    var paginas = links.filter(pagina => {
      var contenidoPagina = obtenerContenidoDePagina(pagina.url).toLowerCase();
      return contenidoPagina.includes(terminoino);
    });
  
    return paginas;
  }
  
  function obtenerContenidoDePagina(url) {
    switch (url) {
      case 'index.html':
        return 'Contenido de la página...';
      case 'info.html':
        return 'Contenido de la página...';
      case 'kpop.html':
        return 'Contenido de la página...';
      case 'khiphop.html':
        return 'Contenido de la página...';
    case 'krock.html':
       return 'Contenido de la página...';
    case 'kclassic.html':
        return 'Contenido de la página...';
      default:
        return '';
    }
  }
  
  function resultadosPosibles(paginas) {
    var resultados = document.getElementById('resultados');
    resultados.innerHTML = '';
  
    if (paginas.length > 0) {
      var h3 = document.createElement('h3');
      h3.textContent = `Páginas que contienen la palabra "${document.getElementById('buscador').value}":`;
      resultados.appendChild(h3);
  
      var lista = document.createElement('ul');
      paginas.forEach(pagina => {
        var listaItem = document.createElement('li');
        listaItem.innerHTML = `<a href="${pagina.url}">${pagina.titulo}</a>`;
        lista.appendChild(listaItem);
      });
      resultados.appendChild(lista);
    } else {
      var noResultados = document.createElement('p');
      noResultados.textContent = 'No se encontraron páginas con la palabra ingresada.';
      resultados.appendChild(noResultados);
    }
  }