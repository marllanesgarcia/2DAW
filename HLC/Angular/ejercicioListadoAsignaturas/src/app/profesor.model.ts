export class Profesor{
    
    nombre:string="";
    apellido:string="";

    constructor(nombre:string, apellido:string){
        this.nombre=nombre;
        this.apellido=apellido;
    }

    //
    imprimirDatos(){
        return ` Profesor = Nombre: ${this.nombre}, Apellido: ${this.apellido}`;
    }

}