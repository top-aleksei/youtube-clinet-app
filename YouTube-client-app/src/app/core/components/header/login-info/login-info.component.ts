import SearchService from 'src/app/youtube/services/search.service';
import { Component } from '@angular/core';
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
  ) {}

  isLogged = this.authService.isLogged$;

  logOut() {
    this.authService.logOut();
    this.searchService.isSearched = false;
  }
}
