import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import SearchItemComponent from './components/search-item/search-item.component';
import SearchResultsComponent from './components/search-results/search-results.component';
import SortingPipe from './pipes/sorting.pipe';
import WordfilterPipe from './pipes/wordfilter.pipe';
import DateInfoDirective from './directives/date-info.directive';
import YoutubeRoutingModule from './youtube-routing.module';
import DetailsPageComponent from './pages/details-page/details-page.component';
import ResultsPageComponent from './pages/results-page/results-page.component';
import YoutubeComponent from './youtube.component';

@NgModule({
  declarations: [
    SearchItemComponent,
    SearchResultsComponent,
    SortingPipe,
    WordfilterPipe,
    DateInfoDirective,
    DetailsPageComponent,
    ResultsPageComponent,
    YoutubeComponent,
  ],
  imports: [CommonModule, MatCardModule, YoutubeRoutingModule],
})
export default class YoutubeModule {}
