import { Component, EventEmitter, Output } from '@angular/core';
import { StartSearch } from '../../../shared/models/start-search.model';
import { SortingOptions } from '../../../shared/models/sorting-filters.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() sortingEvent = new EventEmitter<SortingOptions>();
  @Output() startSearchEmit = new EventEmitter<StartSearch>();
  isSettingsOpen: boolean = false;

  showSettings() {
    this.isSettingsOpen = !this.isSettingsOpen;
  }

  onSorting(event: SortingOptions) {
    this.sortingEvent.emit(event);
  }

  onStartSearch(event: StartSearch) {
    this.startSearchEmit.emit(event);
  }
}
