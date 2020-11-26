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
    console.log("form =>",this.loginForm);
  }

  private setForm() {
    this.loginForm = this.fb.group({
      email:["", [Validators.required, Validators.email]],
      senha:["", [Validators.required, Validators.minLength(6)]]
    })
  }
  onSubmit(): void{
    console.log("form =>",this.loginForm.getRawValue());
    const form = this.loginForm;
    console.log(form)
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
