import { Component } from '@angular/core';

@Component({
  selector: 'app-potencia',
  templateUrl: './potencia.component.html',
  styleUrls: ['./potencia.component.css']
})
export class PotenciaComponent {
numero: number = 0 ;
potencia:number = 0;
valor:number = 0;

constructor(){
  this.numero ;
  this.potencia ;
  this.valor ;
}
vaciar():void{
  this.numero = 0 ;
  this.potencia = 0 ;
  this.valor = 0 ;
}
potenciar():void{
  this.valor = this.numero ** this.potencia;
  alert('la potencia de ' + this.numero + ' elevado a la ' + this.potencia + ' es: ' + this.valor);
  this.vaciar()

}
}
