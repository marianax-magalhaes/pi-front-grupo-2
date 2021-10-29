import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ProdutoService } from "src/app/services/produto.service"

@Component({
  selector: 'app-modal-produto',
  templateUrl: './modal-produto.component.html',
  styleUrls: ['./modal-produto.component.css']
})
export class ModalProdutoComponent implements OnInit {
  
  // clickSubscription!:Subscription;

  constructor(private produtoService:ProdutoService) { }

  ngOnInit(): void { }

  cancelar() {
    // Disparando o evento para fechar o Modal Produto
    // Atributo mostrandoProduto do componente HOME setado para FALSE
    // this.onCancelarClick.emit();
    this.produtoService.sendClick();
    console.log("Mostrando modal Produto por Componente Produto");
  }

}
