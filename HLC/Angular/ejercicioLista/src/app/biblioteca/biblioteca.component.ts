import { Component , Input } from '@angular/core';
import { Usuario } from '../usuario.model';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.component.html',
  styleUrl: './biblioteca.component.css'
})
export class BibliotecaComponent {
@Input() usuarioFor: Usuario;
@Input() indice: number;
}
