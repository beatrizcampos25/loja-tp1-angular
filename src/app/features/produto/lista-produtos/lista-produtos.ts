import { Component } from '@angular/core';
import { Produto } from '../../../model/produto';
import { CardProduto } from "../card-produto/card-produto";

@Component({
  selector: 'app-lista-produtos',
  imports: [CardProduto],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
export class ListaProdutos {
  produtos = <Produto[]>[
    {
      id:1,
      nome: 'Mounjaro',
      preco: 1699.99,
      descricao:'Canetas caras demais. Deus me livre',
      imageUrl: 'images/mon.png',
      promo: false
    },

    {
      id:2,
      nome: 'Ozenpic',
      preco: 1200.99,
      descricao:'Continuam caras demais. Deus me livre',
      imageUrl: 'images/ozempic.png',
      promo: false
    },

    {
      id:3,
      nome: 'Mounjaro 2',
      preco: 2500.99,
      descricao:'Canetas caras demais demais. Deus me livre',
      imageUrl: 'images/mon.png',
      promo: true
    },
    
  ];

  onViewProduct(id:number){
    alert('Visualizando produto id:'+id);
  }

  onAddProduct(produto: {id:number, qtd:number}){
    alert('Adicionando produto'+produto.id+' | quantidade:' +produto.qtd)
  }
}
