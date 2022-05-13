import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component( {
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: [ './product.component.css' ]
} )
export class ProductComponent implements OnInit {
  pno: number = 0;
  product: any;
  constructor ( private productservice: ProductService, private route: ActivatedRoute ) { }

  ngOnInit (): void {
    this.route.params.subscribe( ( data ) => {
      this.pno = data[ 'productno' ];
      this.product = this.productservice.getProductByProductNo( this.pno );
    } );
  }

}
