import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { Ng2CustomCarouselComponent, Ng2CustomCarouselItemElement } from './ng2-custom-carousel.component';
import { Ng2CustomCarouselItemDirective } from './ng2-custom-carousel-item.directive';



@NgModule({
  declarations: [
    Ng2CustomCarouselComponent,
    Ng2CustomCarouselItemElement,
    Ng2CustomCarouselItemDirective
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule
  ],
  exports: [
    Ng2CustomCarouselComponent,
    Ng2CustomCarouselItemDirective
  ]
})
export class Ng2CustomCarouselModule { }
