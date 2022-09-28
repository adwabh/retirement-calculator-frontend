import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { BrowserModule, HAMMER_GESTURE_CONFIG, HammerModule, HammerGestureConfig} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RetcalcComponent } from './retcalc/retcalc.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from './material/material.module';
import { RecalcBasicComponent } from './recalc-basic/recalc-basic.component';
import { StockPortfolioComponent } from './stock-portfolio/stock-portfolio.component';
import { StockHealthTitleNavigationComponent } from './stock-health-title-navigation/stock-health-title-navigation.component';
import { StockHealthGraphComponentComponent } from './stock-health-graph-component/stock-health-graph-component.component';
import { StockHealthTableComponentComponent } from './stock-health-table-component/stock-health-table-component.component';
import { StockHealthInsightsComponentComponent } from './stock-health-insights-component/stock-health-insights-component.component';
import { NgxChartsModule }from '@swimlane/ngx-charts';
import { LoggingInterceptor } from './networkutils/logging-interceptor';
import { StepTwoComponent } from './step-two/step-two.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DashboardComponent,
    RetcalcComponent,
    RecalcBasicComponent,
    StockPortfolioComponent,
    StockHealthTitleNavigationComponent,
    StockHealthGraphComponentComponent,
    StockHealthTableComponentComponent,
    StockHealthInsightsComponentComponent,
    StepTwoComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    MaterialModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    NgxChartsModule,
  ],
  providers: [
    { provide: HAMMER_GESTURE_CONFIG, useClass: HammerGestureConfig },
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
