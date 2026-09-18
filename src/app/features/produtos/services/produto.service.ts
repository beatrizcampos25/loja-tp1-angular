import { inject, Injectable } from '@angular/core';
import { LoggerService } from '../../../core/services/logger/logger.service';
import { Produto, ProdutoMapper } from '../../../model/produto';
import { catchError, delay, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  private logger = inject(LoggerService);
  private http = inject(HttpClient);

  private apiUrl = 'https://fakestoreapi.com/products';

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
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(lista => lista.map(prod => ProdutoMapper.fromJson(prod))),
      catchError(erro => {
        this.logger.error("[PRODUTO SERVICE]- Erro ao listar produto");
        return of([]);
    })
  )
  }

  getById(id:number): Observable<Produto | undefined>{
    return of(this.listaMock.find(p=>p.id ==id)).pipe(delay(500));
  }
}
