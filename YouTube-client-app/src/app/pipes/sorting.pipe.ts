import { Pipe, PipeTransform } from '@angular/core';
import { SortingOptions } from '../models/sorting-filters.model';
import { SearchItem } from '../models/search-item.model';

@Pipe({
  name: 'sorting',
  pure: false,
})
export class SortingPipe implements PipeTransform {
  transform(items: SearchItem[], sortingOptions: SortingOptions): SearchItem[] {
    console.log(sortingOptions);
    if (sortingOptions.byDate) {
      const res = items.sort(
        (a, b) =>
          Date.parse(a.snippet.publishedAt) - Date.parse(b.snippet.publishedAt),
      );
      return sortingOptions.reverseDate ? res : res.reverse();
    }
    if (sortingOptions.byViews) {
      const res = items.sort(
        (a, b) => +a.statistics.viewCount - +b.statistics.viewCount,
      );
      return sortingOptions.reverseViews ? res : res.reverse();
    }
    return items;
  }
}
