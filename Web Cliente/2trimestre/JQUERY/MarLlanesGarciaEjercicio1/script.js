
$(document).ready(function() {
   
    /* 1. Muestra en un alert la cantidad de cursos por los que está compuesto el ciclo. 
    var asignaturas = $('ul');
    var cursos = 0;

    asignaturas.each(function() {
        cursos += $(this).find('li');
        cursos.length;
    });

    alert('El ciclo está compuesto por ' + cursos + ' cursos.');
    */
    
    /* 2. Muestra las listas al pasar por encima el ratón de Primero o Segundo y ocultar al retirarlo. 
    Utiliza el método hover. Tardará en aparecer y desparecer la información 2 segundos. 

    $('ul').hide();

    $('p:first').hover(function() {
        $('p:first').next('ul').fadeIn(2000);

    }, function() {
        $('p:first').next('ul').fadeOut(2000);
    });

    $('p:last').hover(function() {
        $('p:last').next('ul').fadeIn(2000);

    }, function() {
        $('p:last').next('ul').fadeOut(2000);
    });*/

    /* 3. Despliega el contenido de las listas al pulsar la tecla y volver a plegar al pulsar 
    Utilizar el método on. Se realizará de forma rápida.

    $('ul').hide();
    $(document).on('keydown', function(event) {

        if (event.key == 'q') {
            $('ul').slideDown('fast');

        } else if (event.key == 'w') {
            $('ul').slideUp('fast');
        }
    });*/

    /* 4. Modifica el comportamiento anterior para poderlo hacer con una sola tecla. 

    var mostrar = false;

    $(document).on('keydown', function(event) {
        if (event.key == 'm' && !false) {

            $('ul').slideDown('fast');
            mostrar = true;
        }
        else if (event.key == 'm' && mostrar) {

            $('ul').slideUp('fast');
            mostrar = false;
        }
    });*/

    /* 5. Elimina el efecto del punto 3. 

    $(document).on('keydown', function(event) {

        if (event.key == 'q') {
            $('ul').slideDown('fast').remove();

        } else if (event.key == 'w') {
            $('ul').slideUp('fast');
        }
    });*/

    /* 6. Vuelve a repetir el comportamiento del punto 4 pero ahora solo se producirá la primera 
    vez que se pulse la tecla. 

    $('ul').hide();

    $(document).on('keydown', function(event) {

        if (!mostrar) {
            if (event.key == 'm') {
                $('ul').show(); 
                mostrar = true; 

            } else if (event.key == 'm') {
                $('ul').hide(); 
                mostrar = true; 

            }
        }
    });*/

    /* 7. Al pasar el ratón por cada uno de los títulos de los módulos de segundo se 
    mostrará la cantidad de horas semanales. Esta información emergente se mostrará a continuación 
    de donde ubiquemos el ratón. Utiliza hover.

    $('ul', 'li', 'ul').on('mouseover', 'li', function(event) {

        var horas = $(horas).parent().data('hours');
        var tooltip = $('<span class="tooltip">').text('Horas semanales: ' + horas);

        tooltip.css({
            'position': 'absolute',
            'left': event.pageX + 'px',
            'top': (event.pageY + 10) + 'px',
            'background-color': 'rgba(0, 0, 0, 0.8)',
            'color': 'white',
            'padding': '5px',
            'border-radius': '5px'
        });

        $('body').append(tooltip);
    });

    $('ul', 'li', 'ul').on('mouseout', 'li', function() {
        $('.tooltip').remove();
    });
*/
    /* 8. Ahora aparecerá el número de horas cuando el usuario haga clic sobre el nombre del módulo. 
    Realiza una delegación de eventos utilizando on.     


    $('ul').on('click', 'li', function() {
        var horitas = $(this).closest('ul').data('hours');
        var spanHoritas = $('<span>').text('Las horas semanales son: ' + horitas);
        $(this).append(spanHoritas);
    });*/

    /* 9. Modifica el ejercicio 8 para que al hacer click sobre el nombre aparezca el 
    tipo de modalidad (presencial). Esta información será pasada a la función que trata el evento a 
    través del método on.*/

    $('ul').on('click', 'li', function() {
        var horitas = $(this).closest('ul').data('hours');
        var tipo = $(this).closest('ul').data('modalidad');
        var spanInformasion = $('<span>').text('Horas semanales: ' + horitas + ', Modalidad: ' + tipo);
        $(this).append(spanInformasion);
    });

});


