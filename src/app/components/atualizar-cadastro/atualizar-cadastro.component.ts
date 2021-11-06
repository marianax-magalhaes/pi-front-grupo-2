import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/Cliente';
import { } from 'src/app/models/Endereco' 

import { FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';

import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-atualizar-cadastro',
  templateUrl: './atualizar-cadastro.component.html',
  styleUrls: ['./atualizar-cadastro.component.css']
})
export class AtualizarCadastroComponent implements OnInit {

  form!: FormGroup;
  submitted = false;

  teste:string = "teste";
  
  mostrandoLogin = false;
  mostrandoCadastro = false;
  mostrandoProduto = false;

  constructor(private formBuilder: FormBuilder, private service:ClienteService) {

  }

  ngOnInit(): void {

    this.service.consultarClientePorEmail(ClienteService.clienteLogado.email).subscribe(
      {
        next: cliente => {
          console.log(cliente);
          
           ClienteService.clienteLogado.nome = cliente.nome;
           ClienteService.clienteLogado.cpf = cliente.cpf;
           ClienteService.clienteLogado.telefone = cliente.telefone;
           ClienteService.clienteLogado.endereco = cliente.endereco;
           console.log(ClienteService.clienteLogado.nome);
           
        },
        error: err => console.error(err)
      }
    );
   
    this.form = this.formBuilder.group({
      nome:[`${ClienteService.clienteLogado.nome}`],
      cpf: [`${this.teste}`, [Validators.required, Validators.minLength(14), Validators.maxLength(14)]],
      email:[''],
      senha:[''],
      telefone: this.formBuilder.group({
        ddd: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(2)]],
        numero: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(9)]],
        tipo: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(11)]],
      }),
      endereco: this.formBuilder.group({
        cep: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
        logradouro: ['', [Validators.required]],
        numero: ['', [Validators.required]],
        complemento: [''],
        tipo: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(11)]]
      })
    });
    console.log(ClienteService.clienteLogado);
    console.log(ClienteService.clienteLogado.nome);
    console.log(ClienteService.clienteLogado.cpf);
    console.log(ClienteService.clienteLogado.endereco);
  }


    
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

  // Acessando informações no formulário
  get campoForm(): {[key: string]: AbstractControl} {
    return this.form.controls;
  }

  //Acessando informações no formulário nesteado
  get campoTelefone(): {[key: string]: AbstractControl} { 
   return (this.form.get('telefone') as FormGroup).controls; 
  }

  get campoEndereco(): {[key: string]: AbstractControl} { 
    return (this.form.get('endereco') as FormGroup).controls; 
   }

onSubmit(cliente:Cliente){
  this.submitted = true;
  if (this.form.invalid) {
      return;
    }

    
  this.service.atualizarCliente(cliente).subscribe(
    {
    next: data =>{
      
      console.log(data);

      },
    error: err => console.log(err)
    });
}
  
}