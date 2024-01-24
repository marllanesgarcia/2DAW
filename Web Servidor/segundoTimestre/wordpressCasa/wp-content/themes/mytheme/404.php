<?php get_header(); // Agrega la función para incluir el encabezado de tu tema ?>
<div id="primary" class="content-area">
    <main id="main" class="site-main">
        <section class="error-404 not-found">
            <header class="page-header">
                <h1 class="page-title">
                <?php esc_html_e('Página no encontrada', 'textodominio'); ?>
                </h1>
            </header><!-- .page-header -->
            <div class="page-content">
                <p><?php esc_html_e('Lo siento, pero la página que estás buscando no existe.', 'textodominio'); ?></p>
                <p><?php esc_html_e('Puedes intentar realizar una búsqueda o regresar a la página de inicio.', 'textodominio'); ?></p>
            </div>
        </section>
    </main><!-- #main -->
</div><!-- #primary -->
<?php get_footer(); // Agrega la función para incluir el pie de página de tu tema ?> 