import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteFormPage } from './cliente-form.page';

const routes: Routes = [
  {
    path: '',
    component: ClienteFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteFormPageRoutingModule {}
