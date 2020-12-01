import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormProfessoresPageRoutingModule } from './form-professores-routing.module';

import { FormProfessoresPage } from './form-professores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormProfessoresPageRoutingModule
  ],
  declarations: [FormProfessoresPage]
})
export class FormProfessoresPageModule {}
