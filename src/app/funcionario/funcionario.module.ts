import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FuncionarioPageRoutingModule } from './funcionario-routing.module';

import { FuncionarioPage } from './funcionario.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FuncionarioPageRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [FuncionarioPage]
})
export class FuncionarioPageModule {}
