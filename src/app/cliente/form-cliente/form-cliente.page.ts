import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-cliente',
  templateUrl: './form-cliente.page.html',
  styleUrls: ['./form-cliente.page.scss'],
})
export class FormClientePage implements OnInit {

  loginForm:FormGroup

  constructor(
    private http: HttpClient,
    private fb:FormBuilder) { 

    }

  ngOnInit() {
    this.setForm()
  }

  private setForm() {
    this.loginForm = this.fb.group({
      nome:[null],
      cpf:[null],
      telefone:[null]

    })
  }
  onSubmit(): void{
    console.log("form =>",this.loginForm.getRawValue());
  }

  get nome(): FormControl{
    return <FormControl>this.loginForm.get("nome");
  }


  get cpf(): FormControl{
    return <FormControl>this.loginForm.get("cpf");
  }

  get telefone(): FormControl{
    return <FormControl>this.loginForm.get("telefone");
  }
}
