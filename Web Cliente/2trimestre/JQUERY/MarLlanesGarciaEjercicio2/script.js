
$(document).ready(function(){

    /*
        funcion para que desaparezcan los tours
    */
    $('.hide-tour').click(function(){

        $(this).closest('.tour').hide(); 
        return false; 
    });

    /*
        funcion para que aparezcan las imagenes de cada tour
    */
    $('.see-photos').click(function(){
        var tourPrincipal = $(this).closest('.tour'); 
        tourPrincipal.find('.photos').css('display','block'); 
        return false;
    });

    /*
        funcion para que aparezcan las imagenes de todos los tours
    */
    $('.show-photos').click(function(){
        
        $('.photos').css('display','block');
        return false; 
        });

  });
  