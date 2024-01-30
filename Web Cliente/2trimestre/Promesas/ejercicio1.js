"use strict";

/* var variable1 = 10;
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
            }, 2000)¡
    }else{
        reject();
    }
    })
}


mostrarDatos().catch(()=>{ // cuando usas el catch llamas al reject
    console.log("fallo")
})

mostrarDatos().then(()=>{ // cuando usas el then llamas al resolve
    console.log(array)
})

console.log("sigue")

// otro ejercicio
var datos = ["manzana","platano","fresas","sandia"];
function mostrarDatos(){
    return new Promise((resolve, reject)=>{
        if(datos.length>2){
            setTimeout(()=>{
                resolve(datos)
            },2000)
        }else{reject()
        }
    })
}

async function manejarDatosAsync(){
    try{
    var resultado=await mostrarDatos();
    console.log(resultado);
    }catch(error){
        console.log("algo salio mal");
    }
}

manejarDatosAsync();
 */

// ejercicio
/*
var frase= "gato";
function esperarSegundos(argumento){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve (frase)
            },argumento)
}
)}


esperarSegundos(8000).then(()=>{ // aqui se llama la funcion con el número de segundos prestablecidos
    console.log(frase);
})
*/

/*
// Returns a random integer from 1 to 10:
Math.floor(Math.random() * 10) + 1;

 */
var numero;
function numeroRandom(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve (numero=(Math.floor(Math.random() * 10) + 1))
        },2000)
    })
}
numeroRandom().then((numero)=>{
    console.log(numero);
});

/* var frase= "gato";
var fraseNueva;

function numero2 (numero){
    return new Promise((resolve,reject)=>{
        
        if(numero>3){
        setTimeout(()=>{
            resolve(console.log(fraseNueva=(frase+" jeje")));
        },numero*1000)
    }else{
        reject(console.log(`Noup`));
    }
})
} */
/* 
numero2().then((fraseNueva)=>{
    console.log(fraseNueva);
}).catch(()=>{
    console.log("noup");
    
})
 */

function aleatorio() {
    return new Promise((resolve, reject) => {
        let numero1;
        setTimeout(() => {
            resolve(numero1 = Math.floor((Math.random() * 10) + 1));
        }, 3000);
    });
}

aleatorio().then((numero1) => {
    return new Promise((resolve, reject) => {
        if (numero1 > 6) {
            setTimeout(() => {
                console.log(`El numero aleatorio fue: ${numero1}`)
            }, numero1);
        } else {
            console.log("El numero aleatorio fue menor a 6");
        }
    })
});
