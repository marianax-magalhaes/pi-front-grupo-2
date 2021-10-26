import { Component, OnInit } from '@angular/core';
import { Telefone } from 'src/app/models/Telefone';

@Component({
  selector: 'app-atualizar-cadastro',
  templateUrl: './atualizar-cadastro.component.html',
  styleUrls: ['./atualizar-cadastro.component.css']
})
export class AtualizarCadastroComponent implements OnInit {

  novoTelefone:Telefone = {
    ddd: "",
    numero: "",
    tipo: ""
  }

  constructor() { }

  track(index:number, value:string) {
    return index;
  }




  ngOnInit(): void {
  }

}
