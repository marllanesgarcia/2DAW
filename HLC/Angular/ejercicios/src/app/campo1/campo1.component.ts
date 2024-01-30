import { Component } from '@angular/core';
import internal from 'node:stream';

@Component({
  selector: 'app-campo1',
  templateUrl: './campo1.component.html',
  styleUrl: './campo1.component.css'
})
export class Campo1Component {
  resultado=0;
           //event:any
  aumentar(numero:any){
    return this.resultado+=numero;
    //return this.resultado+=parseInt((event.target).value); <-- asi se hace con el value
  }

  disminuir(numero:any){
    return this.resultado-=numero;
  }

  resultado2=0;
  sumar(number1:any, number2:any){
    return this.resultado2=number1+number2;
  }
  restar(number1:any, number2:any){
    return this.resultado2=number1-number2;
  }
  dividir(number1:any, number2:any){
    return this.resultado2=number1/number2;
  }
  multiplicar(number1:any, number2:any){
    return this.resultado2=number1*number2;
  }

}
