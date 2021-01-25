import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/home/services/product/product.service';
import { Product } from 'src/app/home/models/products';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  productID: number;
  product: Product;
  constructor(
    private activateRouter: ActivatedRoute,
    private productService: ProductService) {
    this.activateRouter.params.
    subscribe(result => {
     this.product = this.productService.getProduct(+result.id);
    });
  }

  ngOnInit() {
  }

  goBack() {
    window.history.back();
  }

}
