"use strict";

jQuery(document).ready(function($) {
    $('#select-imagenes').change(function() {
        var nombreArchivo = $(this).val();
        $.ajax({
            type: 'POST',
            url: mi_ajax_obj.ajaxurl,
            data: {
                action: 'cargar_gif',
                nombre_archivo: nombreArchivo
            },
            success: function(response) {
                $('#resultado-imagen').html(response);
            },
            error: function(xhr, status, error) {
                console.log(xhr.responseText);
            }
        });
    });
});
