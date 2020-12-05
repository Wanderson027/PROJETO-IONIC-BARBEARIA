import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.page.html',
  styleUrls: ['./funcionario.page.scss'],
})
export class FuncionarioPage implements OnInit {

  url_api = environment.apiUrl;
  funcionarioList;
  renderUpdate : Boolean;
  form : FormGroup

  constructor(private http: HttpClient,
    private formBuilder: FormBuilder,
    private rota: Router) { }

  ngOnInit() {
    this.renderUpdate = false;
    this.listarAll();
    this.setForm();
  }

  listarAll(): any{
    return this.http.get(this.url_api + '/funcionarios').subscribe(
      data => {
        this.funcionarioList = data;
      }
    )
  }

  deletar(funcionario){
    const id = funcionario.id;
    console.log("id", id)
    this.http.delete(this.url_api + `/funcionario/${id}`).subscribe(res=>{
      alert("deletado com sucesso")
      this.listarAll();
    })
  }

  atualizarObjeto(){
    this.http.put(this.url_api +'/funcionario', this.form.getRawValue()).subscribe(res=>{
      this.listarAll();
      this.ngOnInit();
      alert("Atualizado com sucesso")
    })
  }

  setForm(){
    this.form = this.formBuilder.group({
      id: [null],
      nome: [null,[Validators.required]],
      cargo: [null, [Validators.required]],
      telefone: [null, [Validators.required]]
    })
  }

  
  atualizar(funcionario){
    const controls = this.form.controls;
    controls.id.setValue(funcionario.id);
    controls.nome.setValue(funcionario.nome);
    controls.cargo.setValue(funcionario.cargo);
    controls.telefone.setValue(funcionario.telefone);
    this.renderUpdate = true;
  }

  onSubmit() : void{
    console.log(this.form.getRawValue());
    this.http.post(this.url_api +'/funcionario', this.form.getRawValue()).subscribe(
      res => {
        alert("Salvo com sucesso")
        this.ngOnInit();
      }
    )
  }

}
