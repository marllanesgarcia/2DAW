"use script";

/* document.addEventListener("DOMContentLoaded", function () {
    const cuadricula = document.getElementById("cuadricula");
    const colorPicker = document.getElementById("color");
  
    // Crear la cuadrícula en la tabla
    for (let i = 0; i < 20; i++) {
      const row = document.createElement("tr");
      for (let j = 0; j < 20; j++) {
        const cell = document.createElement("td");
        cell.classList.add("square");
        cell.addEventListener("click", function () {
          cell.style.backgroundColor = colorPicker.value;
        });
        row.appendChild(cell);
      }
      cuadricula.appendChild(row);
    }
  }); */

  var tabla = document.getElementById("cuadricula");

  function pintarCuadricula(){
    for (let i=0;i<20;i++){}
    let cuadricula=document.createElement("tr");
    tabla.appendChild(cuadricula);
        for(let j=0;j<2;j++){
            let cuadricula2=document.createElement("th");
            cuadricula2.style="width:100px;height:20px;border-style:solid;border-width:2px;border-color:black;";
        }
  }
  pintarCuadricula();