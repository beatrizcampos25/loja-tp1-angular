import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { ListaProdutos } from './features/produto/lista-produtos/lista-produtos';
import { ProdutoDetalhe } from './features/produtos/produto-detalhe/produto-detalhe';
import { Sobre } from './features/sobre/sobre';
import { ProdutoForm } from './features/produtos/produto-form/produto-form';

export const routes: Routes = [
    {path: '', component:Home},
    {path: 'produtos', component:ListaProdutos},
    {path: 'produtos/novo', component:ProdutoForm},
    {path: 'produtos/:id', component:ProdutoDetalhe},
    {path: 'sobre', component:Sobre},
    {path: '**', redirectTo:''},
];
