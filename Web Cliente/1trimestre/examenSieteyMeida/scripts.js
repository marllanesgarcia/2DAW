"use strict"
//declaro fuera del addEventlistener estas variables para hacerlas globales. 
var usuario;
var edad;
var comenzar;

//array de cartas
var arrayCartas = new Array();

//creaciÃ³n de los elementos que debo crear el el tablero
var h2 = document.createElement("h2");
var input = document.createElement("input");
var imagenCarta = document.createElement("img");
var botonCarta = document.createElement("button");
var botonPlanto = document.createElement("button");

//creaciÃ³n de variables contador
var ganadas = 0;
var perdidas = 0;
var jugadas = 0;
var plantadas = 0



window.addEventListener("load", () => {
    //le doy valor a las variables
    usuario = document.getElementById("usuario");
    edad = document.getElementById("edad");
    comenzar = document.getElementById("comenzar");

    //comienzan los eventos.
    usuario.addEventListener("blur", validarUsuario);
    edad.addEventListener("keypress", validarNumeros);
    edad.addEventListener("blur", valor);
    comenzar.addEventListener("click", validarEntrada);
})

function validarUsuario() {
    //Me hubiera valido cualquier expresiÃ³n siempre que el mensaje de error estÃ© acorde con lo que se pide. 
    //var expresion = /^[a-zA-Z0-9]{6,}$/;
    var expresion = /^[a-zA-Z]{4,}[0-9]{2,}$/;
    //var expresion = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/

    var spam = document.getElementById("errorUser");
    if (!expresion.test(usuario.value)) {
        spam.innerHTML = "Debe introducir un nombre de usuario valido de al menos seis caracteres (numeros y letras)";
        usuario.focus();
    } else {
        spam.innerHTML = "";
    }
}
//opcional si lo habeis aplicado bien pero no se pidio en esta ocasiÃ³n, 
//igualmente hubiera sido copiar un cÃ³digo que ya habÃ­amos desarrollado
function validarNumeros(e) {
    var evento = e || event;
    if (evento.which < 48 || evento.which > 57) {
        e.preventDefault();
    }
}
//funciÃ³n para validar que sea mayor de 18 y porque no menor de 110 porque muy mayor me parece
function valor() {
    var spam = document.getElementById("errorEdad");
    if (edad.value < 18 || edad.value > 110) {
        spam.innerHTML = "Lo sentimos su edad no es apropiada para jugar";
        edad.focus();
    } else {
        spam.innerHTML = "";
    }
}

//una vez que se completa el formulario comenzamos, 
//y comprobamos que no se ha pulsado el boton antes de rellenar campos
function validarEntrada(e) {
    var evento = e || event;
    //establezco una bandera por si los campos estÃ¡n en blanco
    var flag = false;
    if (usuario.value == "") {
        document.getElementById("errorUser").innerHTML = "Campo Requerido";
        flag = true
    }
    if (edad.value == "" || edad.value < 18) {
        document.getElementById("errorEdad").innerHTML = "Campo Requerido";
        flag = true
    }
    //si los campos estÃ¡n en blanco vuelvo a llevar el foco al usuario. 
    if (flag) {
        e.preventDefault();
        usuario.focus();
    } else {
        // si todo esta bien comenzamos cargando el tablero y el array de cartas
        cargarTablero();
        cargarCartas();
        //una vez que el tablero se cargo a los botones se les dara el evento click
        botonCarta.disabled = false;
        botonPlanto.disabled = false;
        botonCarta.addEventListener("click", darCarta);
        botonPlanto.addEventListener("click", plantarse)
    }
}

