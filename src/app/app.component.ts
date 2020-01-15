import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'CALCULADORA';
  operandoA: number;
  operandoB: number;
  resultadoSuma: number;
  resultadoResta: number;
  resulatadoMultiplicar: number;
  resultadoDividir: number;

  onSumar(): void {
    this.resultadoSuma = this.operandoA + this.operandoB;
  }

  onRestar(): void {
    this.resultadoResta = this.operandoA - this.operandoB;
  }

  onMultiplicar() {
    this.resulatadoMultiplicar = this.operandoA * this.operandoB;
  }

  onDividir() {
    this.resultadoDividir = this.operandoA / this.operandoB;
  }
}
