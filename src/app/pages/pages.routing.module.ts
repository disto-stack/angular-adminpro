import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartsComponent } from './charts/charts.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';

const routes: Routes = [
  { 
    path: 'dashboard',
    component: PagesComponent, 
    children: [
      { path: '', component: DashboardComponent },
      { path: 'charts', component: ChartsComponent },
      { path: 'progress', component: ProgressComponent  },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
