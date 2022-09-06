import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiResponse, StockResponse, StockDataRequest, SrockPortfolioApiRequestService } from '../services/stock-portfolio-api-request.service';

@Component({
  selector: 'app-stockhealth-table',
  templateUrl: './stock-health-table-component.component.html',
  styleUrls: ['./stock-health-table-component.component.scss']
})
export class StockHealthTableComponentComponent implements OnInit , OnDestroy{
  private subscription: Subscription | undefined;
  request = new StockDataRequest("12344")
  stocks$ = this.stockService.getStockData(this.request).pipe(
    map((val)=> {
      return val.data.portfolio.equity
    })
  );

  constructor(private stockService: SrockPortfolioApiRequestService) { }
  ngOnDestroy(): void {
      this.subscription?.unsubscribe()
  }

  ngOnInit(): void {
    this.subscription = this.stockService.getStockData(this.request).subscribe(
        (val)=> {
          console.log("equity = " + JSON.stringify(val.data.portfolio.equity[0]))
        }
      )
  }

}
