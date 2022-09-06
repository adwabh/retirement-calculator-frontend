import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiResponse, StockResponse, StockDataRequest, SrockPortfolioApiRequestService } from '../services/stock-portfolio-api-request.service';

@Component({
  selector: 'app-stockhealth-table',
  templateUrl: './stock-health-table-component.component.html',
  styleUrls: ['./stock-health-table-component.component.scss']
})
export class StockHealthTableComponentComponent implements OnInit {

  request = new StockDataRequest("12344")
  stocks$ = this.stockService.getStockData(this.request).pipe(
    map((val)=> {
      return val.data.equity
    })
  );

  constructor(private stockService: SrockPortfolioApiRequestService) { }

  ngOnInit(): void {

  }

}
