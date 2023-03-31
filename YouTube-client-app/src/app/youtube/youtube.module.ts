import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { SearchItemComponent } from './components/search-item/search-item.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SortingPipe } from './pipes/sorting.pipe';
import { WordfilterPipe } from './pipes/wordfilter.pipe';
import { DateInfoDirective } from './directives/date-info.directive';

@NgModule({
  declarations: [
    SearchItemComponent,
    SearchResultsComponent,
    SortingPipe,
    WordfilterPipe,
    DateInfoDirective,
  ],
  imports: [CommonModule, MatCardModule],
  exports: [SearchResultsComponent],
})
export class YoutubeModule {}
