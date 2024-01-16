"use strict";

function addItemToList() {
        var nuevoElemento = document.getElementById('listItem').value;
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(nuevoElemento));
        document.getElementById('custom-list').appendChild(li);
    
        document.getElementById('listItem').value = '';
}

function applyPreferences() {

   /*  var colorElegido = document.getElementById("bgColor").value;
    console.log(colorElegido);
    sessionStorage.setItem("bgColor", colorElegido);

    document.body.style.backgroundColor = sessionStorage.getItem("bgColor");

    var tamano = document.getElementById("fontSize").value;
    console.log(tamano);

    document.body.style.fontSize = tamano+"px";  
}
if(sessionStorage.getItem("bgColor")!=null){
    document.body.style.backgroundColor=sessionStorage.getItem("bgColor"); */

      //  var miElemento = addItemToList(li);
    
        var valor = document.getElementById('listStyle').value;
        console.log(valor);
        var listStyle = document.getElementById("custom-list");
        listStyle.style.listStyleType = valor;

        sessionStorage.setItem("listStyle", valor);
        document.getElementById('listItem').value = valor;

    
}




