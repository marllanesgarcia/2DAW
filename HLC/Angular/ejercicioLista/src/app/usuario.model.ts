export class Usuario{
    nombre:string="";
    apellido:string="";
    edad:number=0;

    constructor(nombre:string, apellido:string, edad:number){
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad;
    }
}