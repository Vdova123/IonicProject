import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { IonicStorageModule } from '@ionic/storage';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProductComponent } from './product/product.component';
import { PopupComponent } from './popup/popup.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { PurchuasedProductsComponent } from './product/purchuased-products/purchuased-products.component';
import { CovidComponent } from './covid/covid.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'product/:id',
        component: ProductDetailComponent
      },
      {
        path: 'purchased',
        component: PurchuasedProductsComponent
      },
      {
        path: 'covid',
        component: CovidComponent
      }
    ]),
    IonicStorageModule.forRoot()
  ],
  declarations: [
    DashboardComponent,
    ProductComponent,
    PopupComponent,
    ProductDetailComponent,
    PurchuasedProductsComponent,
    CovidComponent
      ],
  entryComponents: [
    PopupComponent
  ]

})
export class DashboardModule { }
