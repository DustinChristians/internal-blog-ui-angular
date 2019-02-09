import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadingSixComponent } from './heading-six.component';

describe('HeadingSixComponent', () => {
  let component: HeadingSixComponent;
  let fixture: ComponentFixture<HeadingSixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadingSixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadingSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
