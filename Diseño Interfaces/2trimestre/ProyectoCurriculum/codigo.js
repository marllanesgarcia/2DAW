"use script";

var menu = document.getElementById("menu");
var contenido = document.querySelectorAll("class")[0];
var menu = document.getElementById("menu");
var astronauta = document.getElementById("imagen");
var planeta2 = document.getElementById("planetaInfo2");


document.addEventListener('DOMContentLoaded', function () {
    /*Esta funcion sirve para mover el muñeco por la pantalla */
    Swal.fire({
        title: "Intrucciones de movimiento.",
        html: `¡Bienvenidx! </br></br>` +
            `\nPincha y arrastra al astronauta para </br>` +
            `\npoder ver la información que ocultan </br>` +
            `\ncada uno de los planetas. </br></br>` +
            `\n¡En la estrella encontrarás las instrucciones!`,
        imageUrl: "https://www.icegif.com/wp-content/uploads/2023/12/icegif-939.gif",
        imageWidth: 110,
        imageHeight: 110,
        imageAlt: "imagen intrucciones"
    });

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
                    `<h1>Informacion General</h1>
                    <h2> Mar Llanes García.</h2>
                    <ul style='list-style-type: none'> 
                        <li style='text-align: left'>Fecha de nacimiento: 26/01/1999</li>		
                        <li style='text-align: left'>Nacionalidad: Española</li>	
                        <li style='text-align: left'>Número de teléfono: (+34) 682539169 (Móvil)</li>	
                        <li style='text-align: left'>Dirección de correo electrónico: sakiro1999@gmail.com</li>
                        <li style='text-align: left'>Dirección: Calle Magnolia 4, Casa 2, 29639, España (Domicilio)</li>
                        <li style='text-align: left'>Idiomas: Español, Inglés, Coreano</li>
                    </ul>
                    <h3> Aspectos a Destacar </h3>
                    <p> Trabajo en equipo | Responsabilidad en el trabajo | 
                    Capacidad de aprendizaje rápido | Resolución de problemas organización y puntualidad
                    | Adaptabilidad, tolerancia y precisión en el trabajo | Buena comunicación | 
                    Carnet de conducir tipo B | Vehículo propio </p>
                    `,
                    confirmButtonText: '¡Seguimos!',
                    confirmButtonColor: '#8E44AD',
                    background: '#F4ECF7',
                    grow: 'row'

                  });
            }
        });

    $("#planetaInfo2").droppable({
        drop: function( event, ui ) {
            Swal.fire({
                html: 
                `
                <h1>Experiencia Laboral</h1>
                </br>
                <ul style='list-style-type: none'> 
                    <li style='text-align: left'>Ayudante de camarera en barra y coctelera “VULCANO GRILL” (01/07/2021 - 17/09/2023)</li>
                    </br>		
                    <li style='text-align: left'>Prácticas en escuela de idiomas “CULTURA ASIÁTICA” (1/04/2022 - 30/05/20232)</li>	
                    </br>
                    <li style='text-align: left'>Ayudante de camarera en barra “LA FÁBRICA” (12/2018)</li>	
                    </br>
                    <li style='text-align: left'>Ayudante de camarera en barra y Camarera en Coctelería “EL TALLER”  (01/06/2021 - 30/09/2021)</li>
                    </br>
                    <li style='text-align: left'>Puesto de venta asiático SALONES MANGA EN CONGRESOS (01/08/2017 - 30/09/2018)</li>
                    </br>
                    <li style='text-align: left'>Camarera sala y terraza “TUKTUK NOODLES” (01/07/2019 - 30/08/2019)</li>
                    </br>
                    <li style='text-align: left'>Diseño de camisetas hechas a mano TIENDA ONLINE PROPIA (1/06/2017 - 30/06/2022)</li>
                </ul>
                `,
                confirmButtonText: '¡Seguimos!',
                confirmButtonColor: '#935116',
                background: '#FAE5D3',
                grow: 'row'
              });
           
        }
    });

    $("#planetaInfo3").droppable({
        drop: function( event, ui ) {
            Swal.fire({
                html: 
                `
                <h1>Formacion Academica</h1>
                </br>
                <ul style='list-style-type: none'> 
                    <li style='text-align: left'>FPIGS DESARROLLO DE APLICACIONES WEB C.D.P. CENEC-MALAGA (01/10/22 - 21/06/2024)</li>		
                    </br>
                    <li style='text-align: left'>GRADO EN ESTUDIOS DE ASIA ORIENTAL MENCION COREA UMA Málaga, España (15/09/2018 - 20/06/2022)</li>	
                    </br>
                    <li style='text-align: left'>BACHILLERATO DE ARTES PLÁSTICAS IES Cerro del Viento (15/09/2015 - 20/06/2017)</li>	
                    </br>
                    <li style='text-align: left'>CPM COSTA DEL SOL Conservatorio profesional de música (15/09/2009 - 20/06/2015)</li>
                    </ul>
                `,
                confirmButtonText: '¡Seguimos!',
                confirmButtonColor: '#0E6655',
                background: '#D0ECE7',
                grow: 'row'
              });
        }
    });

    $("#planetaInfo4").droppable({
        drop: function( event, ui ) {
            Swal.fire({
                html: 
                `
                <h1>Proyecto y Repositorios</h1>
                </br>
                <ul style='list-style-type: none'> 
                    <li style='text-align: left'>A continuación se muestra el link de GitHub con todos los proyectos realizados y algunos a destacar.</li>		
                    </br>
                    <li style='text-align: left'> Usuario de GitHub: marllanesgarcia ( <a href='https://github.com/marllanesgarcia'>https://github.com/marllanesgarcia</a> ) </li>
                    </br>
                    <li style='text-align: left'> Proyecto Final Primer año de DAW : <a href= 'https://marllanesgarcia.github.io/ProyectoGatuno/index.html' target='_blank' >https://marllanesgarcia.github.io/ProyectoGatuno/index.html</a></li>		
                    </br>
                    <li style='text-align: left'> Página sobre League of Legends: <a href='https://marllanesgarcia.github.io/ejercicios/index.html' >https://marllanesgarcia.github.io/ejercicios/index.html</a> </li>	
                    </br>
                    
                    </ul>
                </br>
                `,
                confirmButtonText: '¡Seguimos!',
                confirmButtonColor: '#935116',
                background: '#FAE5D3',
                grow: 'row'
              });
        }
    });
   
});



