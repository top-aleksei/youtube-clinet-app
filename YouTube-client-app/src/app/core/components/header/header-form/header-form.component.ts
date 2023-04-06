import { Component } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs';

import SearchService from 'src/app/youtube/services/search.service';

@Component({
  selector: 'app-header-form',
  templateUrl: './header-form.component.html',
  styleUrls: ['./header-form.component.scss'],
})
export default class HeaderFormComponent {
  constructor(protected dataService: SearchService) {}

  searchString = this.dataService.searchValue$
    .pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      filter((val) => val.trim().length > 2),
    )
    .subscribe(console.log);

  search() {
    this.dataService.isSearched = true;
  }
  onInput(event: Event) {
    const { value } = <HTMLInputElement>event.target;
    // console.log((<HTMLInputElement>event.target).value);
    this.dataService.searchValue$.next(value);
  }
  x() {
    this.dataService.searchValue$
      .pipe(debounceTime(1000))
      .subscribe(console.log);
  }
}
