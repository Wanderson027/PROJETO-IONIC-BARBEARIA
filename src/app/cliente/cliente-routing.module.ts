import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientePage } from './cliente.page';
import { FormClientePage } from './form-cliente/form-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: ClientePage
  },
  {
    path: 'form',
    component: FormClientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  
exports: [RouterModule],
})
export class ClientePageRoutingModule {}
