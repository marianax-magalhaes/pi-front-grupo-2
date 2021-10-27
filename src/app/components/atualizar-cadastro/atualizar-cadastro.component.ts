import { Component, OnInit } from '@angular/core';
import { Telefone } from 'src/app/models/Telefone';
import { FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-atualizar-cadastro',
  templateUrl: './atualizar-cadastro.component.html',
  styleUrls: ['./atualizar-cadastro.component.css']
})
export class AtualizarCadastroComponent implements OnInit {

  novoTelefone:Telefone = {
    ddd: "",
    numero: "",
    tipo: ""
  }

  form: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      telefoneDDD: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(2)]],
      telefoneNumero: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
      telefoneTipo: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(11)]],
      enderecoLogradouro: ['', [Validators.required]],
      enderecoNumero: ['', [Validators.required]],
      enderecoTipo: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(11)]]
    });
  }

  get f(): {[key: string]: AbstractControl} {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    console.log(JSON.stringify(this.form.value, null, 2));
  }


  track(index:number, value:string) {
    return index;
  }





}
