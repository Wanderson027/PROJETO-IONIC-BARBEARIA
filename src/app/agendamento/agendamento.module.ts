import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendamentoPageRoutingModule } from './agendamento-routing.module';

import { AgendamentoPage } from './agendamento.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendamentoPageRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [AgendamentoPage]
})
export class AgendamentoPageModule {}
