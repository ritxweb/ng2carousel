<h1 align="center"> Angular 2+ Carousel </h1>

<hr/>

<p> Carousel Component for Angular 2+. Easily customizable, with autoscroll, loop and navigation controls.</p>

<h3> List of features </h3>

<ul>
  <li>Easily customizable</li>
  <li>Autoscroll</li>
  <li>Continuous loop</li>
  <li>Navigation indicators and controls</li>
  <li>Customizable number of slides</li>
  <li>Customizable direction of slides</li>
  <li>Customizable speed</li>
  <li>Slides margins</li>
</ul>

<h3> Demo </h3>

<a href="https://www.ritxweb.com/ng2carousel/"> Live Demo </a>

<h3> Code Demo </h3>

```html

<div class="ng2carousel-container">
  <ng2carousel timing="400ms ease-in" [showControls]="true" [autoScroll]="2000" showNavigation="radio" [slidesN]="4"
    [loop]="true" scrollDirection="left" [slidesMargin]="100">
    <ng-container *ngFor="let item of ng2carouselItems;">
      <ng-container *ng2carouselItem>
        <div class="ng2carousel-element">
            <!-- PLACE HERE YOUR SLIDE CONTENT -->
          {{item.title}}
        </div>
      </ng-container>
    </ng-container>
  </ng2carousel>
</div>

```

<h3> Download & Installation </h3>

```shell
$ npm i ng2carousel
```

<!--<h3>Contributing</h3>-->

<h3>Author</h3>
<ul>
  <li>Ricardo Villagra</li>
</ul>

<h3>License</h3>

This project is licensed under the MIT License
