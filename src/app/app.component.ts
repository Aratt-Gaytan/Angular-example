import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pcalculadora';
  num1:string = '';
  num2:string = '';
  op:string = '';
  termino:boolean = false;

  constructor(){
    this.num1 = '';
    this.num2 = '';
    this.op = '';

  }

  click(_num: string):void{
    if(this.termino){
      this.termino = !this.termino;
      this.num1 = '';
    }
    this.num1 += _num;
  }


  calcula(_op: string, _num1: string, _num2: string): string {
    var num1Parsed = parseFloat(_num1);
    var num2Parsed = parseFloat(_num2);

    if (isNaN(num1Parsed) ) {
      num1Parsed = 0.0;
    }
    if (isNaN(num2Parsed) ) {
      num2Parsed = 0.0;
    }

    switch (_op) {
      case "+":
        this.clear();
        return String(num2Parsed + num1Parsed);
      case "-":
        this.clear();
        return String(num2Parsed - num1Parsed);
      case "*":
        this.clear();
        return String(num2Parsed * num1Parsed);
      case "/":
        if (num1Parsed === 0) {
          this.clear();
          return "/0";
        }
        this.clear();
        return String(num2Parsed / num1Parsed);
      default:
        this.termino = true;
        return "ERROR";
    }
  }


  ejecuta(_accion:string):void{

    switch(_accion){
      case '+':
        this.num2 = this.num1;
        this.num1 = '';
        this.op = '+';
        break;
      case '-':
        this.num2 = this.num1;
        this.num1 = '';
        this.op = '-';
        break;
      case '*':
        this.num2 = this.num1;
        this.num1 = '';
        this.op = '*';
        break;
      case '/':
        this.num2 = this.num1;
        this.num1 = '';
        this.op = '/';
        break;
      case 'AC':
        this.num1 = '';
        break;
      case 'back':
        this.num1 = this.num1.slice(0,-1);
        break;
      case '=':
        this.num1 = this.calcula(this.op, this.num1, this.num2);
    }
  }

  clear():void {
    this.num1 = '';
    this.num2 = '';
    this.op = '';
    this.termino = true;
  }


}

