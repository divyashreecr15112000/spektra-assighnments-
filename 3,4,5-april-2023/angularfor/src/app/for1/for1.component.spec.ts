import { ComponentFixture, TestBed } from '@angular/core/testing';

import { For1Component } from './for1.component';

describe('For1Component', () => {
  let component: For1Component;
  let fixture: ComponentFixture<For1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ For1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(For1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
