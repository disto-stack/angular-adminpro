import { Component } from '@angular/core';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-graphic',
  templateUrl: './charts.component.html',
  styles: [
  ]
})
export class ChartsComponent {

  doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  doughnutChartData: MultiDataSet = [
    [350, 450, 100]
  ];
  chartColors: Color[] = [
    { backgroundColor: ['#6857E6', '#009FEE', '#F02059'] }
  ]

}
