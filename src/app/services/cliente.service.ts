import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../models/Cliente';
import {take} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private readonly url = "url";

  constructor(private http:HttpClient) { }

  criarCliente(cliente:Cliente){
    return this.http.post(this.url, cliente).pipe(take(1));
  }

  atualizarCliente(cliente:Cliente){
    return this.http.put(this.url, cliente).pipe(take(1));
  }

}
