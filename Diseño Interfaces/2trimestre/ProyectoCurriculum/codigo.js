"use script";

var menu = document.getElementById("menu");
var contenido = document.querySelectorAll("class")[0];
var menu = document.getElementById("menu");
var astronauta = document.getElementById("imagen");
var planeta2 = document.getElementById("planetaInfo2");


document.addEventListener('DOMContentLoaded', function () {
    /*Esta funcion sirve para mover el muñeco por la pantalla */

    menu.addEventListener("click", function () {
        Swal.fire({
            title: "Intrucciones de movimiento.",
            html: `¡Bienvenidx! </br></br>` +
                `\nPincha y arrastra al astronauta para </br>` +
                `\npoder ver la información que ocultan </br>` +
                `\ncada uno de los planetas. </br></br>` +
                `\n¡Adelante!`,
            imageUrl: "https://www.icegif.com/wp-content/uploads/2023/12/icegif-939.gif",
            imageWidth: 110,
            imageHeight: 110,
            imageAlt: "imagen intrucciones"
        });
    });
        
        $("#cuadrado").draggable();
    
        $("#planetaInfo1").droppable({
            drop: function() {
                Swal.fire({
                    html: 
                    `
                    <h1>Informacion General</h1>
                    <h2> Mar Llanes García.</h2>
                    <ul> 
                        <li>Fecha de nacimiento: 26/01/1999</li>		
                        <li>Nacionalidad: Española</li>	
                        <li>Número de teléfono: (+34) 682539169 (Móvil)</li>	
                        <li>Dirección de correo electrónico: sakiro1999@gmail.com</li>
                        <li>Dirección: Calle Magnolia 4, Casa 2, 29639, España (Domicilio)</li>
                    </ul>
                    </br>
                    `,
                    confirmButtonText: 'Entendido'
                  });
            }
        });

    $("#planetaInfo2").droppable({
        drop: function( event, ui ) {
            
           
        }
    });

    $("#planetaInfo3").droppable({
        drop: function( event, ui ) {
            alert("BIEN");
        }
    });

    $("#planetaInfo4").droppable({
        drop: function( event, ui ) {
            alert("BIEN");
        }
    });
   
});



