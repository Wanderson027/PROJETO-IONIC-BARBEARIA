import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { environment } from '../../environments/environment.prod';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.page.html',
  styleUrls: ['./cliente-form.page.scss'],
})
export class ClienteFormPage implements OnInit {

  form : FormGroup
 private url_api = 'http://localhost:8080/api/cliente'

  constructor(
  private formBuilder: FormBuilder,
  private http: HttpClient) { }

  ngOnInit() {
    this.setForm();
  }

  setForm(){
    this.form = this.formBuilder.group({
      nome: [null],
      cpf: [null],
      telefone: [null]
    })
  }

  onSubmit() : void{
    this.http.post(this.url_api, this.form.getRawValue()).subscribe(
      res => {
        this.ngOnInit();
      }
    )
  }
}
