<?php

/* Todas las cosas que queremos que admita nuestro tema, se colocan aqui   */
add_theme_support('post-thumbnails');
add_theme_support('widgets');
add_theme_support('menus');

function custom_theme_assets() {
wp_enqueue_style( 'style', get_stylesheet_uri() );
}
add_action( 'wp_enqueue_scripts', 'custom_theme_assets' ); 

function load_external_css() {
    wp_enqueue_style("external", get_stylesheet_directory_uri()."/assets/css/my_theme.css");
   
}
add_action( "wp_enqueue_scripts", "load_external_css" ); 

function register_menus() {
 register_nav_menu( 'main-menu', __('Menú Principal'));
}
add_action( 'init', 'register_menus' );

// Registrar la barra lateral
function registrar_sidebar() {
    register_sidebar(
        array(
            'name' => __('barra-lateral', 'textodominio'),
            'id' => 'barra-lateral',
            'description' => __('Esta es la barra lateral principal.', 'textodominio'),
            'before_widget' => '<div id="%1$s" class="widget %2$s">',
            'after_widget' => '</div>',
            'before_title' => '<h2 class="widget-title">',
            'after_title' => '</h2>',
        )
    );
   }
   // Enganchar la función al hook 'widgets_init'
   add_action('widgets_init', 'registrar_sidebar'); 


?>