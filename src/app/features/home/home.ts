import { Component } from '@angular/core';
import { ListaProdutos } from "../produto/lista-produtos/lista-produtos";

@Component({
  selector: 'app-home',
  imports: [ListaProdutos],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
