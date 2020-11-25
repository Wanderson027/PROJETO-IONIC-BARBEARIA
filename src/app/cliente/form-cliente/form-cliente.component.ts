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
  }

  private setForm() {
    this.clienteForm = this.formBuilder.group({
      nome:["", [Validators.required]],
      cpf:["", [Validators.required]],
      telefone:["", [Validators.required]]
    })
  }
  onSubmit(): void{
    console.log("form =>",this.clienteForm);
  }
}
