import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { LoginComponent } from './login/login.component';
import { IonicStorageModule } from '@ionic/storage';
import { RegisterComponent } from './register/register.component';
import { HttpClient } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: LoginComponent,
        pathMatch: 'full'
      },
      {
        path: 'register',
        component: RegisterComponent,
      }
    ]),
    IonicStorageModule.forRoot()
  ],
  declarations: [
    HomePage,
    LoginComponent,
    RegisterComponent
  ],
  providers: [
    HttpClient
  ]

})
export class HomePageModule {}
