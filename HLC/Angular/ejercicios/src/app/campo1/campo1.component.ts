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

  variable:String="";
  resultado2=0;
  sumar(numero1:any,numero2:any){
    return this.resultado2=Number(numero1.value)+Number(numero2.value);
    // el number sirve para que te coja el puto numero del value, siempre hay que usar Number que PETA
  }

  restar(numero1:any, numero2:any){
    return this.resultado2=Number(numero1.value)-Number(numero2.value);
  }
  dividir(numero1:any, numero2:any){
    return this.resultado2=Number(numero1.value)/Number(numero2.value);
  }
  multiplicar(numero1:any, numero2:any){
    return this.resultado2=Number(numero1.value)*Number(numero2.value);
  }
}
