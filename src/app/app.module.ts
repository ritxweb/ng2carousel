import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Ng2carouselComponent, Ng2carouselItemElement } from './ng2carousel.component';
import { Ng2carouselItemDirective } from './ng2carousel-item.directive';

@NgModule({
  declarations: [
    AppComponent,
    Ng2carouselComponent,
    Ng2carouselItemElement,
    Ng2carouselItemDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
