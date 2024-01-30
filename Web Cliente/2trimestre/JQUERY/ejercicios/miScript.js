"use strict";


$(document).ready(function(){
    /* Cambia todos los parrafos*/
    $('p').text('Nuevo Texto');
    /* Cambia el párrafo que se selecciona del color que tenga la clase highlight*/
    $('#paragraph1').addClass('highlight');
    /* selecciona los hijos de los ul y cambia los colores del css a verde */
    $('ul>li').css('color','green');

    $(':input[id*=username]').text('Nuevo Usuario')
})
