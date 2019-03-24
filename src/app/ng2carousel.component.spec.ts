import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng2carouselComponent } from './ng2carousel.component';

describe('Ng2carouselComponent', () => {
  let component: Ng2carouselComponent;
  let fixture: ComponentFixture<Ng2carouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng2carouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng2carouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
