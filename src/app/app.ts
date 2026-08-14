import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './core/header/header';
import { Footer } from './core/footer/footer';
import { Banner } from './core/banner/banner';
import { QunatidadeControle } from "./shared/qunatidade-controle/qunatidade-controle";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Banner, QunatidadeControle],
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
