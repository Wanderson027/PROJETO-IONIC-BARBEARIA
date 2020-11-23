import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CriarcontaPage } from './criarconta.page';

const routes: Routes = [
  {
    path: '',
    component: CriarcontaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CriarcontaPageRoutingModule {}
