import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientePageRoutingModule } from './cliente-routing.module';

import {ClientePage } from './cliente.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
   ClientePageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [ClientePage]
})
export class ClientePageModule {}
