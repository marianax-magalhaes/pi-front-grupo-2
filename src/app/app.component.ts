import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'salomdoces';


  mostrandoModal = false;

  mostrarModal(){
    this.mostrandoModal = true;
  }
  esconderModal(){
    this.mostrandoModal = false;
  }
}
