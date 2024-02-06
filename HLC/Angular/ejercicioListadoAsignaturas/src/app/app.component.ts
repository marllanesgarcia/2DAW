import { Component } from '@angular/core';
import { Profesor } from './profesor.model';
import { Asignatura } from './asignatura.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Listado de Asignaturas';
  datoNombre:string="";
  datoHoras:number=0;
  datoProfesor:Profesor=new Profesor("","");

  anadirAsignatura(){
    let miAsignatura = new Asignatura(this.datoNombre, this.datoHoras, this.datoProfesor);
    this.asignaturas.push(miAsignatura);
  }

  profesor1 = new Profesor("Rodolfo" , "Gutierrez");
  profesor2 = new Profesor("Carlitoh" , "Gutierrez");
  profesor3 = new Profesor("Miguelitoh" , "Gutierrez");


  asignaturas : Asignatura[] = [
    new Asignatura ("Base de Datos", 3, this.profesor1),
    new Asignatura ("Lenguaje de Marcas", 80, this.profesor2 ),
    new Asignatura ("Programación", 80, this.profesor3),
  ]


}
