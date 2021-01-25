import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Product } from '../../models/products';
import { ToasterService } from '../toaster/toaster.service';
import { ToasterPositions } from '../../models/toaster-positions';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
products: Array<Product> = new Array<Product>();
purchuasedProducts: Array<Product> = new Array<Product>();

constructor(
  private storage: Storage,
  private toasterService: ToasterService) {
  this.storage.get('products').then(result => {
    this.products = result;
  });
 }

setProductsIntoStorage() {
  this.storage.get('products').then(result => {
  if (!result) {
    this.storage.set('products', new Array(
          // tslint:disable-next-line: max-line-length
          new Product(1, 'Gambrinus 10°', 11, 'https://www.prazdroj.cz/cospospohzeg/uploads/2016/03/320x355_4.png', 150, ['napoje', 'pivo']),
          // tslint:disable-next-line: max-line-length
          new Product(2, 'Kozel 11°', 14, 'https://www.prazdroj.cz/cospospohzeg/uploads/2016/03/320x355_17.png', 120, ['napoje', 'pivo']),
          // tslint:disable-next-line: max-line-length
          new Product(3, 'Captain Morgan', 349, 'https://secure.ce-tescoassets.com/assets/CZ/017/5000299223017/ShotType1_540x540.jpg', 80, ['napoje', 'rum']),
          // tslint:disable-next-line: max-line-length
          new Product(4, 'Brambůrky Lays', 29, 'https://pucov.eu/7388-large_default/bramburky-cheese-a-jalapeno-lay-s-77g.jpg', 200, ['jidlo', 'slane']),
            // tslint:disable-next-line: max-line-length
           new Product(5, 'Croissant vanilla', 14, 'https://www.mujnakup-ostrava.cz/fotky49381/fotos/_vyr_915croissant-7days-vanilka-pomeranc-60g1412149374L.jpg', 150, ['jidlo', 'svacina']),
             // tslint:disable-next-line: max-line-length
             new Product(6, 'Croissant cocoa', 13, 'https://www.7days.com/files/1/Products-International/Double/DOUBE-COCOA-VANILLA-GB.png', 200, ['jidlo', 'svacina'])
      ));
  }
});
  this.getProductsFromStorage();
}

returnProducts(): Array<Product> {
return this.products;
}

buy(ID: number) {
  this.products.forEach(product => {
    if (product.id === ID) {
      product.quantity --;
      this.purchuasedProducts.push(product);
      this.storage.set('purchuasedProducts', this.purchuasedProducts);
      if (product.quantity < 1) {
        this.removeProduct(product);
      }
    }
  });
  this.storage.set('products', this.products);
  // tslint:disable-next-line: max-line-length
  this.toasterService.createToaster(`Product ${this.products.find(x => x.id === ID).name} was purchased `, 'primary', ToasterPositions.Top, false);
}

removeProduct(product: Product) {
  this.products.splice(this.products.indexOf(product) , 1);
  this.storage.set('products', this.products);
}

getProduct(ID: number): Product {
  return this.products.find(x => x.id === ID);
}

private getProductsFromStorage() {
  this.storage.get('products')
  .then(result => {
    this.products =  result;
    });
}
}
