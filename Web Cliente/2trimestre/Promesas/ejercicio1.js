"use strict";

var variable1 = 10;
var variable2 = 3;
var div;

function primeraCondicion(){
    return new Promise ((resolve, reject)=>(
        setTimeout(()=>{
            resolve (variable1 = variable1*5)
            },2000)
    ))
}

primeraCondicion().then(()=>{
    console.log(div = variable1 / variable1);

}) 



var array =["Fruta", "Verdura", "Carne", "Embutido"];

function mostrarDatos(){
return new Promise((resolve, reject)=>{
    if(array.length<3){
        setTimeout(()=>{
            resolve(array)
            }, 2000)
    }else{
        reject()
    }
    })
}


mostrarDatos().catch(()=>{
    console.log("fallo")
})

mostrarDatos().then(()=>{
    console.log(array)
})

console.log("sigue")
