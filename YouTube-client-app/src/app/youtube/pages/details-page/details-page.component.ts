import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchItem } from 'src/app/shared/models/search-item.model';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss'],
})
export class DetailsPageComponent {
  id!: string;
  item: SearchItem | undefined;
  constructor(
    private activateRout: ActivatedRoute,
    private searchService: SearchService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.id = this.activateRout.snapshot.params['id'];
    this.item = this.searchService.getItemById(this.id);
    console.log(this.item);
  }

  onBack() {
    this.router.navigate(['/youtube']);
  }
}
