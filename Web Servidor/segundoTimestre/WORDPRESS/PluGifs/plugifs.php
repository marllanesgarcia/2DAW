<?php
/*
 * PluGifs
 *
 * @package PluGifs
 * @author Mar Llanes García
 * @copyright 2024 Mar Llanes García
 * @license GPL-2.0-or-later
 *
 * @wordpress-plugin
 * Plugin Name: PluGifs
 * Plugin URI: https://PluGifs.com
 * Description: Biblioteca de Gifs personalizada
 * Version: 0.0.1
 * Author: Mar Llanes García
 * Author URI: https://mysite.com
 * * Text Domain: PluGifs
 * License: GPL v2 or later 
 */
add_action('admin_menu','PluGifs_admin_menu');

function PluGifs_admin_menu(){
    add_menu_page(
        'PluGifs',
        'PluGifs',
        'manage_options',
        'PluGifs',
        'PluGifs',
        'dashicons-media-video'
    );
}

function gif_estilos(){
    wp_enqueue_style('gif_movimiento_estilos', plugin_dir_url(__FILE__) . 'gif_estilos.css');
}
add_action('admin_enqueue_scripts', 'gif_estilos');

function gif_movimiento() {
    echo '<div id="gif-movimiento">';
    echo '<img src="' . plugin_dir_url(__FILE__) . 'gifs/cat.gif">';
    echo '</div>';
}
add_action('admin_notices', 'gif_movimiento');

function PluGifs(){
    echo '<h1> Plugifs 🌠 </h1>';
    echo '<div class="wrap">';
    echo '<h4> Bienvenido a la mejor página para guardar tus Gifs </h4>';
    echo '</div>';
    echo '<form>';
    echo '<select id="select-imagenes">';
    $directorio_imagenes = plugin_dir_path(__FILE__) . 'gifs/';
    $imagenes = obtener_imagenes_en_carpeta($directorio_imagenes);
    foreach ($imagenes as $imagen) {
        $nombre_archivo_sin_extension = pathinfo($imagen, PATHINFO_FILENAME);
        echo '<option value="' . $nombre_archivo_sin_extension . '">' . $imagen . '</option>';
    }
    echo '</select>';
    echo '</form>';

    cargar_scripts();
}

function obtener_imagenes_en_carpeta($directorio) {
    $archivos = scandir($directorio);
    $imagenes = array();
    foreach ($archivos as $archivo) {
        $extension = strtolower(pathinfo($archivo, PATHINFO_EXTENSION));
        if ($extension === 'gif') {
            $imagenes[] = $archivo;
        }
    }
    return $imagenes;
}

function cargar_scripts() {
    wp_enqueue_script('mi-script-ajax', plugin_dir_url(__FILE__) . 'mi-script-ajax.js', array('jquery'), '1.0', true);
    wp_localize_script('mi-script-ajax', 'mi_ajax_obj', array(
        'ajaxurl' => admin_url('admin-ajax.php')
    ));
}

add_action('admin_enqueue_scripts', 'cargar_scripts');
add_action('wp_ajax_cargar_imagen', 'cargar_la_imagen');
add_action('wp_ajax_nopriv_cargar_imagen', 'cargar_la_imagen');

function cargar_la_imagen() {
    $imagen = $_POST['imagen'] . '.gif'; 
    $ruta_imagen = plugin_dir_url(__FILE__) . 'gifs/' . $imagen;
    echo '<img src="' . esc_url($ruta_imagen) . '" alt="' . esc_attr($imagen) . '">';
    die();
}

 ?>