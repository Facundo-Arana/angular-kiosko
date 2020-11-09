import { EventEmitter, Injectable, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './product-list/product';

@Injectable({
  providedIn: 'root',
})
export class KioskoCartService {

  private _cartList: Product[] = [];
  private _productList: Product[] = [];

  cartList: BehaviorSubject<Product[]> = new BehaviorSubject([]);
  productList: BehaviorSubject<Product[]> = new BehaviorSubject([]);

  constructor() {}

  addToCart(product: Product) {
    if (product.quantity != 0) {
      let item: Product = this._cartList.find((v1) => v1.name == product.name);
      if (!item) {
        this._cartList.push({ ...product });
      } else {
        item.quantity += product.quantity;
      }
      this.cartList.next(this._cartList);
    }
  }

  // borra un producto del carrito y actualiza la lista para mantener la consistencia de datos
  // entre la lista de productos y el carrito
  delete(p: Product) {
    let item = this._cartList.find(v1 => p.name == v1.name);
    if(item){
      this._cartList.splice(this._cartList.indexOf(p), 1);
      let product = this._productList.find(v1 => item.name == v1.name);
      product.stock += item.quantity;

      this.productList.next(this._productList);
      this.cartList.next(this._cartList);
    }
  }


  /**
   *
   * @param products es la lista de todos los productos
   *
   * (soluciona el bug de navegar por el sitio manteniendo los datos del carrito y la lista sincronizados)
   *
   */
  refresh(products: Product[]) {
    this._productList = [];
    products.forEach((p) => {
      let item: Product = this._cartList.find((v1) => v1.name == p.name);
      if (item) {
        p.stock -= item.quantity;
      }
      this._productList.push({ ...p });
    });
    this.productList.next(this._productList);
  }
}
