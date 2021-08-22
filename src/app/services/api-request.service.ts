import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ApiRequestService {
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
