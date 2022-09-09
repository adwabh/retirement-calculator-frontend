import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { PortfolioStats, SrockPortfolioApiRequestService, StockDataRequest } from '../services/stock-portfolio-api-request.service';

@Component({
  selector: 'app-stockhealth-graph',
  templateUrl: './stock-health-graph-component.component.html',
  styleUrls: ['./stock-health-graph-component.component.scss']
})
export class StockHealthGraphComponentComponent implements OnInit {

  multi = [
    {
      "name": "Germany",
      "series": [
        {
          "name": "2010",
          "value": 40632,
          "extra": {
            "code": "de"
          }
        },
        {
          "name": "2000",
          "value": 36953,
          "extra": {
            "code": "de"
          }
        },
        {
          "name": "1990",
          "value": 31476,
          "extra": {
            "code": "de"
          }
        }
      ]
    }
  ];

// TODO: make this dynamic
  view: [number, number] = [700, 100];

  // options
  showXAxis: boolean = false;
  showYAxis: boolean = false;
  gradient: boolean = false;
  showLegend: boolean = false;
  showXAxisLabel: boolean = false;
  yAxisLabel: string = '';
  showYAxisLabel: boolean = false;
  xAxisLabel: string = '';

  colorScheme = {
    domain: ['#5AA454', '#C7B42C', '#AAAAAA']
  };

  subscription?: Subscription;
  statistics: PortfolioStats = new PortfolioStats(
    0.0,
    0.0,
    0.0
  )
  request: StockDataRequest = new StockDataRequest("1234");
  graphData!: {};

  constructor(private stockService: SrockPortfolioApiRequestService) {
    Object.assign(this, this.multi);
  }

  onSelect(event: Event) {
    console.log(event);
  }

  ngOnInit(): void {
    this.subscription = this.stockService.getStockData(this.request).subscribe(
        (res) => {
          this.statistics = res.data.portfolio.statistics
          let equityData = res.data.portfolio.equity
          console.log("raw equity data = " + JSON.stringify(equityData))
          let data = equityData.map(
            (item) => (
              {
                ['name']: item.name,
                ['value']: item.last_traded_price
              }
            )
          )

          this.graphData = [{
            "name":"Portfolio",
            "series": data
          }];
          console.log("prep data = " + JSON.stringify(this.graphData))
          console.log("expected data = " + JSON.stringify(this.multi))
        },
        (err) => {}
    )

    console.log("data for graph is = " + JSON.stringify(this.graphData))
  }

}
