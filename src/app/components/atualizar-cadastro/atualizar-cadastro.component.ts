import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/Cliente';
import { Telefone } from 'src/app/models/Telefone';
import { ClienteService } from 'src/app/services/cliente.service';

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

  constructor(private service:ClienteService) { }

  track(index:number, value:string) {
    return index;
  }

onSubmit(cliente:Cliente){
  console.log(cliente);
    
  this.service.atualizarCliente(cliente).subscribe(
    {
    next: data =>{
      
      console.log(data);

      },
    error: err => console.log(err),
    complete: () => console.log("Observável finalizado")
    });
}


  ngOnInit(): void {
  }

}
