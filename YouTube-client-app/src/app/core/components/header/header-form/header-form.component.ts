import { Component } from '@angular/core';

import SearchService from 'src/app/youtube/services/search.service';

@Component({
  selector: 'app-header-form',
  templateUrl: './header-form.component.html',
  styleUrls: ['./header-form.component.scss'],
})
export default class HeaderFormComponent {
  constructor(private dataService: SearchService) {}

  searchParams = {
    startSearch: false,
    inputValue: '',
  };

  search() {
    this.dataService.isSearched = true;
  }
}
