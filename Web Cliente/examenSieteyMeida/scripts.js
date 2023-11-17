"use strict";

    document.addEventListener("DOMContentLoaded", function () {
        
        /* Aqui se declaran los elementos  */
        var usuarioCorrecto = false;
        var edadCorrecta = false;
        var puntuacionSpan = 0;
        var partidasGanadas = 0;
        var partidasPerdidas = 0;
        var partidasEmpatadas = 0;

        var tablero = document.getElementById("tablero");
        document.getElementById("usuario").addEventListener("blur", validarNombre);
        document.getElementById("edad").addEventListener("blur", validarEdad);
        document.getElementById("comenzar").addEventListener("click", comenzarJuego);
        document.getElementById("botonCarta").addEventListener("click", darCarta);
        var botonMePlanto = document.getElementById("botonMePlanto");
           
        /* Esta funcion sirve para ver si el nombre introducido esta bien o no */
        function validarNombre() {
            var usuario = document.getElementById("usuario");
            var errorUsuario = document.getElementById("errorUser");
        
            /* Esta expresion es para poder validar el nombre */
            var patron = /^[a-zA-Z0-9]{6,}$/;
        
            if (patron.test(usuario.value)) {
                usuarioCorrecto = true;
                errorUsuario.innerHTML = "";
            } else {
                usuarioCorrecto = false;
                errorUsuario.innerHTML = "Está mal, cámbialo!!!!\n. Debe tener al menos 6 caracteres";
                usuario.focus();
            }
        }
    
        /* Esta funcion es para validar la edad si esta bien o no */
        function validarEdad() {
        var edad = document.getElementById("edad");
        var errorEdad = document.getElementById("errorEdad");
    
        if (parseInt(edad.value) > 18) {
            edadCorrecta = true;
            errorEdad.innerHTML = "";
        } else {
            edadCorrecta = false;
            errorEdad.innerHTML = "Esta mal, cambialo!!!!.\n Tienes que ser mayor de edad";
        }
        }
    
        /* Esta funcion sirve para que, cuando pulsas el boton de comenzar tras hacer hecho el login,
        empieza el juego con las cartas  */
        function comenzarJuego() {
            tablero.style.visibility = "visible";
        if (usuarioCorrecto && edadCorrecta) {
            document.getElementById("tableroPuntos").innerHTML = "<p>Puntuación: </br><h2 id='puntuacionSpan' >0</h2></p>";
            document.getElementById("tablero").style.display = "block";
            var baraja = document.querySelector(".baraja").innerHTML = "<img src='imagenes/cartaVuelta.jpg' alt='carta'>";s
            document.getElementById("botonCarta").innerHTML = "<button type='button'>Pedir Carta</button>";
            document.getElementById("botonMePlanto").innerHTML = "<button type='button'>Me Planto</button>";
        } else {
            alert( "Por favor, completa los campos correctamente.");
        }
        }

        /* Esta funcion sirve cuando pulsas el boton para que te de una nueva carta aleatorias*/
        function darCarta() {
            reiniciarContadores();
            var cartaNombre = ["bastos", "oros", "copas", "espadas"];
            var valorCarta;
        
            var baraja = document.querySelector(".baraja");
            var cartaRandom = cartaNombre[Math.floor(Math.random() * cartaNombre.length)];
        
            while (true) {
                if (Math.random() < 0.5) {
                    valorCarta = Math.floor(Math.random() * 7) + 1;
                } else {
                    valorCarta = [10, 11, 12][Math.floor(Math.random() * 3)];
                }
        
                if (valorCarta !== 10 && valorCarta !== 11 && valorCarta !== 12) {
                    break;
                }
            }
        
            /* Aqui se definen las cartas para que salgan las imagenes aleatorias segun el nombre de la carpeta*/
            var cartaAleatoria = cartaRandom + "_" + valorCarta + ".jpg";
            var cartaImagen = document.createElement("img");
            cartaImagen.src = "imagenes/baraja/" + cartaAleatoria;
            cartaImagen.alt = "carta";
        
            baraja.innerHTML = "";
            baraja.appendChild(cartaImagen);
        
            puntuacionSpan += valorCarta;
        
            document.getElementById("puntuacionSpan").innerText = puntuacionSpan.toFixed(1);      

            /* Este if es para ver si te pasastes de puntuacion o no con sweetalert*/
            if (puntuacionSpan > 7.5) {
                partidasPerdidas++;
                Swal.fire({
                    
                    title: "PERDISTEEEEE.",
                    text: "Nombre: " + usuario.value + "\n" +
                        "Edad: " + edad.value +
                        "Puntuacion: " + puntuacionSpan.toFixed(1) +
                        "¿Quieres seguir?",
                    buttons: {
                        confirmButtonText: "<p class='la la-headphones'>SEGUIMOS</p>",
                          customClass: {
                        actions: function (){
                            reiniciarJuego();
                        }
                    }
                      },  
                    showCancelButton: true,
                    cancelButtonText: "<i class='la la-thumbs-down'>Me VOY</i>",
                
                    imageUrl: "https://img.freepik.com/vector-premium/cara-triste-ceno-fruncido-tamano-grande-emoji-amarillo-sonrisa_599062-5954.jpg?size=338&ext=jpg&ga=GA1.1.1826414947.1699315200&semt=ais",
                    imageWidth: 200,
                    imageHeight: 200,
                    imageAlt: "imagen triste"

                }).then((result) => {
                    if (result.isConfirmed) {
                      reiniciarJuego();
                    } else if (result.isDenied) {
                      botonMePlanto();
                    }
                  })
            }
            }
         
        /* Esta funcion sirve cuando pulsas el boton reiniciar juego y te vuelve a salir de 0*/
        function reiniciarJuego() {
            valorCarta.innerHTML = "";
            puntuacionSpan = 0;
            document.getElementById("puntuacionSpan").innerText = puntuacionSpan.toFixed(1);
            comenzarJuego();
            partidasGanadas++;
        }

        /* Esta funcion sirve cuando pulsas el boton reiniciar juego y se reinician los contadores*/
        function reiniciarContadores() {
            partidasGanadas = 0;
            partidasPerdidas = 0;
            partidasEmpatadas = 0;
        }

        var usuarioCorrecto = false; 
        var usuario = document.getElementById("usuario");

        /* Esta funcion sirve cuando pulsas el boton plantarse, te aparece toda la informacion de las partidas*/
        botonMePlanto.addEventListener("click", function () {
            
            Swal.fire({
                title: "Adioooosssssss.",
                text: "Nombre: " + usuario.value +
                      "Partidas Ganadas: "+partidasGanadas.value+
                      "Partidas empatadas: "+partidasEmpatadas.value+
                      "Partidas perdidas: "+partidasPerdidas.value+
                       "Puntuacion: " + puntuacionSpan.value,

                imageUrl: "https://i.pinimg.com/originals/9f/3c/49/9f3c496d6c72f910a64fab28311f3d89.gif",
                imageWidth: 200,
                imageHeight: 200,
                imageAlt: "imagen cat adios"
            });
            cartaBoton.disabled = false;
            mePlantoBoton.disabled = false;
        }); 
  });