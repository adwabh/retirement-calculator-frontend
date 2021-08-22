import { RetcalcComponent } from './retcalc/retcalc.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/guards/auth.guard';

const routes: Routes = [
  {
    path: "v1/dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "v1/retcalc",
    component: RetcalcComponent
  },
  {
    path: "",
    redirectTo: "v1/retcalc",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
