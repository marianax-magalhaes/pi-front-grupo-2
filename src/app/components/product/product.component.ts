import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  // Configurando emissor de evento para mostrar Modal Produto
  @Output() onMostrarProdutoClick:EventEmitter<null> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  mostrarProduto() {
    this.onMostrarProdutoClick.emit();
  }

}
