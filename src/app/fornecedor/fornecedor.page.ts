import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-fornecedor',
  templateUrl: './fornecedor.page.html',
  styleUrls: ['./fornecedor.page.scss'],
})
export class FornecedorPage implements OnInit {
  url_api = environment.apiUrl;
  fornecedorList;
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
    return this.http.get(this.url_api + '/fornecedors').subscribe(
      data => {
        this.fornecedorList = data;
      }
    )
  }

  deletar(fornecedor){
    const id = fornecedor.id;
    console.log("id", id)
    this.http.delete(this.url_api + `/fornecedor/${id}`).subscribe(res=>{
      alert("deletado com sucesso")
      this.listarAll();
    })
  }

  atualizarObjeto(){
    this.http.put(this.url_api +'/fornecedor', this.form.getRawValue()).subscribe(res=>{
      this.listarAll();
      this.ngOnInit();
      alert("Atualizado com sucesso")
    })
  }

  setForm(){
    this.form = this.formBuilder.group({
      id: [null],
      razaoSocial: [null,[Validators.required]],
      cnpj: [null, [Validators.required]],
      telefone: [null, [Validators.required]]
    })
  }

  
  atualizar(fornecedor){
    const controls = this.form.controls;
    controls.id.setValue(fornecedor.id);
    controls.razaoSocial.setValue(fornecedor.razaoSocial);
    controls.cnpj.setValue(fornecedor.cnpj);
    controls.telefone.setValue(fornecedor.telefone);
    this.renderUpdate = true;
  }

  onSubmit() : void{
    console.log(this.form.getRawValue());
    this.http.post(this.url_api +'/fornecedor', this.form.getRawValue()).subscribe(
      res => {
        alert("Salvo com sucesso")
        this.ngOnInit();
      }
    )
  }

}
