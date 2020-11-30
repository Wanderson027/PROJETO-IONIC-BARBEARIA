import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormClientePage } from './form-cliente.page';


const routes: Routes = [
  {
    path: '',
    component: FormClientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormClientePageRoutingModule {}
