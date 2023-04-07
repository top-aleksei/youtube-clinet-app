import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export default class SearchInterceptor implements HttpInterceptor {
  private APIkey = 'AIzaSyAXypT39pz_WrnUU_WImog1PthZu2TCLvA';

  private baseURL = 'https://www.googleapis.com/youtube/v3/';

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    const searchRequest = request.clone({
      url: `${this.baseURL}${request.url}`,
      setParams: { key: this.APIkey },
    });
    return next.handle(searchRequest);
  }
}
