import { Component } from '@angular/core';
import internal from 'node:stream';

@Component({
  selector: 'app-campo2',
  templateUrl: './campo2.component.html',
  styleUrl: './campo2.component.css'
})
export class Campo2Component {
    pro=0;
    colocar(dato:any){
      return this.pro=Number(dato);
    }
  
    multiplicarPro(){
  
    }
    restarPro(){
  
    }
    sumarPro(){
  
    }
    dividirPro(){
      
    }

}