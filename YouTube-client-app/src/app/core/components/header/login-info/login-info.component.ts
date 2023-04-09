import SearchService from 'src/app/youtube/services/search.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import AuthService from '../../../../auth/services/auth.service';

@Component({
  selector: 'app-login-info',
  templateUrl: './login-info.component.html',
  styleUrls: ['./login-info.component.scss'],
})
export default class LoginInfoComponent {
  constructor(
    protected authService: AuthService,
    private searchService: SearchService,
    private router: Router,
  ) {}

  isLogged = this.authService.isLogged$;

  logOut() {
    this.authService.logOut();
    this.searchService.isSearched = false;
  }

  routeToAdmin() {
    this.router.navigate(['/admin']);
  }
}
