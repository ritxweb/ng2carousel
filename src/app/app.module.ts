import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Ng2CustomCarouselModule } from 'ng2-custom-carousel';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Ng2CustomCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
