import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Ng2CustomCarouselComponent, Ng2CustomCarouselItemElement } from './ng2-custom-carousel.component';
import { Ng2CustomCarouselItemDirective } from './ng2-custom-carousel-item.directive';

@NgModule({
  declarations: [
    Ng2CustomCarouselComponent,
    Ng2CustomCarouselItemElement,
    Ng2CustomCarouselItemDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    Ng2CustomCarouselComponent,
    Ng2CustomCarouselItemDirective
  ]
})
export class Ng2CustomCarouselModule { }
