import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedTermComponent } from './featured-term.component';

describe('FeaturedTermComponent', () => {
  let component: FeaturedTermComponent;
  let fixture: ComponentFixture<FeaturedTermComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedTermComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedTermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
