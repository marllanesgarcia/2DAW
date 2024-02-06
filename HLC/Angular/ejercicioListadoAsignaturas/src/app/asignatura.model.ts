import { Profesor } from './profesor.model';

export class Asignatura{

    nombre:string="";
    horas:number=0;
    profesor:Profesor=new Profesor("","");

    constructor(nombre:string, horas:number, profesor:Profesor){
        this.nombre=nombre;
        this.horas=horas;
        this.profesor=profesor;
    }


}