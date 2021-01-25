import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Product } from 'src/app/home/models/products';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'purchuased-products',
  templateUrl: './purchuased-products.component.html',
  styleUrls: ['./purchuased-products.component.css']
})
export class PurchuasedProductsComponent implements OnInit {

  moneyTotal = 0;
  purchuasedProducts: Array<Product> = new Array<Product>();
  constructor(private storage: Storage) {
    this.storage.get('purchuasedProducts').then(result => {
      this.purchuasedProducts = result;
      if (result) {
        for (let i = 0; i <= this.purchuasedProducts.length - 1 ; i++) {
          this.moneyTotal = this.moneyTotal + this.purchuasedProducts[i].price;
      }
    }
    });
  }

  ngOnInit() {
  }
  goBack() {
    window.history.back();
  }
}
