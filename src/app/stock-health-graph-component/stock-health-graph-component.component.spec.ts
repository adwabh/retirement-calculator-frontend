import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockHealthGraphComponentComponent } from './stock-health-graph-component.component';

describe('StockHealthGraphComponentComponent', () => {
  let component: StockHealthGraphComponentComponent;
  let fixture: ComponentFixture<StockHealthGraphComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockHealthGraphComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockHealthGraphComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
