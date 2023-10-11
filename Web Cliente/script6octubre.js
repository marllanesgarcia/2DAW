"use strict";

// metodos con array

// map : modifica los elementos del array 
/*
var myArray=["Amarillo","Blanco","Negro"]

var resultado= myArray.map(element => element+"s")
console.log(resultado);

var myArray=[8,7,23]

var resultado= myArray.map(element => element+*10)
console.log(resultado);*/

// filter 
/*
var myArray=[8,7,23]
var resultado= myArray.filter(element => element<10)
console.log(resultado);

// forEach : util para saber en que posicion esta cada elemento

var myArray=["Blanco","Negro","Amarillo","Cinco"]
var resultado=myArray.forEach((element, i)=>{
    console.log("el elemeto "+element+" tiene el indice "+i)
});

// find () : devuelve la primera coincidencia

var myArray=["Blanco","Negro","Amarillo","Cinco"]
var resultado = myArray.find(element => element == "Negro");
console.log (resultado);

// sort

var myArray=["Blanco","Negro","Amarillo","Cinco"]
var resultado= myArray.sort((a,b)=> b?-1:1);
console.log(resultado);

// some
// every
// concat : concatena

var myArray=["Blanco","Negro","Amarillo","Cinco"]
var myArray2=["Celeste","Violeta"]
var resultado= myArray.some(element => element.lenght>2);
var resultado= myArray.concat(myArray2);
console.log(resultado);

// includes 
var myArray=["Blanco","Negro","Amarillo","Cinco"]
var myArray2=["Celeste","Violeta"]

var resultado= myArray.includes("Blanco");
var resultado= myArray.join();
console.log(resultado);

// join : convierte los elementos en un a cadena
// reduce
var myArray=["Blanco","Negro","Amarillo","Cinco"]
var resultado=myArray.reduce((Accumulator,current)=>Accumulator+current);
console.log(resultado);

// indexOf : te pilla el numero que quieres dependiendo de la posicion, contando desde el final
// findIndex : retorna el indice donde se encuemtra el elemento
var myArray=[3,4,5,"Negro",14,23]
var resultado=myArray.indexOf(5);
var resultado=myArray.findIndex(element => element ==="Negro");
console.log(resultado);

// fill : cambia lo valores segun el indice que te digan

var myArray=[3,4,5,"Negro",14,23]
var resultado=myArray.fill(Rojo,2);
console.log(resultado);

// push :lo añade al final

// pop : elimina el ultimo

// unshift : lo añade al principio

// reverse : cambia totalmente las posiciohnes del array

// splice 

// Ejercicio :
// array con los siguentes valores: ana, oscar, raul, carmen, maria, antonio.
// son deportistas y su clasificacion es esa. 
// Imprime la lista por vconsola pero
// en la siguiente linea carmen adelanta a raul. 
// Despues antonio es descalificado
// detras de ana y antes de oscar se clasifican ramon y alicia 
// despues marta encabeza la lista

var participantes= ["ana","oscar","raul","carmen","maria","antonio"]
console.log(participantes);

/* opcion 1
var indiceCarmen = participantes.indexOf("carmen");
var indiceRaul = articipantes.indexOf("raul");

if (indiceCarmen !== -1 && indiceRaul !== -1) {
[participantes[indiceCarmen], participantes[indiceRaul]] = [participantes[indiceRaul], participantes[indiceCarmen]];
} */

// opcion 2 
/*
participantes[2]="carmen";
participantes[3]="raul";
console.log(participantes);
//-------------------------
var descalificado= participantes.pop("antonio");
console.log(descalificado);
//-------------------------
var integrantesNuevos= participantes.splice(1,0,"ramon").splice(2,0,"alicia");
console.log(integrantesNuevos);
//-------------------------
var encabeza= participantes.unshift("marta");
console.log(encabeza);


// metodo isArray : dice que si lo que pasamos es array o no

var prueba1 = 1;
var prueba2 = ("hola");
var prueba3 = [1,2,3,4]
console.log(array.isArray(prueba1));
console.log(array.isArray(prueba2));
console.log(array.isArray(prueba3));

// FROM : forma array con las cadenas
var prueba1 = 1;
var prueba2 = ("hola");
console.log(array.from(prueba2));

// lenght
// toUpperCase
// toLowerCase
// trim : eliminar espacios delanteros
// charAt
console.log(prueba2.charAt(2)); // devuelve la "l"

// slice
console.log(prueba2.slice(1,3));
*/
// Ejercicio de dos arrays: los productos al 25%. 
// muestra por consola los productos ordenador con sus precios: Las fresas valen 3€, los platanos valen 2€..
// Ademas queremos saber si un cliente se llevase 1k de cada cosa, a cuanto nos saldria
// hay que mostrar si hay un precio mas alto que 4€ y  mas bajo que 2€. decir los resultados
// se acaban los platanos asi que se elimina el producto y el precio. 
// Se incluyen las galletas a 5,5€ y el zumo a 4€

// EXTRA: Juntar los dos arrays cada producto con su precio -> ["fresas :" 3]

var productos = ["fresas","platanos","peras","manzanas"]
var precios = [1.5,2,0.75,3]

precios[0]=3;
precios[1]=2;
precios[2]=1.5;
precios[3]=0.75;
console.log(precios); // precios[3 , 2 , 1.5 , 0.75];

for (var i=0;i<productos.length;i++){
    var contador;
    contador = productos[i]+" valen "+precios[i];
    console.log(contador);
}
//----------------(25 %) : 0.25€  -----------------

for (var i=0;i<precios.length;i++){
    var contador2;
    var oferta=0;
    oferta+=(precios[i]*0.25);
    contador2 = "el kilo de "+productos[i]+" sale a "+oferta;
    console.log(contador2);

    // var resultado=prueba.reduce((Acumulator,current)=> Accumulator+curret)

    // precios.map(element=> element-(element.0,25))

}
// -------------------------------------------------

var precioMasAltoQue4 = false;
var precioMasBajoQue2 = false;
var productoResultado = "";

for (var i = 0; i < precios.length; i++) {
if (precios[i] > 4) {
    console.log("true");
} else if (precios[i] < 2) {
    console.log("true");
    productoResultado = productos[i];
}
}


// -------------------------------------------

var indicePlatanos = productos.indexOf("platanos");
if (indicePlatanos !== -1) {
    productos.splice(indicePlatanos, 1);
    precios.splice(indicePlatanos, 1);   
}

console.log(productos); 
console.log(precios);   

// --------------------------------------------

var NuevosPrecios= precios.unshift(5.5);
var NuevosProductos= productos.unshift("galletas");

// resultado:  NuevosProductos = ["galletas","fresas","platanos","peras","manzanas"] || Nuevosprecios = [5.5,2,1.5,3,0.75]

// ------------EXTRA --------------

var NuevosProductos = ["galletas", "fresas", "platanos", "peras", "manzanas"];
var NuevosPrecios = [5.5, 2, 1.5, 3, 0.75];

var productosConPrecios = NuevosProductos.map(function (producto, i) {
    
    return producto + ": " + NuevosPrecios[i];
});

console.log(productosConPrecios);
