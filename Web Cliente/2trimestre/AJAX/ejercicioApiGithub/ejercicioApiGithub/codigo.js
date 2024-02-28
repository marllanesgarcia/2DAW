"use strict";


$(document).ready(function() {

    $('#divResultados').hide();
      
     $('#btn-mostrar').click(function() {
        if ($('#datos').is(':disabled') && !$('#nombre').is(':disabled')) {
            var nombreUsuario = $('#nombre').val();
            usuario(nombreUsuario);
            repositorios(nombreUsuario);
            $('#divResultados').show();
            $('#pedirDatos').hide();
        } else if (!$('#datos').is(':disabled') && $('#nombre').is(':disabled')) {
            var nombreSeleccionado = $('#datos').val();
            usuariosBaseDatos(nombreSeleccionado);
            $('#datos').empty();
            $('#divResultados').show();
            $('#pedirDatos').hide();
        }
    });
    

     $('#btn-cambiar').click(function() {
        $('#nombre').empty();

        if ($('#nombre').is(':disabled')) {
            $('#nombre').prop('disabled', false);
            $('#datos').prop('disabled', true);
        } else {
            $('#nombre').prop('disabled', true);
            $('#datos').prop('disabled', false);
            baseDatosUsuario();
        }
        });

        $('#empezar').click(function() {
            $('#divResultados').hide();
            $('#pedirDatos').show();
            $('#nombre').prop('disabled', false);
            $('#datos').prop('disabled', true);
        });
        
});  

function usuario(nombreUsuario) {
    fetch(`https://api.github.com/users/${nombreUsuario}`)
    .then(response => response.json())
    .then(data => {
        $('#avatar-container img').attr('src', data.avatar_url);
        if (data.name !== null) {
            $('#resultado').html(`<h2>${data.name}</h2>`);
        } else {
            $('#resultado').html(`<h2>HOLAAAAA ¡Usuario sin nombre!</h2></br><p>Tu nombre es ${nombreUsuario}</p><p>Tienes : ${data.public_repos} repositorios públicos, woow</p>`);
        }
        if (data.bio !== null) {
        $('#bio-container').html(`<p>${data.bio}</p>`)
        } else {
            $('#bio-container').html('<h2>No tiene biografía 😑</h2>');
        }
        
        $('#repos-container').html('<p>Tienes los siguientes repos:</p>');
        $('#antiguedad-container').html(`<p>Lleva : ${fecha(data.created_at)} días en aqui!!😲</p>`);
    });
}

function repositorios (nombreUsuario){

        fetch(`https://api.github.com/users/${nombreUsuario}/repos`)
        .then(response => response.json())
        .then(data => {
            data.forEach(repo => {
                var ul = document.createElement('ul');
                var li = document.createElement('li');
                li.textContent = repo.name;
                ul.appendChild(li);
                $('#repos-container').append(ul);
            }); });
        $('#repos-container').empty();
}

function fecha(fechaCreacion) {
    var dias = Math.round((Date.now()-new Date(fechaCreacion))/(1000 * 60 * 60 * 24));
    return dias;
}


function baseDatosUsuario() {

    $.get('./php/usuarios.php',{allUsuarios:'true'})
    .done(function(data) {
        $('#datos').empty();
        data.forEach(function(usuario) {
            $('#datos').append($('<option>',{
                value:usuario.nombre,
                text:usuario.nombre
            })); });
    })
    .fail(function(xhr, textStatus, errorThrown) {
        console.error("Oye, hubo un error:", textStatus, errorThrown);
    });
}

function usuariosBaseDatos(nombreSeleccionado) {
    $.get('./php/usuarios.php', { allUsuarios: 'true' })
    .done(function(data) {
        var usuarioSeleccionado = data.find(function(usuario) {
            return usuario.nombre === nombreSeleccionado;
        });
        if (usuarioSeleccionado) {
            $('#resultado').html(`<h2>${usuarioSeleccionado.nombre}</h2>`);
            $('#repos-container').html(`<p>Apellido: ${usuarioSeleccionado.apellido}</p>`);
            $('#antiguedad-container').html(`<p>Es de la ciudad: ${usuarioSeleccionado.ciudad}</p>`);
        } else {
            $('#resultado').html(`<h2>No se encontró el usuario ${nombreSeleccionado}</h2>`);
        }
    })
    .fail(function(xhr, textStatus, errorThrown) {
        console.error("Oye, hubo un error:", textStatus, errorThrown);
    });
}
