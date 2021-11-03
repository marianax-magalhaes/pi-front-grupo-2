import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtualizarCadastroComponent } from './components/atualizar-cadastro/atualizar-cadastro.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { OrderComponent } from './components/order/order.component';

const routes: Routes = [
  {
    path:"", component: HomeComponent
  },
  {
    path: "atualizar-cadastro", component: AtualizarCadastroComponent
  },
  {
    path: "carrinho", component: CartComponent    
  },
  {
    path: "pedido", component: OrderComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
