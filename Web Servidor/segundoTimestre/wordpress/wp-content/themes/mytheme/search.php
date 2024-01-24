<?php get_header(); ?>

<div class="main-content">
    <div class="container">
        <div class="content-area">
            <h1> Resultados de la Búsqueda: <?php echo $s;?></h1>
        <?php if(have_posts()){?>
            <?php while(have_posts()){ 
                the_post(); ?>
            <!-- recopilando info de cada post -->
                <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                    <!-- título del post -->
                    <h1 class="entry-title main_title"><?php the_title(); ?></h1>
                    <!-- contenido del post -->
                    <div class="entry-content">
                        <?php
                        the_excerpt();
                        ?>
                    </div> <!-- fin contenido post -->
                    <a href="<?php the_permalink();?>">Leer Más</a>
                </article> <!-- fin info de cada post -->
            <?php } ?><!-- fin del loop -->
        <?php }else{ ?>
            Lo sentimos no hemos encontrado ningun resultado de la búsqueda.
        <?php }?>
        </div> <!-- termina contenido derecha -->
        <?php //get_sidebar(); ?><!-- barra lateral -->
    </div> <!-- fin de div contentarea -->
</div> <!-- fin de div container -->
</div> <!-- fin de div contenido principal -->
<?php get_footer(); ?><!-- llamada al pie de página —>