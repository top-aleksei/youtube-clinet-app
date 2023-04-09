import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import AuthService from '../../services/auth.service';
import passwordValidator from '../../utils/authValidator';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export default class LoginPageComponent {
  authForm: FormGroup = new FormGroup({
    login: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      passwordValidator,
    ]),
  });
  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    if (this.authForm.valid) {
      this.authService.logIn(this.authForm.value.login);
      this.router.navigate(['/youtube']);
    }
  }
}
