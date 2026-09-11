import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from '../services/produto.service';
import { Produto } from '../../../model/produto';
import { DescontoPipe } from '../../../shared/pipes/desconto-pipe';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-produto-detalhe',
  imports: [DescontoPipe, CurrencyPipe],
  templateUrl: './produto-detalhe.html',
  styleUrl: './produto-detalhe.css',
})
export class ProdutoDetalhe {

  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private produtoService = inject(ProdutoService);

  carregando = signal(true);
  produto = signal<Produto | undefined>(undefined);

  constructor(){
    this.route.paramMap.subscribe(pm=>{
      const id= pm.get('id') ? Number(pm.get('id')) : NaN;
      if(isNaN(id)){
        this.produto.set(undefined);
        this.carregando.set(false);
        return;
      }

      this.carregando.set(true);
      this.produtoService.getById(id).subscribe(p=>{
        this.produto.set(p);
        this.carregando.set(false);
      });
    });
  };

  voltar(){
    //this.router.navigateByUrl('/produto');
    this.router.navigate(['/produto']);
  }
}
