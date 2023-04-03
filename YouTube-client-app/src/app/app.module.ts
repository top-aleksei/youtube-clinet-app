import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import AppRoutingModule from './app-routing.module';
import CoreModule from './core/core.module';
import YoutubeModule from './youtube/youtube.module';

import AppComponent from './app.component';
import AuthModule from './auth/auth.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    CoreModule,
    YoutubeModule,
    AuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule {}
