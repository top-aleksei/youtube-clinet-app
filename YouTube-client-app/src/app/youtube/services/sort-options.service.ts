import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SortOptionsService {
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
