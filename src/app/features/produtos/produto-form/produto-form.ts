import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ProdutoService } from '../services/produto.service';
import { Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { Produto } from '../../../model/produto';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-produto-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './produto-form.html',
  styleUrl: './produto-form.css',
})
export class ProdutoForm {
  private produtoService = inject(ProdutoService);
  router = inject(Router);

  enviando = signal(false);
  mensagem = signal('');
  novaCategoria = signal('');

  private produtos = toSignal(this.produtoService.listar(),{initialValue:[]});

  categorias =  computed(()=> {
    const lista = this.produtos().map(p=>p.categoria).filter(Boolean)
    const unicas = Array.from(new Set(lista));
    return [...unicas, 'Outra'];
  });

  categoriaSelecionada = signal('');

  mostrarNovaCategoria = computed(()=> this.categoriaSelecionada()== 'Outra');

  novoProduto: Produto ={
    id:0,
    nome: '',
    preco: 0,
    descricao:'',
    imageUrl: '',
    categoria:'',
  }

  onSubmit(form:NgForm){
    if(form.invalid){
      this.mensagem.set("Preencha todos os campos");
      return;
    }

    this.novoProduto.categoria= this.categoriaSelecionada()== 'Outra' ? this.novaCategoria() : this.categoriaSelecionada();

    this.enviando.set(true);
    this.mensagem.set("Enviando produto...");

    this.produtoService.criar(this.novoProduto).pipe(finalize(()=> this.enviando.set(false))).subscribe(
      {
        next: (resp)=>{
          this.mensagem.set("Prduto cadastrado com sucesso");
          form.resetForm();
          setTimeout(()=> this.router.navigateByUrl('/produtos'), 1200);
        },
        error: (err)=>{
          this.mensagem.set("Erro ao criar produto:"+err);
        }
      }
    )
  }
}
