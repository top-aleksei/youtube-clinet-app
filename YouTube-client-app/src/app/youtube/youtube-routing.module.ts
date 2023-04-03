import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import SearchResultsComponent from './components/search-results/search-results.component';
import DetailsPageComponent from './pages/details-page/details-page.component';

const routes: Routes = [
  {
    path: '',
    component: SearchResultsComponent,
  },
  {
    path: ':id',
    component: DetailsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export default class YoutubeRoutingModule {}
