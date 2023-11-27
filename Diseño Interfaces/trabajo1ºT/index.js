"use strict";

/* $toggleButton = document.getElementById("toggleButton");


$toggleButton.click(function( event ){
    $heightDown = $(window).height() - $('#header').height();
             
    $('html, body').animate({
        scrollTop: $heightDown
    }, 1000);           
});
 */

var modal = document.getElementById("myModal");
var openModalBtn = document.getElementById("openModalBtn");
var closeModalBtn = document.getElementById("closeModalBtn");

openModalBtn.onclick = function (){
    modal.style.display="block";
}

closeModalBtn.onclick = function (){
    modal.style.display = "none";
}

window.onclick = function (event){
    if(event.get == modal){
        modal.style.display="none";
    }
}