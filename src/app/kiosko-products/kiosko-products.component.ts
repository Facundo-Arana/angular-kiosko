import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product-list/product';

@Component({
  selector: 'app-kiosko-products',
  templateUrl: './kiosko-products.component.html',
  styleUrls: ['./kiosko-products.component.scss']
})
export class KioskoProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
