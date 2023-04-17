import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ISearchItem } from 'src/app/shared/models/search-item.model';
import { Subscription } from 'rxjs';
import SearchService from '../../services/search.service';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss'],
})
export default class DetailsPageComponent implements OnInit, OnDestroy {
  id!: string;
  item: ISearchItem | undefined;
  itemSubscription!: Subscription;

  constructor(
    private activateRout: ActivatedRoute,
    private searchService: SearchService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.id = this.activateRout.snapshot.params['id'];

    this.itemSubscription = this.searchService
      .getVideosById(this.id)
      .subscribe((el) => {
        [this.item] = el;
      });
  }

  ngOnDestroy(): void {
    this.itemSubscription.unsubscribe();
  }

  onBack() {
    this.router.navigate(['/youtube']);
  }
}
