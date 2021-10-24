import { Component, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal-cadastro',
  templateUrl: './modal-cadastro.component.html',
  styleUrls: ['./modal-cadastro.component.css']
})
export class ModalCadastroComponent implements OnInit {
  @Output() onCancelarClick:EventEmitter<null> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  cancelar(){
    this.onCancelarClick.emit();
  }

}
