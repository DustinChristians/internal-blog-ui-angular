import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadingTwoComponent } from './heading-two.component';

describe('HeadingTwoComponent', () => {
  let component: HeadingTwoComponent;
  let fixture: ComponentFixture<HeadingTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadingTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadingTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
