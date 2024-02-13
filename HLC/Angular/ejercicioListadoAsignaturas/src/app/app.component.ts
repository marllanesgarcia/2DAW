import { Component } from '@angular/core';
import { Profesor } from './profesor.model';
import { Asignatura } from './asignatura.model';
import { ListadoComponent } from './listado/listado.component';

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

  profesores : Profesor []=[
  new Profesor ("Rodolfo" , "Gutierrez"),
  new Profesor ("Carlitoh" , "Gutierrez"),
  new Profesor ("Miguelitoh" , "Gutierrez")
  ]

  asignaturas : Asignatura[] = [
    new Asignatura ("Base de Datos", 3, this.profesores[0]),
    new Asignatura ("Lenguaje de Marcas", 80, this.profesores[1]),
    new Asignatura ("Programación", 80, this.profesores[2])
  ]


}
