import { Component, Input } from '@angular/core';
import { SortingOptions } from '../../models/sorting-filters.model';
import { SearchResponse } from '../../models/search-response.model';
import data from '../../shared/response.json';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent {
  @Input() sortingOptions!: SortingOptions;
  data: SearchResponse = data;
}
