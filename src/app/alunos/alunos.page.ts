import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';




@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.page.html',
  styleUrls: ['./alunos.page.scss'],
})
export class AlunosPage implements OnInit {

  loginForm: FormGroup
  private API_WAN =  "http://unidesc-api.herokuapp.com/v1/api/alunos"
  private ALUNO_DA_API;

  constructor(private http: HttpClient ) { }

  ngOnInit() {
    this.listarAlunos();
  }

  listarAlunos(): any{
    return this.http.get(this.API_WAN).subscribe(
      data => {
        this.ALUNO_DA_API = data["alunos"];
        console.log(this.ALUNO_DA_API )
      }
    )
     
  }

}
