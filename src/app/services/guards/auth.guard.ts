import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { UserService } from "../user.service";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private userSvc: UserService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {

    const auth = this.userSvc.isAuthenticated(next.queryParamMap.get('token'))
    if(!auth){
        document.location.href = 'https://0f57-103-136-95-139.ngrok.io/v1/login'
    }
    return auth
    // return new Promise<boolean>(()=>{
    //   const auth = this.userSvc.isAuthenticated(next.queryParamMap.get('token'))
    //     if(!auth){
    //         document.location.href = 'https://0f57-103-136-95-139.ngrok.io/v1/login'
    //     }
    //     return auth
    // })
  }
}
