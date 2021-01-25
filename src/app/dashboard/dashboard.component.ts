import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../home/models/products';
import { ProductService } from '../home/services/product/product.service';
import { Storage } from '@ionic/storage';
import { ModalController } from '@ionic/angular';
import { PopupComponent } from './popup/popup.component';
import { replaceDiacritic } from './pipes/CharacterReplace';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {


  products: Array<Product> = new Array<Product>();
  filteredProducts: Array<Product> = new Array<Product>();
  rootPage: any;
  userInput: string;
  paramID: string;
  constructor(
    private productService: ProductService,
    private storage: Storage,
    private modalController: ModalController,
    private activatedRoute: ActivatedRoute) {
      this.storage.get('products')
      .then(result => {
        this.products =  result;
        this.filteredProducts = this.products;
        });
     }
  ionViewCanEnter() {
    this.filterSelectedCategory('');
     }

  ionViewDidEnter() {
      this.products = this.productService.returnProducts();
      if (!this.products || this.products.length === 0) {
        this.storage.get('products')
        .then(result => {
          this.products =  result;
          this.filteredProducts = this.products;
          });
      }
     }

  onInputChange($event: CustomEvent) {
    this.userInput = $event.detail.value;
    this.filteredProducts = (this.userInput) ? this.products
    .filter(x => replaceDiacritic(x.name.toLocaleLowerCase())
    .includes(replaceDiacritic(this.userInput.toLocaleLowerCase()))) : this.products;
   }

   filterSelectedCategory(category: string) {
     if (this.products) {
       this.filteredProducts = (category.length !== 0) ? this.products
       .filter(x => x.category
       .find(c => replaceDiacritic(c.toLocaleLowerCase())
        ===  replaceDiacritic(category.toLocaleLowerCase()))) : this.products;
     }
  }

   async openMenu() {
    const modal = this.modalController.create({
        component: PopupComponent
      });
    await modal.then(result => {
      result.present();
    });
 }

  ngOnInit() {
    this.filterSelectedCategory('');
  }

  ngAfterViewInit(): void {

  }


}
