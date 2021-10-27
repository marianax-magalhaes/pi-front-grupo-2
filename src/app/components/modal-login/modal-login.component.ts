import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ClienteService } from 'src/app/services/cliente.service';

interface response{
  msg:string,
  token: string
}

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent implements OnInit {



  @Output() onCancelarClick:EventEmitter<null> = new EventEmitter();
  @Output() onCadastrarClick:EventEmitter<null> = new EventEmitter();

  form = new FormGroup({
    email: new FormControl('', [Validators.required,
    Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  })
  constructor(
    private service:ClienteService,
    private router:Router
    ) { }
  ngOnInit(): void {
  }

  cancelar(){
    this.onCancelarClick.emit();
  }

  cadastrar(){
    this.onCadastrarClick.emit();
    this.onCancelarClick.emit();
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
  }

  onSubmit(cliente:any){
    console.log(cliente);
    
    this.service.logarCliente(cliente).subscribe(
      {
      next: data =>{
        window.sessionStorage.setItem("token", (<response>data).token);
        this.router.navigateByUrl("/atualizar-cadastro");
        console.log(data);

        },
      error: err => console.log(err),
      complete: () => console.log("Observável finalizado")
      });
  }

  }

  




