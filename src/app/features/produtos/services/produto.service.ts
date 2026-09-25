import { inject, Injectable } from '@angular/core';
import { LoggerService } from '../../../core/services/logger/logger.service';
import { Produto, ProdutoMapper } from '../../../model/produto';
import { catchError, delay, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';


@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  private logger = inject(LoggerService);
  private http = inject(HttpClient);

  private apiUrl = 'https://fakestoreapi.com/products';

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
    this.logger.info("[PRODUTO SERVICE] - Buscando produto id: " + id);
    return this.http.get<any>(`${this.apiUrl}/${id}`).pipe(map(json => json ? ProdutoMapper.fromJson(json) : undefined),
    catchError(erro => {
      this.logger.error("[PRODUTO SERVICE]- Erro ao buscar produto id: " + id, erro);
      return of(undefined);
    })
    );
  }

  criar(produto:Produto): Observable<any>{

    let body={
      title:produto.nome,
      price: produto.preco,
      description:produto.descricao,
      image: produto.imageUrl,
      category: produto.categoria
    }
    return this.http.post(this.apiUrl,body);
  }

}
