import { Pipe, PipeTransform } from '@angular/core';
import { ISearchItem } from '../../shared/models/search-item.model';
import { ISortingOptions } from '../../shared/models/sorting-filters.model';

@Pipe({
  name: 'sorting',
})
export default class SortingPipe implements PipeTransform {
  transform(
    items: ISearchItem[],
    sortingOptions: ISortingOptions,
  ): ISearchItem[] {
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
