import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { StockDataRequest, StockResponse } from "./stock-portfolio-api-request.service";
import {ApiResponse} from "./stock-portfolio-api-request.service"
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: "root"
})
export class ApiRequestService {

  getStockData(request: StockDataRequest): Observable<ApiResponse<StockResponse>> {
    return this.sendRequest("GET", environment.backendUrl, request)
  }


  private _token!: string;
  set token(newVal: string) {
    this._token = newVal;
  }

  constructor(private http: HttpClient) {}

  public sendRequest<T>(verb: string, url: string, body?: any): Observable<T> {
    console.log("sending request to " + url);
    return this.http
      .request<T>(verb, url, {
        body,
        headers: new HttpHeaders({
          authorization: `Bearer ${this._token}`
        })
      })
      .pipe(
        
        catchError((error: Response) =>
          throwError(`Network Error: ${error.statusText} (${error.status})`)
        )
      );
  }
}
