import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FornecedorPage } from './fornecedor.page';

const routes: Routes = [
  {
    path: '',
    component: FornecedorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FornecedorPageRoutingModule {}
