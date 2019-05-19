import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Blogpost.CategoryComponent } from './blogpost.category.component';

describe('Blogpost.CategoryComponent', () => {
  let component: Blogpost.CategoryComponent;
  let fixture: ComponentFixture<Blogpost.CategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Blogpost.CategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Blogpost.CategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
