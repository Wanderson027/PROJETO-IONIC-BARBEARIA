import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfessoresPageRoutingModule } from './professores-routing.module';

import { ProfessoresPage } from './professores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfessoresPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ProfessoresPage]
})
export class ProfessoresPageModule {}
