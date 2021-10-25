import { Component, OnInit,EventEmitter, Output } from '@angular/core';
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

  cancelar(){
    this.onCancelarClick.emit();
  }

}
