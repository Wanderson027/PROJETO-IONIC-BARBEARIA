import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';




@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.page.html',
  styleUrls: ['./cliente.page.scss'],
})
export class ClientePage implements OnInit {

  loginForm: FormGroup
  url_api = environment.apiUrl;
  private clienteList;

  constructor(private http: HttpClient ) { }

  ngOnInit() {
    this.listarCliente();
  }

  listarCliente(): any{
    return this.http.get(this.url_api+'/clientes').subscribe(
      data => {
        console.log("lista =>", data)
        this.clienteList = data;
      }
    )
     
  }

}
