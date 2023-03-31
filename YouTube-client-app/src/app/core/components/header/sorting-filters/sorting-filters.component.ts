import { Component, Output, EventEmitter } from '@angular/core';
import { SortingOptions } from 'src/app/shared/models/sorting-filters.model';

@Component({
  selector: 'app-sorting-filters',
  templateUrl: './sorting-filters.component.html',
  styleUrls: ['./sorting-filters.component.scss'],
})
export class SortingFiltersComponent {
  @Output() SortingEvent = new EventEmitter<SortingOptions>();

  sortingOptions = {
    byDate: false,
    byViews: false,
    reverseDate: true,
    reverseViews: true,
    word: '',
  };

  sortByDate() {
    this.sortingOptions.byViews = false;
    this.sortingOptions.reverseViews = true;
    this.sortingOptions.reverseDate = !this.sortingOptions.reverseDate;
    this.sortingOptions.byDate = true;

    this.SortingEvent.emit(this.sortingOptions);
  }

  sortByViews() {
    this.sortingOptions.byDate = false;
    this.sortingOptions.reverseDate = true;
    this.sortingOptions.reverseViews = !this.sortingOptions.reverseViews;
    this.sortingOptions.byViews = true;

    this.SortingEvent.emit(this.sortingOptions);
  }
}
