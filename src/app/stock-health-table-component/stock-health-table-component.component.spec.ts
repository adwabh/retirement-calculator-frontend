import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockHealthTableComponentComponent } from './stock-health-table-component.component';

describe('StockHealthTableComponentComponent', () => {
  let component: StockHealthTableComponentComponent;
  let fixture: ComponentFixture<StockHealthTableComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockHealthTableComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockHealthTableComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
