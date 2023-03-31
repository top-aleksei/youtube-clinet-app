import { Component, Input } from '@angular/core';
import { SearchResponse } from 'src/app/shared/models/search-response.model';
import { SortingOptions } from 'src/app/shared/models/sorting-filters.model';
import data from '../../../shared/response.json';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent {
  @Input() sortingOptions!: SortingOptions;
  data: SearchResponse = data;
}
