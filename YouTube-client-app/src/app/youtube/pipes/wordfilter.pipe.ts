import { Pipe, PipeTransform } from '@angular/core';
import { ISearchItem } from 'src/app/shared/models/search-item.model';
import { ISortingOptions } from 'src/app/shared/models/sorting-filters.model';

@Pipe({
  name: 'wordfilter',
})
export default class WordfilterPipe implements PipeTransform {
  transform(
    items: ISearchItem[],
    sortingOptions: ISortingOptions,
  ): ISearchItem[] {
    if (items) {
      return items.filter(
        (el) =>
          el.snippet.title
            .toLowerCase()
            .indexOf(sortingOptions.word.toLowerCase()) !== -1,
      );
    }
    return items;
  }
}
