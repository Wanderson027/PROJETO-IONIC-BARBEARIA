import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { ClientePageRoutingModule } from './cliente-routing.module';

import {ClientePage } from './cliente.page';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ClientePageRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [ClientePage]
})
export class ClientePageModule {}
