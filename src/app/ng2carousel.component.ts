import { AfterViewInit, Component, ContentChildren, Directive, ElementRef, Input, QueryList, TemplateRef, ViewChild, ViewChildren, AfterContentInit, HostListener, OnDestroy } from '@angular/core';
import { Ng2carouselItemDirective } from './ng2carousel-item.directive';
import { animate, AnimationBuilder, AnimationFactory, AnimationPlayer, style } from '@angular/animations';

@Directive({
  selector: '.ng2carousel-item'
})
export class Ng2carouselItemElement {
}

@Component({
  selector: 'ng2carousel',
  template: `
    <section class="ng2carousel-wrapper" [ngStyle]="ng2carouselWrapperStyle" (mouseenter)="stopScrool()" (mouseleave)="startScroll()">
      <ul class="ng2carousel-inner" #ng2carousel>
        <li *ngFor="let item of items;" class="ng2carousel-item" [ngStyle]="{'marginRight': slidesMargin + 'px'}">
          <ng-container [ngTemplateOutlet]="item.tpl"></ng-container>
        </li>
      </ul>
    </section>
    <div [ngStyle]="ng2carouselControlsStyle">
      <div class="ng2carousel-controls">
        <button *ngIf="showControls" (click)="goToSlide(currentSlide - 1)">Prev</button>
        <div *ngIf="showNavigation === 'numbers'" class="ng2carousel-navigation">
          <button *ngFor="let item of navigationIndexes, let i = index" (click)="goToSlide(i + (loop? 2 : 0))" [class.ng2carouselSlideSelected]="i === currentSlideShown">{{i + 1}}</button>
        </div>
        <form #searchPackDiscountForm="ngForm" *ngIf="showNavigation === 'radio'" class="ng2carousel-navigation">
          <input *ngFor="let item of navigationIndexes, let i = index" type="radio" name="currentSlideShown" [(ngModel)]="currentSlideString" value="{{i}}">
        </form>
        <button *ngIf="showControls" (click)="goToSlide(currentSlide + 1)">Next</button>
      </div>
    </div>
  `,
  styles: [`
    .ng2carousel-wrapper {
      overflow: hidden;
    }

    .ng2carousel-inner {
      position: relative;
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .ng2carousel-controls {
      margin: auto;
      width: fit-content;
    }

    .ng2carousel-navigation {
      display: inline;
      margin: 0px 20px;
    }

    .ng2carouselSlideSelected {
      background-color: grey;
    }

  `]
})
export class Ng2carouselComponent implements AfterViewInit, AfterContentInit, OnDestroy {

  constructor(private builder: AnimationBuilder) {
  }

  get currentSlideString(): string {
    return this.currentSlideShown.toString();
  }

  set currentSlideString(index: string) {
    this.goToSlide(+index + (this.loop ? 2 : 0));
  }
  @ContentChildren(Ng2carouselItemDirective) items: QueryList<Ng2carouselItemDirective>;
  @ViewChildren(Ng2carouselItemElement, { read: ElementRef }) private itemsElements: QueryList<ElementRef>;
  @ViewChild('ng2carousel') private ng2carousel: ElementRef;
  @Input() timing = '250ms ease-in';
  @Input() showControls = true;
  @Input() showNavigation = 'radio'; // radio, numbers, none
  @Input() autoScroll = 0; // miliseconds
  @Input() loop = false;
  @Input() slidesN = 0;
  @Input() scrollDirection = 'left'; // left, right
  @Input() slidesMargin = 0;
  private player: AnimationPlayer;
  private playerRestart: AnimationPlayer;
  private playerReend: AnimationPlayer;
  private itemWidth: number;
  public currentSlide = 0;
  public currentSlideShown = 0;
  ng2carouselWrapperStyle = {};
  ng2carouselControlsStyle = {};
  public navigationIndexes: number[] = [];
  private intervalTransition;
  private scrollLimit = 0;
  @HostListener('window:resize', ['event'])
  onResize(event?) {
    let carouselWidth = 0;

    while ((window.innerWidth >= ((carouselWidth + this.itemWidth) - this.slidesMargin)) && (((carouselWidth + this.itemWidth) - this.slidesMargin) <= ((this.itemWidth * this.slidesN) - this.slidesMargin))) {
      carouselWidth = carouselWidth + this.itemWidth;
    }

    if (this.slidesMargin) { carouselWidth = carouselWidth - this.slidesMargin; }

    this.ng2carouselWrapperStyle = {
      width: carouselWidth + `px`
    };
    this.ng2carouselControlsStyle = {
      width: carouselWidth + `px`,
      marginTop: `1em`
    };
  }

  goToSlide(indexSlider: number) {
    let restart = false;
    let reend = false;
    const sliderDif = indexSlider - this.currentSlide;

    if (sliderDif === 0) {
      return;
    } else if (sliderDif > 0) {

      if ((!this.loop) && ((this.currentSlide + 1) === this.scrollLimit)) { return; }

      this.currentSlide = this.currentSlide + sliderDif;
      if ((this.currentSlide >= (this.items.length - this.slidesN)) && (this.loop)) {
        this.currentSlideShown = (this.items.length - this.slidesN) - 2;
      } else {
        this.currentSlideShown = this.currentSlide - (this.loop ? 2 : 0);
      }

      if (this.loop) {
        if (this.currentSlide === ((this.items.length - this.slidesN))) {
          restart = true;
        }
      }

    } else {

      if ((!this.loop) && (this.currentSlide === 0)) { return; }

      this.currentSlide = this.currentSlide + sliderDif;

      if (this.loop) {
        if (this.currentSlide < 2) {
          this.currentSlideShown = this.currentSlide + (this.scrollLimit - 2);
        } else {
          this.currentSlideShown = this.currentSlide - 2;
        }
      } else { this.currentSlideShown = this.currentSlide; }

      if (this.loop) {
        if (this.currentSlide === 0) {
          reend = true;
        }
      }
    }

    const offset = this.currentSlide * this.itemWidth;
    const myAnimation: AnimationFactory = this.buildAnimation(offset);
    this.player = myAnimation.create(this.ng2carousel.nativeElement);
    this.player.play();

    if (restart) {
      this.player.onDone(() => {
        this.currentSlide = 1;
        this.currentSlideShown = (this.items.length - this.slidesN) - 2;
        const myAnimationAux: AnimationFactory = this.buildAnimationStart();
        this.playerRestart = myAnimationAux.create(this.ng2carousel.nativeElement);
        this.playerRestart.play();
      });

    }

    if (reend) {
      this.player.onDone(() => {
        this.currentSlide = (this.items.length - this.slidesN) - 1;
        this.currentSlideShown = this.currentSlide - 2;
        const myAnimationAux: AnimationFactory = this.buildAnimationEnd();
        this.playerReend = myAnimationAux.create(this.ng2carousel.nativeElement);
        this.playerReend.play();
      });

    }

    this.stopScrool();
    this.startScroll();

  }

  private buildAnimation(offset: number) {
    return this.builder.build([
      animate(this.timing, style({ left: `-` + offset + `px` }))
    ]);
  }

  private buildAnimationStart() {
    return this.builder.build([
      animate('1ms ease-in', style({ left: `-` + this.itemWidth + `px` }))
    ]);
  }

  private buildAnimationEnd() {
    return this.builder.build([
      animate('1ms ease-in', style({ left: `-` + (this.itemWidth * ((this.items.length - this.slidesN) - 1)) + `px` }))
    ]);
  }

  public stopScrool() {
    if (this.autoScroll > 0) {
      clearInterval(this.intervalTransition);
    }
  }

  public startScroll() {
    if (this.autoScroll > 0) {
      this.intervalTransition = setInterval(() => {
        if (this.scrollDirection === 'right') {
          this.goToSlide(this.currentSlide - 1);
        } else {
          this.goToSlide(this.currentSlide + 1);
        }
      }, this.autoScroll);
    }
  }

  ngAfterContentInit() {
    if (this.slidesN === 0) { this.slidesN = this.items.length; }

    if (this.items.length <= this.slidesN) {
      this.slidesN = this.items.length;
    }

    this.startScroll();
  }

  ngAfterViewInit() {

    this.scrollLimit = this.items.length;
    if (!this.loop) { this.scrollLimit = (this.items.length - this.slidesN) + 1; }

    for (let i = 0; i < this.scrollLimit; i++) { this.navigationIndexes.push(i); }

    this.itemWidth = this.itemsElements.first.nativeElement.getBoundingClientRect().width + (this.slidesMargin ? this.slidesMargin : 0);

    this.onResize();

    if (this.loop) {
      const lastSlice = this.items.length - 1;
      const addedSlices = [];
      for (let i = 0; i < (this.slidesN - 1); i++) {
        addedSlices.push(this.items.toArray()[i]);
      }
      this.items.reset([this.items.toArray()[lastSlice - 1], this.items.toArray()[lastSlice], this.items.toArray(), addedSlices]);

      this.currentSlide = 2;
      this.ng2carousel.nativeElement.style.left = '-' + (2 * this.itemWidth) + 'px';
    }

    this.ng2carousel.nativeElement.style.width = ((this.itemWidth * this.items.length) - this.slidesMargin) + `px`;

  }

  ngOnDestroy() {
    clearTimeout(this.intervalTransition);
  }

}
