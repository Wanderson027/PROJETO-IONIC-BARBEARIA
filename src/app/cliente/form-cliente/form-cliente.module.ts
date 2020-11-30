import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { FormClientePage } from './form-cliente.page';
import { FormClientePageRoutingModule } from './form-cliente-routing.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormClientePageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [FormClientePage]
})
export class FormClienteModule {}
