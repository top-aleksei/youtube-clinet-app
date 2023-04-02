import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from 'src/app/shared/models/search-item.model';
import { SortingOptions } from 'src/app/shared/models/sorting-filters.model';

@Pipe({
  name: 'wordfilter',
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
