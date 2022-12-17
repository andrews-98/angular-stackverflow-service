import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerCounterComponent } from './answer-counter.component';

describe('AnswerCounterComponent', () => {
  let component: AnswerCounterComponent;
  let fixture: ComponentFixture<AnswerCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnswerCounterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnswerCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
