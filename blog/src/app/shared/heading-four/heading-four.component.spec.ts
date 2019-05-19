import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadingFourComponent } from './heading-four.component';

describe('HeadingFourComponent', () => {
  let component: HeadingFourComponent;
  let fixture: ComponentFixture<HeadingFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadingFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadingFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
