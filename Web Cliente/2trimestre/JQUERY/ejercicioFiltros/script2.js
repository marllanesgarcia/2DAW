"use strict";

$(document).ready(function () {

    /* Cuando pinche en el botón que pone “Haz click aquí” deberemos seleccionar 
    el checkbox anterior e imprimir por consola el valor de antes de cambiarlo y después del cambio */
    $('.clicame').click(function () {
        var valor;
        valor = $('#checkbox').prop('checked');
        console.log(valor);
        valor = $('#checkbox').prop('checked', true);
        /* Con comillas el false, al pulsar el boton te lo autoselecciona al pulsar.
        Sin comillas, te quita el check */
    });
    /* Elimina el botón que pone eliminame al hacer click en el. */
    $('button:nth-child(1)').click(function () {
        $('button:nth-child(1)').remove();
    })
    /*  Elimina todo el contenido del div que pone “Este div enetero debe desaparecer */
    $('div:nth-child(6)').empty();

    /* Agrega la clase lista al elemento #anadirClase cuando se haga click sobre el */
    $('#anadirClase').click(function () {
        var clase;
        clase = $('#anadirClase').addClass('lista');
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
    $("#container3").append('<p>Un texto que lo he puesto yo aquí</p>');
    /*Cambia el elemento “Cámbiame de clase” y ponle una clase al pinchar sobre el y si yala tiene quitasela.*/
    $("#cambiameDeClase").click(function () {
        $("#cambiameDeClase").toggleClass("loCambieYA");
    });
    /*Elimina el Item3 de la lista final.*/
    $('li:last').remove();
    /* Al pulsar el bonton “Cambia el href del ancla anterior” #cambiaHref. 
    Cambia el ancla anterior <a href="#"> para que dirija a www.ejemplo.com */
    $("#cambiaHref").click(function(){
        $("a[href='#']:first").attr("href", "https://www.ejemplo.com");
    });

    /* Recorre los elementos de la lista mostrando en consola el contenido y 
        el número de elemento es decir debe de salir en consola
        Item 0: Item 1
        Item 1: Item 2
        El tercer item en principio estaría eliminado sino debe aparecer aquí  
        Dos formas de hacerlo:
        */
    var numero = $('li').length;
    for (var i = 0; i > numero; i++) {
        console.log(`item ${i}:${$(`li:nth-of-type(${i + 1})`).text()}`)
    }

    $('li').each(function (index) {
        console.log("Item " + index + " : " + $(this).text())
    })
    /* Al pulsar en el botón con la class EliminaHref, elimina el atributo href del elemento ancla anterior <a href="#">  */
    $(".EliminaHref").click(function(){
        $("a[href='#']:last").removeAttr("href");
    });
    /* Al pulsar el el boton “Cambia el valor del input” se debe cambiar el valor del input anterior 
    y mostrarlo en un console.log. */
    $('button:nth-child(2)').click(function(){
        var input = $('#inputField');
        var valorAnterior = input.val();
        input.val('inputCambiadoValue');
        console.log("Valor anterior:", valorAnterior);
        console.log("Nuevo valor:", input.val());
    });
    /*
    3. Después del div “InsertarDespues” inserta un párrafo con eltexto que quieras.
    4. Busca el elemento con la clase highlight y eliminala
    */



});