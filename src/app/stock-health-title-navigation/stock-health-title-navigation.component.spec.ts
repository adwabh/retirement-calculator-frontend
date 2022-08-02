import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockHealthTitleNavigationComponent } from './stock-health-title-navigation.component';

describe('StockHealthTitleNavigationComponent', () => {
  let component: StockHealthTitleNavigationComponent;
  let fixture: ComponentFixture<StockHealthTitleNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockHealthTitleNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockHealthTitleNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
