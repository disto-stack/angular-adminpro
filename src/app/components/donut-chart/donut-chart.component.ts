import { Component, Input } from '@angular/core';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styles: [
  ]
})
export class DonutChartComponent {
  @Input() title: string = "Donut Chart";
  @Input('labels') doughnutChartLabels: Label[] = ['Label 1', 'Label 2', 'Label 3'];
  @Input('labels-data') doughnutChartData: MultiDataSet = [
    [100, 100, 100]
  ];

  chartColors: Color[] = [
    { backgroundColor: ['#6857E6', '#009FEE', '#F02059'] }
  ]

}
