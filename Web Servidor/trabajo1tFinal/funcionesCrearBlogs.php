<?php
$blogs = [];

// agregar un blog
function agregarBlog($titulo, $introduccion, $contenid) {
    global $blogs;
    $blogs[] = ['titulo' => $titulo, 'introduccion' =>  $introduccion, 'contenido' => $contenid];
    // guardar
    $contador_blog;
    foreach ($blogs as $blog){
        $contador_blog[$blog];
    }
}

//borrar un blog
function borrarBlog($indice) {
    global $blogs;
    unset($blogs[$indice]);
    $blogs = array_values($blogs);
}

//editar un blog
function editarBlog($indice, $titulo,  $introduccion, $contenid) {
    global $blogs;
    $blogs[$indice] = ['titulo' => $titulo, 'introduccion' =>  $introduccion, 'contenido' => $contenid];
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['crear'])) {
        $titulo = $_POST['titulo'];
        $introduccion = $_POST['introduccion'];
        $contenido = $_POST['contenido'];
        agregarBlog($titulo, $contenido);
    } elseif (isset($_POST['borrar'])) {
        $indice = $_POST['indice'];
        borrarBlog($indice);
    } elseif (isset($_POST['editar'])) {
        $indice = $_POST['indice'];
        $titulo = $_POST['titulo'];
        $contenido = $_POST['contenido'];
        editarBlog($indice, $titulo, $introduccion, $contenido);
    }
}
?>