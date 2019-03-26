# Ng2Carousel

* Carousel `component` for Angular 2+. Easily customizable, with autoscroll, loop and navigation controls.
* List of features
* - Easily customizable.
* - Autoscroll.
* - Continuous loop.
* - Navigation indicators and controls.
* - Customizable number of visible slides.
* - Customizable direction of scroll.
* - Customizable speed of scroll.
* - Slides margins.

## Examples/Demo

* Live Demo: <a href="https://www.ritxweb.com/ng2carousel/">https://www.ritxweb.com/ng2carousel/</a>

## Installation

`npm i ng2carousel`

## API

`import { Ng2CarouselModule } from 'ng2carousel'`<br>
`selector: ng2carousel`

### @Inputs()

| Input            | Type    | Required                           | Description                                                                                  |
| ---------------- | ------- | ---------------------------------- | -------------------------------------------------------------------------------------------- |
| timing           | string  | Optional, default: '250ms ease-in' | the time and type of transition between slides.                                              |
| showControls     | boolean | Optional, default: true            | if true shows the 'next' and 'prev' navigation controls.                                     |
| showNavigation   | string  | Optional, default: 'radio'         | choose the type of navigation indicators between 'radio', 'numbers' or 'none'                |
| autoScroll       | number  | Optional, default: 0               | number of milliseconds between navigation of slides automatically, 0 for no auto navigation. |
| loop             | boolean | Optional, default: true            | if true the carousel runs in continuous loop.                                                |
| slidesN          | number  | Optional, default: 0               | max number of slides to show, 0 to show all the slides possible.                             |
| scrollDirection  | string  | Optional, default: 'left'          | choose the direction of the autoscroll between 'left' or 'right'.                            |
| slidesMargin     | number  | Optional, default: 0               | number of pixels of margin between slides.                                                   |

## Usage

1) Register the `Ng2Carousel` in your app module.
 > `import { Ng2CarouselModule} from 'ng2carousel'`

 ```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2CarouselModule} from 'ng2carousel';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Ng2CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 ```

 2) Use the selector `(ng2carousel)` in your component.

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: `
  <div class="ng2carousel-container">
    <ng2carousel timing="400ms ease-in" [showControls]="true" [autoScroll]="2000" showNavigation="radio" [slidesN]="4" [loop]="true" scrollDirection="left" [slidesMargin]="100">
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
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ng2carouselItems = [
    { title: 'Slide 1' },
    { title: 'Slide 2' },
    { title: 'Slide 3' },
    { title: 'Slide 4' },
    { title: 'Slide 5' },
    { title: 'Slide 6' },
    { title: 'Slide 7' },
    { title: 'Slide 8' },
    { title: 'Slide 9' },
    { title: 'Slide 10' },
    { title: 'Slide 11' }
  ];
}
```

## Running the example in local env

* `npm i`
* Run `ng serve` for a dev server and running the demo app. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build the Ng2Carousel module

Run `ng build Ng2Carousel` to build the module. The build artifacts will be stored in the `dist/ng2-carousel` directory.

## Running unit tests

Run `ng test Ng2Carousel` to execute the unit tests via [Karma](https://karma-runner.github.io).

## License

This project is licensed under the GNU General Public License v3.0.

## Credits

To my families.
