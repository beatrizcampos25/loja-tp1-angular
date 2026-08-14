import { Component, model } from '@angular/core';

@Component({
  selector: 'app-qunatidade-controle',
  imports: [],
  templateUrl: './qunatidade-controle.html',
  styleUrl: './qunatidade-controle.css',
})
export class QunatidadeControle {
  contador = model<number>(1);

  decrementar(){
    this.contador.set(Math.max(1, this.contador()-1));
  }

  incrementar(){
    this.contador.update(v=>v+1)
  }
}
