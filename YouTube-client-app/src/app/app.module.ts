import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { HeaderFormComponent } from './header/header-form/header-form.component';
import { SearchResultsComponent } from './search/search-results/search-results.component';
import { SearchItemComponent } from './search/search-item/search-item.component';
import { LoginInfoComponent } from './header/login-info/login-info.component';
import { SortingFiltersComponent } from './header/sorting-filters/sorting-filters.component';
import { SortingPipe } from './pipes/sorting.pipe';
import { WordfilterPipe } from './pipes/wordfilter.pipe';
import { DateInfoDirective } from './directives/date-info.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchResultsComponent,
    SearchItemComponent,
    HeaderFormComponent,
    LoginInfoComponent,
    SortingFiltersComponent,
    SortingPipe,
    WordfilterPipe,
    DateInfoDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
