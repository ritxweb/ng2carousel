import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[ng2carouselItem]'
})
export class Ng2CarouselItemDirective {

  constructor(public tpl: TemplateRef<any>) {
  }

}
