import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent implements OnInit {

  @Output() onCancelarClick:EventEmitter<null> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  cancelar(){
    this.onCancelarClick.emit()
  }

}
