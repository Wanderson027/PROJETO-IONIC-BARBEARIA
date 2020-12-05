import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClienteFormPageRoutingModule } from './cliente-form-routing.module';

import { ClienteFormPage } from './cliente-form.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClienteFormPageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [ClienteFormPage]
})
export class ClienteFormPageModule {}
