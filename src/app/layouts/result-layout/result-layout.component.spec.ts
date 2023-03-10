import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultLayoutComponent } from './result-layout.component';

describe('ResultLayoutComponent', () => {
  let component: ResultLayoutComponent;
  let fixture: ComponentFixture<ResultLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
