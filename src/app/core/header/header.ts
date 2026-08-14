import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  titulo = input.required<string>();

  textoSobre = output<string>();

  enviarSobre():void{
    this.textoSobre.emit('Técnica de programação 1.\nDesenvolvido por Beatriz');
  }

  exibirMensagem(msg:string):void{
    alert(msg);
  }
}

