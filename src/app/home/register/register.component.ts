import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login/login.service';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { ToasterService } from '../services/toaster/toaster.service';
import { ToasterPositions } from '../models/toaster-positions';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email = '';
  password = '';


  constructor(
    private loginService: LoginService,
    private router: Router,
    private toasterService: ToasterService
    ) {
   }

  ngOnInit() {
  }

  async registeUser() {
    if (this.password.length < 5) {
      this.toasterService.createToaster('Password must have min 5 characters!', 'danger', ToasterPositions.Top, false);
    } else if (!this.loginService.isValidEmail(this.email)) {
      this.toasterService.createToaster('invalid email', 'danger', ToasterPositions.Top, false);
    } else {
      this.toasterService.createToaster('User was registered', 'primary', ToasterPositions.Top, false);
      const user = new User(this.email, this.password);
      this.loginService.registerUser(user);
      this.email = null;
      this.password = null;
      this.router.navigate(['home']);
    }
  }

}
