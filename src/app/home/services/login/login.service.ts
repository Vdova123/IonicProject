import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { ProductService } from '../product/product.service';
import { ToasterService } from '../toaster/toaster.service';
import { ToasterPositions } from '../../models/toaster-positions';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
// tslint:disable-next-line: variable-name
private _canUserEnter: boolean;
public get canUserEnter(): boolean {
  return this._canUserEnter;
}
constructor(
  private storage: Storage,
  private router: Router,
  private productService: ProductService,
  private toasterService: ToasterService) {

}
logUser(email: string, userPassword: string) {
this.storage.keys().then(async key => {
  if (key.includes(email)) {
    this.storage.get(email).then(async passowrd => {
      if (passowrd === userPassword) {
        this.productService.setProductsIntoStorage();
        this._canUserEnter = true;
        this.router.navigate(['dashboard']);
      } else {
        this.toasterService.createToaster('Wrong email or password', 'danger', ToasterPositions.Top, false);
      }
    });
  } else {
    this.toasterService.createToaster('Wrong email or password', 'danger', ToasterPositions.Top, false);
  }
});
}

registerUser(userInfo: User) {
  this.storage.set(userInfo.email, userInfo.password);
}

isValidEmail(email: string): boolean {
  // tslint:disable-next-line: max-line-length
  const emailCharacters = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!emailCharacters.test(email)) {
    return false;
  } else {
    return true;
  }

}
}
