import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterDisplayComponent } from './letter-display.component';

describe('LetterDisplayComponent', () => {
  let component: LetterDisplayComponent;
  let fixture: ComponentFixture<LetterDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetterDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
