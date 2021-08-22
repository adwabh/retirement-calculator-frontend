import { Injectable } from "@angular/core";
import { ApiRequestService } from "./api-request.service";
import { environment } from "src/environments/environment";

export type Balance = {
  dollars: number;
  cents: number;
};
@Injectable({
  providedIn: "root"
})
export class BalanceService {
  constructor(private api: ApiRequestService) {}

  getUserBalance() {
    return this.api.sendRequest<Balance>(
      "GET",
      `${environment.backendUrl}`
    );
  }
}
