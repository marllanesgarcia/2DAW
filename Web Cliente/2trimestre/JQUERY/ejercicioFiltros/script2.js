"use strict";

$(document).ready(function(){

    /* Cuando pinche en el botón que pone “Haz click aquí” deberemos seleccionar 
    el checkbox anterior e imprimir por consola el valor de antes de cambiarlo y después del cambio */
    $('.clicame').click(function(){
        var valor;
        valor = $('#checkbox').prop('checked');
        console.log(valor);
        valor = $('#checkbox').prop('checked',false);
        /* Con comillas el false, al pulsar el boton te lo autoselecciona al pulsar.
        Sin comillas, te quita el check */
    });
    /* Elimina el botón que pone eliminame al hacer click en el. */
    $('button:nth-child(1)').remove();
    /*  Elimina todo el contenido del div que pone “Este div enetero debe desaparecer */
    $('div:nth-child(6)').empty();
    /* Agrega la clase lista al elemento #anadirClase cuando se haga click sobre el */
    $('#anadirClase').click(function(){
        var clase;
        clase=$('#anadirClase').addClass('unaClase');
        console.log(clase);
    });
    /*  Añade un parrafo debajo de la lista */
    $('ul').after('<p>Weno aqui pongo lo que me de la gana</p></br> <h1>Vivan los gatos</h1>');
    /*  Añade otro texto encima del #container4 */
    $('#container4').before('<h4>Vivan los gatos</h4>');
    /* Cambia los colores de letra en los div pares a verde y 
    en los impares a gris e imprime por consola los valores de ambos */
    $('div');
    /*  Inserta un elemento en el contenedor 3 y comprueba en el inspector que se ve antes que el texto */


});