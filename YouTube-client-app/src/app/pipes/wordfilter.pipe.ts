import { Pipe, PipeTransform } from '@angular/core';
import { SortingOptions } from '../models/sorting-filters.model';
import { SearchItem } from '../models/search-item.model';

@Pipe({
  name: 'wordfilter',
  pure: false,
})
export class WordfilterPipe implements PipeTransform {
  transform(items: SearchItem[], sortingOptions: SortingOptions): SearchItem[] {
    return items.filter(
      (el) =>
        el.snippet.title
          .toLowerCase()
          .indexOf(sortingOptions.word.toLowerCase()) !== -1,
    );
  }
}
