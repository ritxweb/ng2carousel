import { NgModule } from '@angular/core';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { FormsModule } from '@angular/forms';

import { Ng2CarouselComponent, Ng2CarouselItemElement } from './ng2-carousel.component';
import { Ng2CarouselItemDirective } from './ng2-carousel-item.directive';

@NgModule({
  declarations: [
    Ng2CarouselComponent,
    Ng2CarouselItemElement,
    Ng2CarouselItemDirective
  ],
  imports: [
    //BrowserAnimationsModule,
    //FormsModule
  ],
  exports: [
    Ng2CarouselComponent,
    Ng2CarouselItemDirective
  ]
})
export class Ng2CarouselModule { }
