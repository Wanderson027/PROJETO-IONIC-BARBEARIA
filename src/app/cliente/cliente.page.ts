import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { isNull } from '@angular/compiler/src/output/output_ast';
import { Router } from '@angular/router';




@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.page.html',
  styleUrls: ['./cliente.page.scss'],
})
export class ClientePage implements OnInit {

  loginForm: FormGroup
  url_api = environment.apiUrl;
  clienteList;
  renderUpdate : Boolean;
  form : FormGroup

  constructor(private http: HttpClient,
    private formBuilder: FormBuilder,
    private rota: Router) { }

  ngOnInit() {
    this.renderUpdate = false;
    this.listarCliente();
    this.setForm();
  }

  listarCliente(): any{
    return this.http.get(this.url_api + '/clientes').subscribe(
      data => {
        this.clienteList = data;
      }
    )
  }

  deletar(cliente){
    const id = cliente.id;
    console.log("id", id)
    this.http.delete(this.url_api + `/cliente/${id}`).subscribe(res=>{
      alert("deletado com sucesso")
      this.listarCliente();
    })
  }

  atualizarObjeto(){
    this.http.put(this.url_api +'/cliente', this.form.getRawValue()).subscribe(res=>{
      this.listarCliente();
      this.ngOnInit();
      alert("Atualizado com sucesso")
    })
  }

  setForm(){
    this.form = this.formBuilder.group({
      id: [null],
      nome: [null,[Validators.required]],
      cpf: [null, [Validators.required]],
      telefone: [null, [Validators.required]]
    })
  }

  
  atualizar(cliente){
    const controls = this.form.controls;
    controls.id.setValue(cliente.id);
    controls.nome.setValue(cliente.nome);
    controls.cpf.setValue(cliente.cpf);
    controls.telefone.setValue(cliente.telefone);
    this.renderUpdate = true;
  }

  onSubmit() : void{
    console.log(this.form.getRawValue());
    this.http.post(this.url_api +'/cliente', this.form.getRawValue()).subscribe(
      res => {
        alert("Salvo com sucesso")
        this.ngOnInit();
      }
    )
  }
}
