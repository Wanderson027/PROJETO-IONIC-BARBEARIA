import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientePage } from './cliente.page';
import { FormClienteComponent } from './form-cliente/form-cliente.component';

const routes: Routes = [
  {
    path: '',
    component: ClientePage
  },
  {
    path: 'form',
    component: FormClienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  
exports: [RouterModule],
})
export class ClientePageRoutingModule {}
