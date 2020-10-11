import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [
    {
      name: "estante",
      material: "madera",
      price: 700,
      stock: 1,
      image: "assets/img/mueble.png",
    },
    {
      name: "sillones",
      material: "neumaticos",
      price: 700,
      stock: 1,
      image: "assets/img/silla.jpg",
    },
    {
      name: "bolsa",
      material: "tela",
      price: 0,
      stock: 1,
      image: "assets/img/bolsa.jpg",
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
