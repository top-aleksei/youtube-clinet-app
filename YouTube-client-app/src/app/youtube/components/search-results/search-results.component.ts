import { Component, OnInit } from '@angular/core';

import SortOptionsService from 'src/app/youtube/services/sort-options.service';
import { ISearchItem } from 'src/app/shared/models/search-item.model';
import SearchService from '../../services/search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export default class SearchResultsComponent implements OnInit {
  constructor(
    protected dataService: SearchService,
    protected sortService: SortOptionsService,
  ) {}
  items!: ISearchItem[];

  ngOnInit(): void {
    this.dataService.items$.subscribe((items) => {
      this.items = items;
    });
  }
}
