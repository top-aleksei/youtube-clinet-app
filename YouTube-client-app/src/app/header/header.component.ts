import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isSettingsOpen: boolean = false;

  showSettings() {
    this.isSettingsOpen = !this.isSettingsOpen;
  }
}
