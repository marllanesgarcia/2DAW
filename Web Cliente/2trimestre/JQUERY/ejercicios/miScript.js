"use strict";


$(document).ready(function(){
    /* Cambia todos los parrafos*/
    $('p').text('Nuevo Texto');
    /* Cambia el párrafo que se selecciona del color que tenga la clase highlight*/
    $('#paragraph1').addClass('highlight');
    /* selecciona los hijos de los ul y cambia los colores del css a verde */
    $('ul>li').css('color','green');
    /* Selecciona el elemento de entrada de texto con el ID "username" y 
    cambia su valor a"NuevoUsuario"*/
    $('input[id=username]').text('Nuevo Usuario');
    /* Al hacer clic en el botón con el ID "changeTextBtn", 
    cambia el texto de todos los párrafos a "¡Texto cambiado con clic!"*/
    $('button#changeTextBtn').click(function(){
        $('p').text('¡Texto cambiado con clic!');
    });
    /* Selecciona todos los elementos de lista (<li>) y ocúltalos*/
    $('ul>li').hide();
    /*
    Agrega un evento de clic a los párrafos para resaltarlos con un fondo 
    amarillo cuando se hace clic y quitar el resaltado cuando se hace doble clic. 
    (hay una función para doble click .....dblclick)
    */
    $('p').click(function(){
        $('p').css('background-color','yellow');
    });
    $('p').dblclick(function(){
        $('p').css('background-color','white');
    });
    /* Selecciona todos los elementos de párrafo con la clase "paragraph" 
    y agrega un borde de 2píxeles de color rojo */
    $('p.paragraph').css('border','solid red 2px');
    /* Selecciona el elemento ancla cuya clase empiece por “seg” y cambia el color del texto a amarillo */
    $('a[title^=".seg"]').css('color','yellow');
    /*  Cuando se pulse verificar me debe de imprimir por consola si hay algún checkbox están seleccionado */
    $('button#verificarBtn').click(function(){
        $('input[type="checkbox"]').each(function(){
            if($(this).is(':checked')){
                console.log('Checkbox marcado: ', $(this).val());  // aqui es para que te devuelva el valor
            }
        });
    });
    /* Los elementos del dom que estén vacíos ponerles un texto (“texto para elementos vacíos”) en azul. */
    $('p:eq(4)').text("Texto para elementos vacíos").css('color','blue');
    /*  Todos los párrafos pares subrayados */
    $('p:odd').css('background-color','pink'); // p text-decoration , undeline
    // odd es para los pares ,  even para los impares
    /* Los cuatro últimos párrafos con color de fondo verde.  */
    $('p:gt(4)').css('background-color','green');
    /* Selecciona el div que contenga una ul y ponle un borde azul. */
    $('div.container').css('border','solid blue');
    /* Oculta las descripciones de las imágenes  */
   // $('img>figcaption').hide();
   // $('figcaption:only-child').hide();
    $('figcaption').hide();
    /*  Al hacer click en las imágenes se debe mostrar la descripción si está oculta,
    si se da click en otra se debe ocultar la descripción del elemento que no se pulso */
    $('img').click(function(){
        
    })

});
