import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export default class HeaderComponent {
  constructor(private router: Router) {}

  isSettingsOpen: boolean = false;

  showSettings() {
    this.isSettingsOpen = !this.isSettingsOpen;
  }

  navigateToHome() {
    this.router.navigate(['/']);
  }
}
