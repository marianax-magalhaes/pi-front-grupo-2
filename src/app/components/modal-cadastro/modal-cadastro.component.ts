import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { Cliente } from 'src/app/models/Cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-modal-cadastro',
  templateUrl: './modal-cadastro.component.html',
  styleUrls: ['./modal-cadastro.component.css']
})
export class ModalCadastroComponent implements OnInit {
  @Output() onCancelarClick:EventEmitter<null> = new EventEmitter();
  constructor(private service:ClienteService) { }

  ngOnInit(): void {

  }

  onSubmit(cliente:Cliente){
    console.log(cliente);
    
    this.service.criarCliente(cliente).subscribe(
      data =>{
        console.log(data);
        }
    )
  }

  cancelar(){
    this.onCancelarClick.emit();
  }

}
