import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import SortingFiltersComponent from './components/header/sorting-filters/sorting-filters.component';
import LoginInfoComponent from './components/header/login-info/login-info.component';
import HeaderComponent from './components/header/header.component';
import HeaderFormComponent from './components/header/header-form/header-form.component';
import NotFoundComponent from './pages/not-found/not-found.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderFormComponent,
    LoginInfoComponent,
    SortingFiltersComponent,
    NotFoundComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [HeaderComponent],
})
export default class CoreModule {}
