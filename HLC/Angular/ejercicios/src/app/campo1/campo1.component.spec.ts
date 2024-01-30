import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Campo1Component } from './campo1.component';

describe('Campo1Component', () => {
  let component: Campo1Component;
  let fixture: ComponentFixture<Campo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Campo1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Campo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
