import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import AppRoutingModule from './app-routing.module';
import CoreModule from './core/core.module';

import AppComponent from './app.component';
import SearchInterceptor from './youtube/interceptors/search.interceptor';
import { reducer } from './redux/reducers/youtube.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    HttpClientModule,
    StoreModule.forRoot({ youtube: reducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: SearchInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export default class AppModule {}
