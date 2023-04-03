import { Injectable } from '@angular/core';
import sortOptions from 'src/app/shared/configs/sort-options.config';
import { ISortingOptions } from 'src/app/shared/models/sorting-filters.model';

@Injectable({
  providedIn: 'root',
})
export default class SortOptionsService {
  sortingOptions: ISortingOptions = sortOptions;

  sortByDate() {
    this.sortingOptions.byViews = false;
    this.sortingOptions.reverseViews = true;
    this.sortingOptions.reverseDate = !this.sortingOptions.reverseDate;
    this.sortingOptions.byDate = true;

    this.rewriteConfig();
  }

  sortByViews() {
    this.sortingOptions.byDate = false;
    this.sortingOptions.reverseDate = true;
    this.sortingOptions.reverseViews = !this.sortingOptions.reverseViews;
    this.sortingOptions.byViews = true;

    this.rewriteConfig();
  }

  rewriteConfig() {
    this.sortingOptions = { ...this.sortingOptions };
  }
}
