import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

import { IncreasingComponent } from './increasing/increasing.component';
import { DonutChartComponent } from './donut-chart/donut-chart.component';



@NgModule({
  declarations: [
    IncreasingComponent,
    DonutChartComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule
  ],
  exports: [
    IncreasingComponent,
    DonutChartComponent
  ]
})
export class ComponentsModule { }