function cargarTablero() {
    //lo primero hacer visible el elemento tablero
    document.getElementById("tablero").style.visibility = "visible";
    //agregarle los hijos que cree al comienzo y darles valores
    document.getElementById("tableroPuntos").appendChild(h2);
    h2.innerHTML = "PuntuaciÃ³n";
    document.getElementById("tableroPuntos").appendChild(input);
    input.setAttribute("class", "puntuacion")
    input.setAttribute("type", "text");
    input.setAttribute("value", "0");
    //propiedad para que no pueda escribirse sobre el
    input.readOnly = true;
    //el div donde debe colocarse la carta no tiene id, pero accedemos a travÃ©s de la clase
    //eso nos devuelve un array pero como solo hay un elemento cogemos la posicion 0 
    //y aÃ±adimos la carta que hemos declarado arriba, le ponemos el src que apunte a la cartaVuelta
    document.getElementsByClassName("baraja")[0].appendChild(imagenCarta);
    imagenCarta.setAttribute("src", "imagenes/cartaVuelta.jpg");
    //se aÃ±ade el boton carta  como elemento hijo del div que lleva su nombre en el html
    //le damos estilos de bootstrap y texto
    document.getElementById("botonCarta").appendChild(botonCarta);
    botonCarta.setAttribute("class", "btn btn-primary");
    botonCarta.innerHTML = "Carta";
    //se aÃ±ade el boton me planto  como elemento hijo del div que lleva su nombre en el html
    //le damos estilos de bootstrap y texto
    document.getElementById("botonMePlanto").appendChild(botonPlanto);
    botonPlanto.setAttribute("class", "btn btn-danger");
    botonPlanto.innerHTML = "Me Planto";
}
//para cargar el array de cartas yo lo he hecho un for por cada palo de la baraja dejando fuera el nÃºmero 8 y 9
function cargarCartas() {
    for (var i = 1; i <= 12; i++) {
        if (i < 8 || i > 9) {
            arrayCartas.push("./imagenes/baraja/bastos_" + [i] + ".jpg");
        }
    }
    for (var i = 1; i <= 12; i++) {
        if (i < 8 || i > 9) {
            arrayCartas.push("./imagenes/baraja/copas_" + [i] + ".jpg")
        }
    }
    for (var i = 1; i <= 12; i++) {
        if (i < 8 || i > 9) {
            arrayCartas.push("./imagenes/baraja/espadas_" + [i] + ".jpg")
        }
    }
    for (var i = 1; i <= 12; i++) {
        if (i < 8 || i > 9) {
            arrayCartas.push("./imagenes/baraja/oros_" + [i] + ".jpg")
        }
    }
    //una vez que el array estÃ¡ cargado se desordena. 
    arrayCartas.sort(function () {
        return Math.random() - 0.5
    });

}
//con todo terminado pasamos a el boton dar carta (recordemos que le dimos el evento click una vez que se cargo el tablero)
function darCarta() {
    //tal y como os dije vosotros reiniciabais el array de cartas a cada juego
    //eso implica que simplemente llamais aquÃ­ a la funciÃ³n cargar cartas cada vez que se dan cartas 

    //si no habrÃ­a que comprobar si el array ha llegado al final
    if (!arrayCartas.length == 0) {// si no reinicimos el array de cartas llega un momento en que el mazo se acaba y esto controla que no genere fallo. 
        var resultado;
        var numero;
        var aux = arrayCartas[0]; //metemos en aux el nombre de la primera carta
        var primero = aux.split("_"); //creamos un primer array de la cadena de la primera carta separa por _
        aux = primero[1]; //como ya no necesitamos la variable anterior machamaos aux con el valor de la segunda parte de la cadena anterior
        var segundo = aux.split("."); //extraemos el numero
        numero = segundo[0];
        if (numero > 7) {
            numero = 0.5;
        }
        imagenCarta.setAttribute("src", arrayCartas[0]);
        arrayCartas.shift(); //elimina la primera carta para que no vuelva a salir
        arrayCartas.sort(function () { //ordenamos de nuevo lo que queda
            return Math.random() - 0.5
        });

        resultado = parseFloat(input.value) + parseFloat(numero);
        input.setAttribute("value", resultado);
        comprobarResultado();//llamamos a la funciÃ³n comprobar resultado por si ha ganado
    } else {

        //si no reiniciamos el array llegarÃ¡ un momento que termine el juego porque no haya mas cartas 
        Swal.fire('No hay mas cartas. El juego se ha terminado.');
        finalJuego();
    }
}
//si se pulsa el boton de plantarse 
function plantarse() {
    //sumamos una al contador de plantadas y sale alerta
    plantadas++;
    Swal.fire({
        title: '¡Se Ha plantado!',
        showCancelButton: true,
        confirmButtonText: `Seguir Jugando`,
        cancelButtonText: `Fin del Juego`,
    }).then((result) => {
        if (result.isConfirmed) {
            //si no queremos reiniciar las cartas cargaremos cartas sino seguiremos jugando con las que quedan
            //cargarCartas();  
            cargarTablero();
        } else {
            finalJuego();
        }
    })
}

function comprobarResultado() {

    if (input.value == 7.5) {
        ganadas++;
        Swal.fire({
            title: 'Â¡Has Ganado!',
            showCancelButton: true,
            confirmButtonText: `Seguir Jugando`,
            cancelButtonText: `Fin del Juego`,
        }).then((result) => {
            if (result.isConfirmed) {
                //si no queremos reiniciar las cartas cargaremos cartas sino seguiremos jugando con las que quedan
                //cargarCartas();  
                cargarTablero();
            } else {
                finalJuego();
            }
        })
    }

    if (input.value > 7.5) {
        perdidas++;
        Swal.fire({
            title: 'Â¡Has Perdido!',
            showCancelButton: true,
            confirmButtonText: `Seguir Jugando`,
            cancelButtonText: `Fin del Juego`,
        }).then((result) => {
            if (result.isConfirmed) {
                //si no queremos reiniciar las cartas cargaremos cartas sino seguiremos jugando con las que quedan
                //cargarCartas();  
                cargarTablero();
            } else {
                finalJuego();
            }
        })

    }
}

function finalJuego() {
    var fecha = new Date();
    jugadas = ganadas + perdidas + plantadas;
    var objeto = {
        edad: edad.value,
        fecha: fecha,
        ganadas: ganadas,
        jugadas: jugadas,
        perdidas: perdidas,
        plantadas: plantadas,
    }
    objeto = JSON.stringify(objeto);

    botonCarta.disabled = true;
    botonPlanto.disabled = true;
    localStorage.setItem(usuario.value, objeto);
    Swal.fire(usuario.value + ' se ha terminado el Juego y estos son los resultados: \n Has jugado ' + jugadas + ` partidas \n Has ganado ` + ganadas + ` partidas \n Has perdido ` + perdidas + ` partidas \n Te has plantado ` + plantadas + ` veces`);

}