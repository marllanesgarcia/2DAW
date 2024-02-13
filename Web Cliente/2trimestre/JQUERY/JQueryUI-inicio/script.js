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
    

});



