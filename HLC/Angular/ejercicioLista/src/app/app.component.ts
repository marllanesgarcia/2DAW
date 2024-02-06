import { Component } from '@angular/core';
import { Usuario } from './usuario.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Listado de Usuarios';
  datoNombre:string="";
  datoApellido:string="";
  datoEdad:number=0;

  anadirUsuario(){
    let miUsuario = new Usuario (this.datoNombre, this.datoApellido, this.datoEdad)
    this.usuarios.push(miUsuario);
  }

  usuarios : Usuario[] = [
    new Usuario ("Merca", "Cona", 39),
    new Usuario ("Rosa", "Melano", 17),
    new Usuario ("Mela", "Metodo", 23),
  ]
}
