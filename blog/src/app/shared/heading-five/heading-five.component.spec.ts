import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadingFiveComponent } from './heading-five.component';

describe('HeadingFiveComponent', () => {
  let component: HeadingFiveComponent;
  let fixture: ComponentFixture<HeadingFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadingFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadingFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
