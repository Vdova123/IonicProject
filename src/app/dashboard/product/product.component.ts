import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from 'src/app/home/services/product/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() name: string;
  @Input() price: number;
  @Input() url: string;
  @Input() quantity: number;
  @Input() ID: number;
  @Input() showButtons: boolean;

  constructor(private productService: ProductService) { }

  ngOnInit() {

  }

  buyProduct(ID) {
    this.productService.buy(ID);
  }
}
