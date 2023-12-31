import { ISearchResponse } from 'src/app/shared/models/search-response.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map, Observable, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ISearchItem } from 'src/app/shared/models/search-item.model';

@Injectable({
  providedIn: 'root',
})
export default class SearchService {
  constructor(private http: HttpClient) {}
  searchValue$ = new BehaviorSubject('');

  isSearched = false;
  items$: Observable<ISearchItem[]> = this.searchValue$.pipe(
    filter((val) => val.trim().length > 2),
    switchMap((searchString) => this.getVideosIds(searchString)),
    switchMap((idsString) => this.getVideosById(idsString)),
  );

  getVideosIds(searchWordValue: string) {
    return this.http
      .get<ISearchResponse>('search', {
        params: {
          maxResults: 15,
          part: 'snippet',
          q: searchWordValue,
        },
      })
      .pipe(
        map((response: ISearchResponse) =>
          response.items.map((item) => item.id.videoId).join(','),
        ),
      );
  }

  getVideosById(id: string) {
    return this.http
      .get<ISearchResponse>('videos', {
        params: {
          id,
          part: 'snippet,statistics',
        },
      })
      .pipe(map((result) => result.items));
  }
}
