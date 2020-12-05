import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FornecedorPageRoutingModule } from './fornecedor-routing.module';

import { FornecedorPage } from './fornecedor.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FornecedorPageRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [FornecedorPage]
})
export class FornecedorPageModule {}
