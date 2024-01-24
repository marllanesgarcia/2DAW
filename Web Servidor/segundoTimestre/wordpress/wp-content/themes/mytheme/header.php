<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <title><?php bloginfo( 'name' ); ?></title>
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<div class="container">
    <header class="site-header">
        <a href="<?php echo home_url("/");?>"><h1><?php bloginfo( 'name' ); ?></h1></a>
        <h4><?php bloginfo( 'description' ); ?></h4>

        <!-- Menú Principal -->
        <?php wp_nav_menu(
            array(
                "theme_location" => "main-menu",
                "menu_class" => "menu_class"
            )
        ); ?>

        <!-- Formulario Búsqueda -->
        <div class="search-form-container">
            <?php get_search_form();?>    
        </div>
        <!-- Sidebar -->
        <?php if ( is_active_sidebar( 'barra-lateral' ) ){ ?>
        <div id="widget-area" class="widget-area">
            <?php dynamic_sidebar( 'barra-lateral' ); ?>
        </div>
        <?php } ?>

    </header>