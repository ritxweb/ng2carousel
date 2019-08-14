import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { Ng2CustomCarouselModule } from 'ng2-custom-carousel';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    Ng2CustomCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
