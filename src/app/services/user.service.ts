import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { ApiRequestService } from "./api-request.service";

export class User {
  constructor(
    public id: number,
    public first: string,
    public last: string,
    public username: string
  ) {}
}

export type UserPayload = {
  user: User;
  token: string;
};

@Injectable({
  providedIn: "root"
})
export class UserService {
  public user: User | null;

  constructor(private api: ApiRequestService) {
    this.user = null;
  }

  isAuthenticated(token: any) {
      if(token != null) return true
      else return false
  }

  async login(username: any, password: any) {
    const { user, token } = await this.api
      .sendRequest<UserPayload>("post", `${environment.backendUrl}`, {
        username,
        password
      })
      .toPromise();
    this.api.token = token;
    this.user = user;
    return user;
  }
}
