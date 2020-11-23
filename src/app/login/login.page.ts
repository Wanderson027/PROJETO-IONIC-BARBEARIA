import { Component, OnInit, ɵɵresolveBody } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  loginForm:FormGroup

  constructor(private fb:FormBuilder, private rota: Router) { }

  ngOnInit() {
    this.criarFormulario();
  }

  criarFormulario(){
    this.loginForm = this.fb.group({
      email:["", [Validators.required, Validators.email]],
      senha:["", [Validators.required, Validators.minLength(6)]]
    })
  }

  get email(): FormControl{
    return <FormControl>this.loginForm.get("email");
  }


  get senha(): FormControl{
    return <FormControl>this.loginForm.get("senha");
  }

  onSubmit(): void{
    if(this.loginForm && this.senha){
      console.log("Os dados do form são: ", this.loginForm)
      this.rota.navigateByUrl('/painel');
    }else{
      console.warn("Não autorizado")
    }
    
    
  }


}
