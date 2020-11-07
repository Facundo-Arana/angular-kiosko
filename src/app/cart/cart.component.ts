import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { KioskoCartService } from '../product-cart.service';
import { Product } from '../product-list/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartList$: Observable<Product[]>;
  totalGastado: number = 0;

  constructor(private cart: KioskoCartService) {
    this.cartList$ = cart.cartList.asObservable();
  }

  ngOnInit(): void {
  }

  remove(p: Product){
    this.cart.delete(p);
  }




}
