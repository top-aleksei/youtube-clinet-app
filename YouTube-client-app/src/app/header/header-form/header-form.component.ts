import { Component, EventEmitter, Output } from '@angular/core';
import { StartSearch } from '../../models/start-search.model';

@Component({
  selector: 'app-header-form',
  templateUrl: './header-form.component.html',
  styleUrls: ['./header-form.component.scss'],
})
export class HeaderFormComponent {
  @Output() startSearchEmit = new EventEmitter<StartSearch>();
  searchParams = {
    startSearch: false,
    inputValue: '',
  };

  onClickSearch() {
    this.searchParams.startSearch = true;
    this.startSearchEmit.emit(this.searchParams);
  }
}
