import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfessoresPage } from './professores.page';

const routes: Routes = [
  {
    path: '',
    component: ProfessoresPage
  },
  {
    path: 'form-professores',
    loadChildren: () => import('./form-professores/form-professores.module').then( m => m.FormProfessoresPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfessoresPageRoutingModule {}
