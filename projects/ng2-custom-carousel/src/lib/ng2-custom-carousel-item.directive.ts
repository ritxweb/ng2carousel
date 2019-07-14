import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[ng2CustomCarouselItem]'
})
export class Ng2CustomCarouselItemDirective {

  constructor(public tpl: TemplateRef<any>) {
  }

}
