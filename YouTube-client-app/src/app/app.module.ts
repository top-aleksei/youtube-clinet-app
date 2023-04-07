import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import AppRoutingModule from './app-routing.module';
import CoreModule from './core/core.module';

import AppComponent from './app.component';
import SearchInterceptor from './youtube/interceptors/search.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: SearchInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export default class AppModule {}
