import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteFormPage } from '../cliente-form/cliente-form.page';
import { ClientePage } from './cliente.page';

const routes: Routes = [
  {
    path: '',
    component: ClientePage
  },
  {
    path: 'form',
    component: ClienteFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  
exports: [RouterModule],
})
export class ClientePageRoutingModule {}
