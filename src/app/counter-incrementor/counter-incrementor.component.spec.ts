import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterIncrementorComponent } from './counter-incrementor.component';

describe('CounterIncrementorComponent', () => {
  let component: CounterIncrementorComponent;
  let fixture: ComponentFixture<CounterIncrementorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterIncrementorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterIncrementorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
