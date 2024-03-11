'use strict';

$("document").ready(function(){
    //Creación del array que mostraremos posteriomente de las asignaturas que elige el usuario.
    var array_asignaturas =[];
    //Evento click del boton con id sombrero del formulario.
    $("#sombrero").click(function(event){
        //Switch en el que los casos comprueba uno a uno si los tres campos del formulario estan rellenos
        event.preventDefault();
        switch (true){
            case $("#nombre").val().trim()=="":
            $("#errorNombre").html("Completa el campo Nombre");
            break;
            case $("select")[0].value=="":
            $("#errorNombre").html("");
            $("#errorCualidad1").html("Completa el campo Cualidad 1");
            break;
            case $("select")[1].value=="":
            $("#errorNombre").html("");
            $("#errorCualidad1").html("");
            $("#errorCualidad2").html("Completa el campo Cualidad 2");
            break;
            // Se hará el caso default si se ha comprobado que los campos estan rellenos.
            default:
            $("#errorNombre").html("");
            $("#errorCualidad1").html("");
            $("#errorCualidad2").html("");
            event.preventDefault();
            // Función AJAX que recoge los valores de los select del formulario para evaluar segun estos
            // la respuesta del archivo sombrero.php.
             $.ajax({
                type:"POST",
                url: "./php/sombrero.php",
                data:{cualidad1:$("select")[0].value,cualidad2:$("select")[1].value},

                // Si la conexión ha sido correcta se ralizará la funcion mostrarCasa, pasandole la respuesta
                // del ajax y el array que se rellenará posteriormente.
                success:function(respuesta){
                    
                    mostrarCasa(respuesta,array_asignaturas);
                },

                // Funcion que se hará si no se produce la respuesta.
                error:function(){
                    console.error("Error al realizar la operación");
                }
             })
            break;
        }
        
    });
    
});

function mostrarCasa(respuesta,array_asignaturas){
    // Sweet alert que te dirá la respuesta del ajax cuyo boton creará la tabla que hay vacía en el archivo html.
    swal.fire({
        title:"Casa en la que has sido seleccionado",
        html:`Has sido seleccionado para la casa ${respuesta}`,
        icon:"info",
        showConfirmButton:true
    }).then((result)=>{
        // Si el boton que hay en el SweetAlert es clicado se creará la tabla con los datos de la base de datos
        // que hay en el archivo asignaturas.php
        if(result.isConfirmed){
        var texto = `
        <tr>
        <th>Nivel de dificultad</th>
        <th>Nombre de la asignatura</th>
        <th>Profesor de la asignatura</th>
        <th>Casa Obligatoria</th>
        <th>Asignaturas</th>
        </tr>`;
        // Usamos fetch para recibir los datos de la base de datos según el archivo asignaturas.php
        // Se almacenará en un json que se usará para crear las filas y columnas de la tabla
        // con los valores obtenidos.
          fetch("./php/asignaturas.php")
          .then((response)=>response.json())
          .then((data)=>data.forEach(element =>{
            texto+="\n<tr>";
            texto+=`\n<td>${element.nivel}</td>
                    \n<td>${element.nombre_asignatura}</td>
                    \n<td>${element.profesor}</td>
                    \n<td>${element.casa==null?'Optativa':element.casa}
                    \n<td><button data-asignatura=${element.nombre_asignatura}  class='botones_seleccionar'>Seleccionar</button></td>`;
            texto+="\n</tr>";
            $("#tabla-container").html(texto);
            // Asignamos a cada boton de la tabla una función que recogerá la asignatura de su fila
            // correspondiente para luego mostrarla en un sweetalert.
            // Al clicar el botón, se deshabilitará y cambiara de color para diferenciarse.
            $(".botones_seleccionar").each(function(){
                $(this).click(function(){
                    $(this).attr("disabled",true);
                    $(this).css("background-color","red");
                    array_asignaturas.push(this.dataset.asignatura);
                    console.log("entra");
                })
            })
          }));
          //Mostramos el botón que hay oculto en el html y le asignamos una función de click
          // que mostrará todas las asignaturas que el usuario haya elegido en un sweeatalert.
          $("#btnasignaturas").css("display","block");
          $("#btnasignaturas").click(function(){
            let texto_asignaturas="<ul>";
            for(let i=0;i<array_asignaturas.length;i++){
                texto_asignaturas+=`<li>${array_asignaturas[i]}</li>`;
            }
            texto_asignaturas+="</ul>";
            swal.fire({
                title:`Asignaturas en las que se ha matriculado ${$("#nombre").val()} 
                perteneciente a la casa de ${respuesta}`,
                html:texto_asignaturas,
                icon:"info",
                showConfirmButton:true
            });
          });
        }
        
    });
}