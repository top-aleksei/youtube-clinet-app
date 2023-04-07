import {
  BehaviorSubject,
  Subscription,
  debounceTime,
  distinctUntilChanged,
} from 'rxjs';
import { Component, OnDestroy } from '@angular/core';

import SearchService from 'src/app/youtube/services/search.service';

@Component({
  selector: 'app-header-form',
  templateUrl: './header-form.component.html',
  styleUrls: ['./header-form.component.scss'],
})
export default class HeaderFormComponent implements OnDestroy {
  searchString$ = new BehaviorSubject<string>('');
  searchStringSubscription!: Subscription;
  constructor(protected dataService: SearchService) {
    this.searchStringSubscription = this.searchString$
      .pipe(debounceTime(1000), distinctUntilChanged())
      .subscribe((el) => {
        this.dataService.searchValue$.next(el);
      });
  }

  onInput(event: Event) {
    const { value } = <HTMLInputElement>event.target;
    this.searchString$.next(value);
  }
  ngOnDestroy() {
    this.searchStringSubscription.unsubscribe();
  }
}
