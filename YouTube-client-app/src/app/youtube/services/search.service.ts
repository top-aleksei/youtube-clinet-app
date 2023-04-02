import { SearchResponse } from 'src/app/shared/models/search-response.model';
import { Injectable } from '@angular/core';
import data from '../../shared/response.json';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  data: SearchResponse = data;
  isSearched = false;

  getItemById(id: string) {
    return this.data.items.find((item) => item.id === id);
  }
}
