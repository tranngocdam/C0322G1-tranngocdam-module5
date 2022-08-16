import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() {
  }
  ngOnInit(): void {
  }
  number1 = 0;
  number2 = 0;
  result = 0;
  calculator(operator: string): number {
    switch (operator) {
      case '+':
         return this.result = this.number1 + this.number2;
      case '-':
         return this.result = this.number1 - this.number2;
      case '*':
         return this.result = this.number1 * this.number2;
      case '/':
        if(this.number2==0){
          return this.result=null;
        }
         return this.result = this.number1 / this.number2;
    }
  }
}
