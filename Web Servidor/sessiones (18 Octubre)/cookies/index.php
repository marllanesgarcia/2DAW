<?php

// asi se crean
setcookie("user","holwenastardes",86400);
// asi se guarda
if(isset (&_COOKIE("user"))){
    echo "la cookie sigue vigente";
}


?>