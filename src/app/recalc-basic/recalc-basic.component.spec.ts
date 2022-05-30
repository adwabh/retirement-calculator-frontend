import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecalcBasicComponent } from './recalc-basic.component';

describe('RecalcBasicComponent', () => {
  let component: RecalcBasicComponent;
  let fixture: ComponentFixture<RecalcBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecalcBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecalcBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
