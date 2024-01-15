document.addEventListener('DOMContentLoaded',function(){

    var boton1 = document.getElementById("morado")
    var boton2 = document.getElementById("naranja");
    var boton3 = document.getElementById("amarillo");

    boton1.addEventListener('click', function () {
        cambiarColor('rgb(175, 109, 236)');
    });;

    boton2.addEventListener('click', function () {
        cambiarColor('rgb(241, 169, 105)');
    });

    boton3.addEventListener('click', function () {
        cambiarColor('rgb(248, 248, 168)');
    });

    var cookies = document.cookie .split(";");
    for (var i=0; i<cookies.length; i++){
            var prueba=cookies[i].split("=");
            console.log("aqui entro yo");
            console.log(prueba+"esta es la prueba");
        if(prueba[0]=="color"){
            console.log(prueba);
            prueba[1]="purple";
        }
    }
})

function cambiarColor(color){
    console.log("entra");
    console.log(color);
    document.body.style.backgroundColor=color;
    var fecha = new Date ("2023-12-12").toGMTString();
    document.cookie = "color="+color+";expires="+fecha;
    var imprimir = document.cookie;
}