import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent implements OnInit {

  @Output() onCancelarClick:EventEmitter<null> = new EventEmitter();
  @Output() onCadastrarClick:EventEmitter<null> = new EventEmitter();

  form: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(30)]],
    });
  }

  get f(): {[key: string]: AbstractControl} {
    return this.form.controls;
  }

  cancelar(){
    this.onCancelarClick.emit();
  }

  cadastrar(){
    this.onCadastrarClick.emit();
    this.onCancelarClick.emit();
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    console.log(JSON.stringify(this.form.value, null, 2));
  }

  
}
