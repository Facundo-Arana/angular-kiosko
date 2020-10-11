import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  product = {
    "name": "mueble",
    "material": "madera",
    "price": 700,
    "stock": 1,
    "image": "assets/img/mueble.png"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
