import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';


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

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
  }

  constructor() { }

  ngOnInit(): void {
  }

  cancelar(){
    this.onCancelarClick.emit();
  }

  cadastrar(){
    this.onCadastrarClick.emit();
    this.onCancelarClick.emit();
  }

}
