import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormProfessoresPage } from './form-professores.page';

const routes: Routes = [
  {
    path: '',
    component: FormProfessoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormProfessoresPageRoutingModule {}
