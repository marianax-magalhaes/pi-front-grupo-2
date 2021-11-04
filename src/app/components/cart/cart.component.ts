import { Component, NgModule, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/Produto';
// Atribuir um ID apara o Produto
import { Guid } from 'guid-typescript';
// Ícone para marcar comprado/não comprado
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
// Formulário com os Produtos
import { FormGroup, FormControl, Validators, FormBuilder, Validator } from '@angular/forms';
import { AppCustomDirective } from './app.validators';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  // Controlando o ícone Comprado/Não comprado
  faCheckCircle = faCheckCircle;
  // Criando o array de Produtos
  carrinho!: Produto[];
  // Criando o formulário que armazenará os Produtos
  // Inicialmente não tem um tipo definido
  formulario:any;
  // Definindo datas mínima e máxima para agendamento
  minDate:Date;
  maxDate:Date;
  // Data de entrega agendada
  agendamento!:Date;
  // Controlando o subtotal da compra
  subTotalCompra:number;
  // Calculando o frete
  frete:number;
  // Gravando a data de agendamento
  // agendamento!:Date;
  // Configurando CEPs para cálculo do frete
  cepOrigem:string;
  cepDestino:string;

  DaterForm!: FormGroup;

  constructor(private formBuilder:FormBuilder, private fb:FormBuilder) {
    // Recuperando o ano atual
    const DATAATUAL = new Date();
    // Data mínima para pedido: 3 dias corridos da data atual
    this.minDate = new Date(DATAATUAL.getFullYear(),DATAATUAL.getMonth(),DATAATUAL.getDay()+3);
    // Data máxima para pedido: 30 dias corridos da data atual
    this.maxDate = new Date(DATAATUAL.getFullYear(),DATAATUAL.getMonth(),DATAATUAL.getDay()+30);
    // Inicializando o total da compra
    this.subTotalCompra=0;
    // Inicializando o frete
    this.frete=40;
    // Inicialiando CEPs para cálculo do frete
    this.cepOrigem="13140-798";
    this.cepDestino="13150-000";
   }

  ngOnInit(): void {

    // Exibir dados do carrinho no LocalStorage
    this.ExibirProdutos();
    // Verificar se já havia sido definido agendamento
    this.VerificarAgendamento();
    // Instanciando o formulário
    this.formulario = new FormGroup({
      // Incluindo os campos do Produto
      // Estes campos virão do modal Produto
      // imagem: new FormControl(),
      produtoId: new FormControl(),
      nome: new FormControl(),
      quantidade: new FormControl(),
      // descricao: new FormControl(),
      preco: new FormControl(),
      isComprado: new FormControl(),
    });

    this.DaterForm = this.fb.group(
      {
        FromDate:new FormControl()
      }
    )
  }

  CadastrarProduto(): void {
    this.formulario.value.produtoId = Guid.create().toString();
    this.formulario.value.isComprado = false;
    // Constante para recuperar todos os valores do formulário
    const PRODUTO: Produto = this.formulario.value;
    // Adicionar o produto do formulário ao carrinho
    this.carrinho.push(PRODUTO);
    // Atualizar total da compra
    this.AtualizarTotalCompra();
    // Armazenando dados no Local Storage
    localStorage.setItem("carrinho", JSON.stringify(this.carrinho));
    // Atualizar o valor da compra
    // Resetando o formulário
    this.formulario.reset();
  }

  ExibirProdutos(): void {
    // Verificando se Carrinho existe no LocalStorage
    if(localStorage.getItem("carrinho")) {
      // Adicionar produtos do carrinho no array de produtos (atributo "carrinho")
      this.carrinho = JSON.parse(localStorage.getItem("carrinho"));
      // Atualizar total da compra
      this.AtualizarTotalCompra();
    } else {
      // Carrinho não existe no LocalStorage. Inicializar array.
      this.carrinho = [];
    }
  }

  RemoverProduto(produtoId: string): void {
    // Localizar produto no array (carrinho)
    const INDICE: number = this.carrinho.findIndex(
      (p) => p.produtoId === produtoId
      );
 
    this.carrinho.splice(INDICE,1);
    // Atualizar total da compra
    this.AtualizarTotalCompra();
    // Gravando alterações no LocalStorage
    localStorage.setItem("carrinho",JSON.stringify(this.carrinho));
  }

  //incremento da quantidade
  IncrementarQuantidade(produtoId: string): void{
    // Localizar produto no array (carrinho)
    const INDICE: number = this.carrinho.findIndex(
      (p) => p.produtoId === produtoId
      );
    //Incrementar a quantidade
    this.carrinho[INDICE].quantidade++;
    // Atualizar total da compra
    this.AtualizarTotalCompra();
    // Gravando alterações no LocalStorage
    localStorage.setItem("carrinho",JSON.stringify(this.carrinho));
  }

  //decremento da quantidade
  DecrementarQuantidade(produtoId: string): void{
    // Localizar produto no array (carrinho)
    const INDICE: number = this.carrinho.findIndex(
      (p) => p.produtoId === produtoId
      );
    //Incrementar a quantidade
    if(this.carrinho[INDICE].quantidade>0) {
      this.carrinho[INDICE].quantidade--;
    }
    // Atualizar total da compra
    this.AtualizarTotalCompra();
    // Gravando alterações no LocalStorage
    localStorage.setItem("carrinho",JSON.stringify(this.carrinho));
  }

  AtualizarTotalCompra(): void {
    // Reinicializar totalCompra
    this.subTotalCompra=0; 
    this.carrinho.forEach(produto => {
      // Atualizando o valor da compra
      this.subTotalCompra=this.subTotalCompra+(produto.quantidade*produto.preco);  
    });

  }

  VerificarAgendamento(): void {
    // Verificando se Agendamento existe no LocalStorage
    // Se estiver editando o carrinho, carregar o agendamento definido anteriormente
    if(localStorage.getItem("entrega")) {
      // Adicionar produtos do carrinho no array de produtos (atributo "carrinho")
      if(!(localStorage.getItem("entrega")=="undefined" || localStorage.getItem("entrega")=="")) {
        this.agendamento = JSON.parse(localStorage.getItem("entrega"));
      } 
    }    
  }

  VerificarCarrinho(): void {
      // Verificar se existem itens no carrinho
      if(this.carrinho.length>0) {
        this.DaterForm = this.fb.group(
          {
            FromDate:['',[AppCustomDirective.fromDateValidator]]
          }
        )
        if(localStorage.getItem("entrega")) {
          // Adicionar produtos do carrinho no array de produtos (atributo "carrinho")
          if(!(localStorage.getItem("entrega")==="undefined" || localStorage.getItem("entrega")==="")) {
            this.agendamento = JSON.parse(localStorage.getItem("entrega"));
            console.log("Ir para a fechamento do pedido");
          }  
        } else {
          console.log("Agendamento não definido!");
        }
      } else {
        console.log("Carrinho vazio!");
      }
    }
}
