import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './core/header/header';
import { Footer } from './core/footer/footer';
import { Banner } from './core/banner/banner';
import { QunatidadeControle } from "./shared/qunatidade-controle/qunatidade-controle";
import { Produto } from './model/produto';
import { CardProduto } from "./features/produto/card-produto/card-produto";
import { ListaProdutos } from "./features/produto/lista-produtos/lista-produtos";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Banner, QunatidadeControle, CardProduto, ListaProdutos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('loja-tp1');

  sobre?: string;

  receberSobre(msg: string):void{
    this.sobre=msg;
  }
}
