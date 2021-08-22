import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserService } from "./user.service";
import { BalanceService } from "./balance.service";
import { HttpClientModule } from "@angular/common/http";
import { ApiRequestService } from "./api-request.service";
import { AuthGuard } from "./guards/auth.guard";

@NgModule({
  imports: [HttpClientModule],
  providers: [ApiRequestService, UserService, BalanceService, AuthGuard]
})
export class ServiceModule {}
