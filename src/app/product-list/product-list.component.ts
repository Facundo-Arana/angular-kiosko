import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { KioskoCartService } from '../product-cart.service';
import { Product } from './product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {

  // el servicio proporciona los datos a mostrar en la tabla de productos
  productList$: Observable<Product[]>;

  constructor(private cart: KioskoCartService) {
    this.productList$ = cart.productList.asObservable();
  }

  ngOnInit(): void {

    //esto actualiza la lista de productos al navegar por el sitio
    this.cart.refresh(this.products);
  }

  addToCart(product): void{
    this.cart.addToCart(product);
    product.stock -= product.quantity;
    product.quantity = 0;
  }

  products: Product[] = [
    {
      name: "mueble",
      material: "madera",
      price: 700,
      stock: 1,
      image: "assets/img/mueble.jpg",
      quantity: 0,
    },
    {
      name: "sillon",
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
      stock: 100,
      image: "assets/img/bolsa.jpg",
      quantity: 0,
    },
  ]

}
