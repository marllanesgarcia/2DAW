"use strict";

$(document).ready(function(){



    /* Selecciona todos los elementos .item que no tienen la clase .special y ocúltalos*/
    $('.item').not('.special').hide();
    /* Selecciona todos los elementos .special y cambia su fondo a verde.*/
    $('.special').css('background-color','green');
    /* Selecciona el segundo elemento .item y añade la clase .highlight. 
    Dos formas de hacerlo: */
    $('.item:nth-of-type(2)').addClass('highlight');
    $('item:nth-child(2)').addClass('highlight');
    /* Selecciona los elementos .item del índice 2 al 4 y cambia su borde a rojo */
    $('.item').slice(1,4).css('border','solid red');
    /* Selecciona el contenedor y encuentra todos los elementos .item dentro de él y ocúltalos. 
    Dos formas de hacerlo: */
    $('.container').children('.item').hide();
    $('.container').find('.item').hide();


});