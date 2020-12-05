import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.page.html',
  styleUrls: ['./pedido.page.scss'],
})
export class PedidoPage implements OnInit {

  url_api = environment.apiUrl;
  pedidoList;
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
    return this.http.get(this.url_api + '/pedidos').subscribe(
      data => {
        this.pedidoList = data;
      }
    )
  }

  deletar(pedido){
    const id = pedido.id;
    console.log("id", id)
    this.http.delete(this.url_api + `/pedido/${id}`).subscribe(res=>{
      alert("deletado com sucesso")
      this.listarAll();
    })
  }

  atualizarObjeto(){
    this.http.put(this.url_api +'/pedido', this.form.getRawValue()).subscribe(res=>{
      this.listarAll();
      this.ngOnInit();
      alert("Atualizado com sucesso")
    })
  }

  setForm(){
    this.form = this.formBuilder.group({
      id: [null],
      nome: [null,[Validators.required]],
      valor: [null, [Validators.required]],
      quantidade: [null, [Validators.required]]
    })
  }

  
  atualizar(pedido){
    const controls = this.form.controls;
    controls.id.setValue(pedido.id);
    controls.nome.setValue(pedido.nome);
    controls.valor.setValue(pedido.valor);
    controls.quantidade.setValue(pedido.quantidade);
    this.renderUpdate = true;
  }

  onSubmit() : void{
    console.log(this.form.getRawValue());
    this.http.post(this.url_api +'/pedido', this.form.getRawValue()).subscribe(
      res => {
        alert("Salvo com sucesso")
        this.ngOnInit();
      }
    )
  }

}
