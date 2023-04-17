import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import AuthService from '../../auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export default class AuthGuard implements CanActivate {
  private isAllowed!: boolean;
  constructor(private authService: AuthService, private router: Router) {
    this.authService.isLogged$.subscribe((el) => {
      this.isAllowed = el;
    });
  }

  canActivate(): boolean {
    if (!this.isAllowed) {
      this.router.navigate(['/auth']);
    }
    return this.isAllowed;
  }
}
