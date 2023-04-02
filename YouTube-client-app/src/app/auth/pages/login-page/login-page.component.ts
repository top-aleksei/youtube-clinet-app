import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  constructor(private authService: AuthService, private router: Router) {}

  userName: string = '';
  password: string = '';

  onSubmit() {
    if (this.userName) {
      this.authService.logIn(this.userName);
      this.router.navigate(['/youtube']);
    }
  }
}
