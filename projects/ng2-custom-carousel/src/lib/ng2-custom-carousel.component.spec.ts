import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng2CustomCarouselComponent } from './ng2-custom-carousel.component';

describe('Ng2CustomCarouselComponent', () => {
  let component: Ng2CustomCarouselComponent;
  let fixture: ComponentFixture<Ng2CustomCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng2CustomCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng2CustomCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
