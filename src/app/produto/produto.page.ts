import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.page.html',
  styleUrls: ['./produto.page.scss'],
})
export class ProdutoPage implements OnInit {

  url_api = environment.apiUrl;
  produtoList;
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
    return this.http.get(this.url_api + '/produtos').subscribe(
      data => {
        this.produtoList = data;
      }
    )
  }

  deletar(produto){
    const id = produto.id;
    console.log("id", id)
    this.http.delete(this.url_api + `/produto/${id}`).subscribe(res=>{
      alert("deletado com sucesso")
      this.listarAll();
    })
  }

  atualizarObjeto(){
    this.http.put(this.url_api +'/produto', this.form.getRawValue()).subscribe(res=>{
      this.listarAll();
      this.ngOnInit();
      alert("Atualizado com sucesso")
    })
  }

  setForm(){
    this.form = this.formBuilder.group({
      id: [null],
      nome: [null,[Validators.required]],
      tipo: [null, [Validators.required]],
      quantidade: [null, [Validators.required]]
    })
  }

  
  atualizar(produto){
    const controls = this.form.controls;
    controls.id.setValue(produto.id);
    controls.nome.setValue(produto.nome);
    controls.tipo.setValue(produto.tipo);
    controls.quantidade.setValue(produto.quantidade);
    this.renderUpdate = true;
  }

  onSubmit() : void{
    console.log(this.form.getRawValue());
    this.http.post(this.url_api +'/produto', this.form.getRawValue()).subscribe(
      res => {
        alert("Salvo com sucesso")
        this.ngOnInit();
      }
    )
  }
}
