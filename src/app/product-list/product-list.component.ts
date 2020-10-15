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
      image: "assets/img/mueble.jpg",
      quantity: 0,
    },
    {
      name: "sillones",
      material: "neumaticos",
      price: 700,
      stock: 1,
      image: "assets/img/silla.jpg",
      quantity: 0,
    },
    {
      name: "bolsa",
      material: "tela",
      price: 0,
      stock: 1,
      image: "assets/img/bolsa.jpg",
      quantity: 0,
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  upQuantity(product: Product): void {
    if (product.quantity <= product.stock)
      product.quantity++;
  }

  downQuantity(product: Product): void {
    if (product.quantity > 0)
      product.quantity--;
  }

changeQuantity(event, product: Product){
  //TODO

  }
}
