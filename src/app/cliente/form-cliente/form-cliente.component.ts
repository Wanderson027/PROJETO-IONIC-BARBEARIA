import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-cliente',
  templateUrl: './form-cliente.component.html',
  styleUrls: ['./form-cliente.component.scss'],
})
export class FormClienteComponent implements OnInit {

  clienteForm:FormGroup;

  constructor(
    private http: HttpClient,
    private formBuilder:FormBuilder) { 

    }

  ngOnInit() {
    this.setForm()
    console.log("form =>",this.clienteForm);
  }

  private setForm() {
    this.clienteForm = this.formBuilder.group({
      nome:["", [Validators.required, ]],
      cpf:["", [Validators.required]],
      telefone:["", [Validators.required]]
    })
  }
  onSubmit(): void{
    console.log("form =>",this.clienteForm.getRawValue());
    const form = this.clienteForm;
    console.log(form)
  }

  get nome(): FormControl{
    return <FormControl>this.clienteForm.get("nome");
  }


  get cpf(): FormControl{
    return <FormControl>this.clienteForm.get("cpf");
  }

  get telefone(): FormControl{
    return <FormControl>this.clienteForm.get("telefone");
  }
}
