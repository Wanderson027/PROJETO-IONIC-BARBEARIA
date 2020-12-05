import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-corte',
  templateUrl: './corte.page.html',
  styleUrls: ['./corte.page.scss'],
})
export class CortePage implements OnInit {


  url_api = environment.apiUrl;
  corteList;
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
    return this.http.get(this.url_api + '/cortes').subscribe(
      data => {
        this.corteList = data;
      }
    )
  }

  deletar(corte){
    const id = corte.id;
    console.log("id", id)
    this.http.delete(this.url_api + `/corte/${id}`).subscribe(res=>{
      alert("deletado com sucesso")
      this.listarAll();
    })
  }

  atualizarObjeto(){
    this.http.put(this.url_api +'/corte', this.form.getRawValue()).subscribe(res=>{
      this.listarAll();
      this.ngOnInit();
      alert("Atualizado com sucesso")
    })
  }

  setForm(){
    this.form = this.formBuilder.group({
      id: [null],
      tipo: [null,[Validators.required]],
      valor: [null, [Validators.required]],
      comissao: [null, [Validators.required]]
    })
  }

  
  atualizar(corte){
    const controls = this.form.controls;
    controls.id.setValue(corte.id);
    controls.tipo.setValue(corte.tipo);
    controls.valor.setValue(corte.valor);
    controls.comissao.setValue(corte.comissao);
    this.renderUpdate = true;
  }

  onSubmit() : void{
    console.log(this.form.getRawValue());
    this.http.post(this.url_api +'/corte', this.form.getRawValue()).subscribe(
      res => {
        alert("Salvo com sucesso")
        this.ngOnInit();
      }
    )
  }
}
