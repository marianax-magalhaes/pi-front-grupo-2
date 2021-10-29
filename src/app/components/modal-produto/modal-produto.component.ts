import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Produto } from "src/app/models/Produto";

@Component({
  selector: 'app-modal-produto',
  templateUrl: './modal-produto.component.html',
  styleUrls: ['./modal-produto.component.css']
})
export class ModalProdutoComponent implements OnInit {
  // Configurando emissor de evento para fechar Modal Produto
  @Output() onCancelarClick:EventEmitter<null> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  cancelar() {
    // Disparando o evento para fechar o Modal Produto
    // Atributo mostrandoProduto do componente HOME setado para FALSE
    this.onCancelarClick.emit();
  }

}
