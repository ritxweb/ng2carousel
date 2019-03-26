import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng2CarouselComponent } from './ng2-carousel.component';

describe('Ng2CarouselComponent', () => {
  let component: Ng2CarouselComponent;
  let fixture: ComponentFixture<Ng2CarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng2CarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng2CarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
