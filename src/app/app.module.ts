import { CommonModule, registerLocaleData } from '@angular/common'
import { NgModule, DEFAULT_CURRENCY_CODE, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { AboutComponent } from './components/about/about.component';
import { ProductComponent } from './components/product/product.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { ModalLoginComponent } from './components/modal-login/modal-login.component';
import { ModalCadastroComponent } from './components/modal-cadastro/modal-cadastro.component';
import { HttpClientModule } from '@angular/common/http';
import { AtualizarCadastroComponent } from './components/atualizar-cadastro/atualizar-cadastro.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalProdutoComponent } from './components/modal-produto/modal-produto.component';
import { CartComponent } from './components/cart/cart.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { CriarProdutoComponent } from './components/criar-produto/criar-produto.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import  ptBr  from '@angular/common/locales/pt';
import { OrderComponent } from './components/order/order.component';
import { OrderStatusComponent } from './components/order-status/order-status.component';
registerLocaleData(ptBr)

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    AboutComponent,
    ProductComponent,
    ListProductsComponent,
    ModalLoginComponent,
    ModalCadastroComponent,
    AtualizarCadastroComponent,
    HomeComponent,
    ModalProdutoComponent,
    CartComponent,
    CriarProdutoComponent,
    OrderComponent,
    OrderStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    FontAwesomeModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatCardModule,
    MatDividerModule,
    MatChipsModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatButtonModule,
    MatDialogModule,
    MatProgressBarModule
  ],
  
  providers: [MatDatepickerModule,  MatNativeDateModule, 
    {provide: LOCALE_ID, useValue: 'pt-PT'}, 
    {provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL'}],
  bootstrap: [AppComponent]

})
export class AppModule { }