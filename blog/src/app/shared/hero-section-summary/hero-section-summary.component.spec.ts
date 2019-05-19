import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSectionSummaryComponent } from './hero-section-summary.component';

describe('HeroSectionSummaryComponent', () => {
  let component: HeroSectionSummaryComponent;
  let fixture: ComponentFixture<HeroSectionSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroSectionSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroSectionSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
