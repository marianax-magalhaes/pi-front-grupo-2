import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  images = [
    {
      path: '../assets/Imagens/Carrossel.jpeg'
    },
    {
      path: '../assets/Imagens/Marmore_rosa.jpg'
    },
    {
      path: '../assets/Imagens/receita-de-docinho-de-morango.jpg'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
