import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component( {
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: [ './products-list.component.css' ]
} )
export class ProductsListComponent implements OnInit {
  products;
  constructor ( private productservice: ProductService ) {

    this.products = this.productservice.getProducts();

  }

  ngOnInit (): void {

  }

}
