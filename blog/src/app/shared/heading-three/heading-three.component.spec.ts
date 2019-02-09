import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadingThreeComponent } from './heading-three.component';

describe('HeadingThreeComponent', () => {
  let component: HeadingThreeComponent;
  let fixture: ComponentFixture<HeadingThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadingThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadingThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
