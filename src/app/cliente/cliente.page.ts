import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  form : FormGroup

  constructor(private http: HttpClient,
    private formBuilder: FormBuilder,
    private rota: Router) { }

  ngOnInit() {
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
      this.listarCliente();
    })
  }

  atualizar(cliente){
    this.http.put(this.url_api +'/cliente', cliente).subscribe(res=>{
      console.log("atualizado")
    })
  }

  setForm(){
    this.form = this.formBuilder.group({
      nome: [null],
      cpf: [null],
      telefone: [null]
    })
  }

  onSubmit() : void{
    console.log(this.form.getRawValue());
    this.http.post(this.url_api +'/cliente', this.form.getRawValue()).subscribe(
      res => {
        this.ngOnInit();
        this.rota.navigateByUrl('/cliente');
      }
    )
  }
}
