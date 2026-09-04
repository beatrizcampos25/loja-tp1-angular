import { inject, Injectable } from '@angular/core';
import { LoggerService } from '../../../core/services/logger/logger.service';
import { Produto } from '../../../model/produto';
import { delay, Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  private logger = inject(LoggerService);

  private readonly listaMock = <Produto[]>[
    {
      id:1,
      nome: 'Mounjaro',
      preco: 1699.99,
      descricao:'Canetas caras demais. Deus me livre',
      imageUrl: 'images/mon.png',
      promo: false,
      estado: 'novo'
    },

    {
      id:2,
      nome: 'Ozenpic',
      preco: 1200.99,
      descricao:'Continuam caras demais. Deus me livre',
      imageUrl: 'images/ozempic.png',
      promo: false,
      estado: 'usado'
    },

    {
      id:3,
      nome: 'Mounjaro 2',
      preco: 2500.99,
      descricao:'Canetas caras demais demais. Deus me livre',
      imageUrl: 'images/mon.png',
      promo: true,
      estado:  'esgotado'
    },
    
  ];

  listar(): Observable<Produto[]>{
    this.logger.info("[PRODUTO SERVICE] - Retorndo listas de produtos");
    return of(this.listaMock).pipe(
      delay(250)
    )
  }
}
