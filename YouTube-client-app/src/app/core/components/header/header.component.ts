import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SortingOptions } from '../../../shared/models/sorting-filters.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() sortingEvent = new EventEmitter<SortingOptions>();

  constructor(private router: Router) {}

  isSettingsOpen: boolean = false;

  showSettings() {
    this.isSettingsOpen = !this.isSettingsOpen;
  }

  navigateToHome() {
    this.router.navigate(['/']);
  }
}
