import { StepTwoComponent } from './step-two/step-two.component';
import { StockPortfolioComponent } from './stock-portfolio/stock-portfolio.component';
import { RetcalcComponent } from './retcalc/retcalc.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/guards/auth.guard';
import { RecalcBasicComponent } from './recalc-basic/recalc-basic.component';

const routes: Routes = [
  {
    path: "v1/stockhealth",
    component: StockPortfolioComponent
  },
  {
    path: "v1/dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "v1/retcalc",
    component: RetcalcComponent,

  },
  {
    path: "v1/retcalc-recalc-basic",
    component: RecalcBasicComponent,
    children: [
      {
        path: '',
        component: RetcalcComponent
      },
      {
        path: 'step2',
        component: StepTwoComponent
      }
    ]
  },
  {
    path: "",
    redirectTo: "v1/retcalc-recalc-basic",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
