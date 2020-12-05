import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.page.html',
  styleUrls: ['./agendamento.page.scss'],
})
export class AgendamentoPage implements OnInit {

  url_api = environment.apiUrl;
  agendamentoList;
  renderUpdate : Boolean;
  form : FormGroup

  constructor(private http: HttpClient,
    private formBuilder: FormBuilder,
    private rota: Router) { }

  ngOnInit() {
    this.renderUpdate = false;
    this.listarAgendamento();
    this.setForm();
  }

  listarAgendamento(): any{
    return this.http.get(this.url_api + '/agendamentos').subscribe(
      data => {
        this.agendamentoList = data;
      }
    )
  }

  deletar(agendamento){
    const id = agendamento.id;
    console.log("id", id)
    this.http.delete(this.url_api + `/agendamento/${id}`).subscribe(res=>{
      alert("deletado com sucesso")
      this.listarAgendamento();
    })
  }

  atualizarObjeto(){
    this.http.put(this.url_api +'/agendamento', this.form.getRawValue()).subscribe(res=>{
      this.listarAgendamento();
      this.ngOnInit();
      alert("Atualizado com sucesso")
    })
  }

  setForm(){
    this.form = this.formBuilder.group({
      id: [null],
      nome: [null,[Validators.required]],
      data: [null, [Validators.required]],
      telefone: [null, [Validators.required]]
    })
  }

  
  atualizar(agendamento){
    const controls = this.form.controls;
    controls.id.setValue(agendamento.id);
    controls.nome.setValue(agendamento.nome);
    controls.data.setValue(agendamento.data);
    controls.telefone.setValue(agendamento.telefone);
    this.renderUpdate = true;
  }

  onSubmit() : void{
    console.log(this.form.getRawValue());
    this.http.post(this.url_api +'/agendamento', this.form.getRawValue()).subscribe(
      res => {
        alert("Salvo com sucesso")
        this.ngOnInit();
      }
    )
  }
}
