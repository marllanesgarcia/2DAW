"use sctrict";

$(document).ready(function(){

    /*   Ejercicio 1    */
    $(".cuadrado1").draggable({
    });
    $(".cuadrado2").droppable({
        over: function(){
            $(this).css("background-color","pink");
            console.log("ENTROOOOOOOOOOOOO");
        },
        out: function () {
            $(this).css("background-color","aqua");
            console.log("SALIOOOOOOOOOOOOO");
        }
    });

    /*  Ejercicio 2  */
    $(document).tooltip();
    
    /* Ejercicio 3   */


    $('.boton').click(function() {
        var edad = $('.age2').val();
        console.log( $('.age2').val());
        if (edad<18) {
            $("#menorDeEdadModal").dialog("open");
        } else {
            $("#mayorDeEdadModal").dialog("open");
        }
    });

    $('#menorDeEdadModal').dialog({
        autoOpen: false,
        modal: true,
        buttons: {
            Cerrar: function() {
                var aficiones = [];
                $('#menorDeEdadModal input[type="checkbox"]:checked').each(function() {
                    aficiones.push($(this).val());
                });
                console.log("Eligió: "+aficiones);
                $(this).dialog('close');
            }
        }
    });

    $('#mayorDeEdadModal').dialog({
        autoOpen: false,
        modal: true,
        buttons: {
            Cerrar: function() {
                var apellidos = $('#apellidos').val();
                var dni = $('#dni').val();
                var fechaNacimiento = $('#fechaNacimiento').val();
                console.log("Apellidos: " + apellidos);
                console.log("DNI: " + dni);
                console.log("Fecha de Nacimiento: " + fechaNacimiento);
                $(this).dialog('close');
            }
        }
    });

    $('.close').click(function() {
        $(this).closest('.modal').dialog('close');
    });

});



