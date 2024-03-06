"use strict";

var divLogo = document.getElementById('logo');
var loginBtn = document.getElementById('login');
var registroBtn = document.getElementById('registro');

document.addEventListener('DOMContentLoaded', function () {

    divLogo.addEventListener('click', function(){mostrarMenu()});
    loginBtn.addEventListener('click', function(){
        window.location.href = 'login.php';
    });
    registroBtn.addEventListener('click', function(){
        window.location.href = 'registrarse.php';
    })

});

function mostrarMenu() {
    var divsPequeños = document.querySelector('.menu');
    var estiloDisplay = window.getComputedStyle(divsPequeños).getPropertyValue('display');

    if (estiloDisplay === 'none') {
        divsPequeños.style.display = 'block';
        setTimeout(function() {
            divsPequeños.style.opacity = '10';
            divsPequeños.style.transform = 'translateX(0)';
        }, 80);
    } else {
        divsPequeños.style.opacity = '0';
        divsPequeños.style.transform = 'translateX(-25px)';
        setTimeout(function() {
            divsPequeños.style.display = 'none';
        }, 500);
    }
}