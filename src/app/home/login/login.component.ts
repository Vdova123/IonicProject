import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LoginService } from '../services/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    email = '';
    password = '';
    constructor(
      private router: Router,
      private loginService: LoginService
      ) {
    }
    login() {
     this.loginService.logUser(this.email, this.password);
    }

    registerUser() {
      this.router.navigate(['home/register']);
    }

    ngOnInit() {

    }
}
