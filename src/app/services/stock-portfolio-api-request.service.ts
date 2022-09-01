import { Observable } from 'rxjs';
import { ApiRequestService } from './api-request.service';

import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class SrockPortfolioApiRequestService {

constructor (private requestService: ApiRequestService) {}

  public getStockData(request: StockDataRequest): Observable<ApiResponse> {
      return this.requestService.getStockData(request)
  }
}

export class ApiResponse {}

export class StockDataRequest {}

