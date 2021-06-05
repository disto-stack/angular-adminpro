import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartsComponent } from './charts/charts.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const routes: Routes = [
  { 
    path: 'dashboard',
    component: PagesComponent, 
    children: [
      { path: '', component: DashboardComponent, data: {title: 'Dashboard'} },
      { path: 'charts', component: ChartsComponent, data: {title: 'Charts'} },
      { path: 'progress', component: ProgressComponent, data: {title: 'Progress bar'}  },
      { path: 'account-settings', component: AccountSettingsComponent, data: {title: 'Account Settings'} },
      { path: 'promises', component: PromisesComponent, data: {title: 'Promises'} }, 
      { path: 'rxjs', component: RxjsComponent, data: {title: 'Rxjs'} }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
