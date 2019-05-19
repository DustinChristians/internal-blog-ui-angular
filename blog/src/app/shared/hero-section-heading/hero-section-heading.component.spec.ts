import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSectionHeadingComponent } from './hero-section-heading.component';

describe('HeroSectionHeadingComponent', () => {
  let component: HeroSectionHeadingComponent;
  let fixture: ComponentFixture<HeroSectionHeadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroSectionHeadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroSectionHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
