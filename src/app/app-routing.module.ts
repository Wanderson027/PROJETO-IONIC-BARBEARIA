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
    path: 'alunos',
    loadChildren: () => import('./alunos/alunos.module').then( m => m.AlunosPageModule)
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
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
