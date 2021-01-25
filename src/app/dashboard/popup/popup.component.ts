import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  constructor(
    private modalCtrl: ModalController,
    private router: Router
    ) { }

  async close() {
    await this.modalCtrl.dismiss();
  }
  logout() {
    this.close();
    this.router.navigate(['/home']);

  }
  goToPurchasedProducts() {
    this.close();
    this.router.navigate(['dashboard/purchased']);
  }

  goToCovid() {
    this.close();
    this.router.navigate(['dashboard/covid']);
  }

  ngOnInit() {
  }

}
