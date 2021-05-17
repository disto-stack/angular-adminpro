import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { DashboardComponent } from './dashboard/dashboard.component';
import { GraphicComponent } from './graphic/graphic.component';
import { PagesComponent } from './pages.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

const routes: Routes = [
  { 
    path: 'dashboard',
    component: PagesComponent, 
    children: [
      { path: '', component: DashboardComponent },
      { path: 'graphic', component: GraphicComponent },
      { path: 'progress', component: ProgressBarComponent  },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
