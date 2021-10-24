import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'salomdoces';


  mostrandoLogin = false;
  mostrandoCadastro = false;

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

}
