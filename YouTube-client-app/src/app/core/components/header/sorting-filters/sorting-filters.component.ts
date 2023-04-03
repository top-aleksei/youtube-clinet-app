import { Component } from '@angular/core';
import SortOptionsService from 'src/app/youtube/services/sort-options.service';

@Component({
  selector: 'app-sorting-filters',
  templateUrl: './sorting-filters.component.html',
  styleUrls: ['./sorting-filters.component.scss'],
})
export default class SortingFiltersComponent {
  constructor(protected sortingService: SortOptionsService) {}

  sortByDate() {
    this.sortingService.sortByDate();
  }

  sortByViews() {
    this.sortingService.sortByViews();
  }
}
