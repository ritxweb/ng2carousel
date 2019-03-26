import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2CarouselModule} from 'ng2-carousel';

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
