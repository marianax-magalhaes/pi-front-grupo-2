import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Atributos da classe  
  mostrandoLogin = false;
  mostrandoCadastro = false;
  mostrandoProduto = false;

  // Métodos da classe
  mostrarLogin(){
    this.mostrandoLogin = true;
  }

  esconderLogin(){
    this.mostrandoLogin = false;
  }
  
  mostrarCadastro(){
    this.mostrandoLogin = false;
    this.mostrandoCadastro = true;
  }

  esconderCadastro(){
    this.mostrandoCadastro = false;
  }

  mostrarProduto(){
    // Alterando atributo para mostrar o modal
    this.mostrandoProduto = true;
  }

  esconderProduto(){
    // Alterando atributo para mostrar o modal
    this.mostrandoProduto = false;
  }

}
