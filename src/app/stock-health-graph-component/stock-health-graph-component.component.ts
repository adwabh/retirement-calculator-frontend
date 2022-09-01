import { Component, OnInit } from '@angular/core';
import { SrockPortfolioApiRequestService } from '../services/stock-portfolio-api-request.service';

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

  constructor(private stockService: SrockPortfolioApiRequestService) {
    Object.assign(this, this.multi);
  }

  onSelect(event: Event) {
    console.log(event);
  }

  ngOnInit(): void {
  }

}
