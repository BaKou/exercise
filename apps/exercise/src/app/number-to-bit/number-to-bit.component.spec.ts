import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberToBitComponent } from './number-to-bit.component';

describe('NumberToBitComponent', () => {
  let component: NumberToBitComponent;
  let fixture: ComponentFixture<NumberToBitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberToBitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberToBitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
