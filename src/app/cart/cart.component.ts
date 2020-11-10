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
  total$;

  constructor(private cart: KioskoCartService) {
    this.cartList$ = cart.cartList.asObservable();
    this.cart.total.subscribe((valor) => {
      this.total$ = valor;
    });
  }

  ngOnInit(): void {
  }

  remove(p: Product){
    this.cart.delete(p);
  }




}
