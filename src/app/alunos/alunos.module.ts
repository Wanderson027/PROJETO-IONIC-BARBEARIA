import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlunosPageRoutingModule } from './alunos-routing.module';

import { AlunosPage } from './alunos.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlunosPageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [AlunosPage]
})
export class AlunosPageModule {}
