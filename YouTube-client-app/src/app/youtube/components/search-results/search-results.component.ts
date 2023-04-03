import { Component } from '@angular/core';

import { SearchResponse } from 'src/app/shared/models/search-response.model';
import SortOptionsService from 'src/app/youtube/services/sort-options.service';
import SearchService from '../../services/search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export default class SearchResultsComponent {
  constructor(
    protected dataService: SearchService,
    protected sortService: SortOptionsService,
  ) {}

  data: SearchResponse = this.dataService.data;
}
