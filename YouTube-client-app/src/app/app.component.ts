import { Component } from '@angular/core';
import { SortingOptions } from './models/sorting-filters.model';
import { StartSearch } from './models/start-search.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'YouTube-client-app';
  sortingOptions: SortingOptions = {
    byDate: false,
    byViews: false,
    reverseDate: true,
    reverseViews: true,
    word: '',
  };

  searchParams: StartSearch = {
    startSearch: false,
    inputValue: '',
  };

  sorting(newSortingOptions: SortingOptions) {
    this.sortingOptions = newSortingOptions;
  }

  startSearch(searchParams: StartSearch) {
    this.searchParams = searchParams;
  }
}
