import { Component } from '@angular/core';
import { Tarea } from './tarea.component';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {

  anadirTarea(){
    let miTarea = new Tarea (this.tarea, this.checkbox)
    this.tareas.push(miTarea);
  }

  tareas : Tarea[] = [
  ]

  
  tarea:string="";
  checkbox:boolean=false;

}
