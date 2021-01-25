import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

constructor(private toasterController: ToastController) { }

  async createToaster(title: string, Color: string, Position, ShowCloseButton: boolean) {
  const toast = await this.toasterController.create({
    message: title,
    duration: 2000,
    color: Color,
    position: Position,
    showCloseButton: ShowCloseButton
  });
  toast.present();
}

}
