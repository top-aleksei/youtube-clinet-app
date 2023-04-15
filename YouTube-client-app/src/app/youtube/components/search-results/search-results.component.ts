import { Subscription, Observable } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';

import SortOptionsService from 'src/app/youtube/services/sort-options.service';
import { ISearchItem } from 'src/app/shared/models/search-item.model';
import { Store } from '@ngrx/store';

import { selectApiCards } from 'src/app/redux/selectors/youtube.selectors';
import { IState } from 'src/app/redux/state.model';
import SearchService from '../../services/search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export default class SearchResultsComponent implements OnInit, OnDestroy {
  itemsSubscription!: Subscription;
  items$!: Observable<ISearchItem[]>;

  constructor(
    protected dataService: SearchService,
    protected sortService: SortOptionsService,
    private store: Store<IState>,
  ) {
    // this.items$.subscribe((it) => console.log(it));
    this.items$ = store.select(selectApiCards);
  }

  ngOnInit(): void {
    this.itemsSubscription = this.dataService.items$.subscribe();
  }

  ngOnDestroy(): void {
    this.itemsSubscription.unsubscribe();
  }
}
