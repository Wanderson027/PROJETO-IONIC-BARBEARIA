import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlunosPage } from './alunos.page';
import { FormAlunoComponent } from './form-aluno/form-aluno.component';

const routes: Routes = [
  {
    path: '',
    component: AlunosPage
  },
  {
    path: 'form',
    component: FormAlunoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  
exports: [RouterModule],
})
export class AlunosPageRoutingModule {}
