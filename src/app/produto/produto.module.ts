import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdutoPageRoutingModule } from './produto-routing.module';

import { ProdutoPage } from './produto.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdutoPageRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [ProdutoPage]
})
export class ProdutoPageModule {}
