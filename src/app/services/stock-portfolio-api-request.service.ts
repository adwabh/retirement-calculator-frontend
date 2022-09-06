import { Observable } from 'rxjs';
import { ApiRequestService } from './api-request.service';

import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class SrockPortfolioApiRequestService {

constructor (private requestService: ApiRequestService) {}

  public getStockData(request: StockDataRequest): Observable<ApiResponse<StockResponse>> {
      return this.requestService.getStockData(request)
  }

}

export class StockResponse {
  constructor(
    public profile: ProfileData[],
    public portfolio: Portfolio,
    public wishlist: StockData[]
    ) {}
}

export class Portfolio {
  constructor(
    public equity: StockData[],
    public statistics: PortfolioStats
  ) {}
}

export class PortfolioStats {
  constructor(
      public invested: number,
      public curren_value: number,
      public profit_loss: number
  ) {}
}

export class ApiResponse<T> {

  constructor(
    public success: boolean,
    public errors: Error[],
    public data: T
  ) {
  }

  isSuccess():boolean {
    return this.success
  }

}

export class Error {}

export class ProfileData {}

export class StockData {
  constructor(
    public id: String,
    public name: String,
    public last_traded_price: String,
    public avg: number,
    public market_cap: String,
    public sector: String,
    public holding_time: number,
    public health?: number
    ) {}
}
export class StockDataRequest {

  constructor(private id: String) {

  }
}
