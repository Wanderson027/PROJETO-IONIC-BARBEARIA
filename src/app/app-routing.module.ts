import { LoginPage } from './login/login.page';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'login',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'cliente',
    loadChildren: () => import('./cliente/cliente.module').then( m => m.ClientePageModule)
  },
  {
    path: 'turmas',
    loadChildren: () => import('./turmas/turmas.module').then( m => m.TurmasPageModule)
  },
  {
    path: 'painel',
    loadChildren: () => import('./painel/painel.module').then( m => m.PainelPageModule)
  },
  {
    path: 'criarconta',
    loadChildren: () => import('./criarconta/criarconta.module').then( m => m.CriarcontaPageModule)
  },
  {
    path: 'funcionario',
    loadChildren: () => import('./funcionario/funcionario.module').then( m => m.FuncionarioPageModule)
  },  {
    path: 'agendamento',
    loadChildren: () => import('./agendamento/agendamento.module').then( m => m.AgendamentoPageModule)
  },
  {
    path: 'corte',
    loadChildren: () => import('./corte/corte.module').then( m => m.CortePageModule)
  },
  {
    path: 'produto',
    loadChildren: () => import('./produto/produto.module').then( m => m.ProdutoPageModule)
  },
  {
    path: 'fornecedor',
    loadChildren: () => import('./fornecedor/fornecedor.module').then( m => m.FornecedorPageModule)
  },
  {
    path: 'pedido',
    loadChildren: () => import('./pedido/pedido.module').then( m => m.PedidoPageModule)
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
