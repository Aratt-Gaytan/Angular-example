import { Component } from '@angular/core';

@Component({
  selector: 'app-palindromos',
  templateUrl: './palindromos.component.html',
  styleUrls: ['./palindromos.component.css']
})
export class PalindromosComponent {
  palabra:string = '';
  palabraR:string ='';
  palabraA:Array<string> =[];
  palabraV:Array<string> =[];
  pal:string = '';


  constructor(){
    this.palabra = '';
    this.palabraR ='';
    this.palabraA = [];
    this.palabraV = [];
    this.pal = '';
  }

  vacia():void{
    this.palabra = '';
    this.palabraR ='';
    this.palabraA = [];
    this.palabraV = [];
  }
  voltear():string {
    this.palabraA = this.palabra.split('');
    console.log(this.palabraA)

    for(let i = this.palabra.length; i > -1  ; i--){
      this.palabraV.push(this.palabraA[i]);
    }
    return this.palabraV.join('');
   }

  palindromo():void{


    this.pal = this.palabra;
    this.palabra = this.palabra.toLocaleLowerCase();
    this.palabra = this.palabra.replace(/\s/g, '');
    this.palabraR = this.voltear()
    if(this.palabra == this.palabraR){
      alert(this.pal +' es palindromo');
    }else{
      alert(this.pal +' no es palindromo');
    }
    this.vacia()

  }
}

