import { Component } from '@angular/core';
import { SearchResponse } from '../search-response.model';
import data from '../../shared/response.json';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent {
  data: SearchResponse = data;
}
