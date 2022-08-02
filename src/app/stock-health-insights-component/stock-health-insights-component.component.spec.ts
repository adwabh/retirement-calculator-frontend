import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockHealthInsightsComponentComponent } from './stock-health-insights-component.component';

describe('StockHealthInsightsComponentComponent', () => {
  let component: StockHealthInsightsComponentComponent;
  let fixture: ComponentFixture<StockHealthInsightsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockHealthInsightsComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockHealthInsightsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
