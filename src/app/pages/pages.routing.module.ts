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
      { path: '', component: DashboardComponent },
      { path: 'charts', component: ChartsComponent },
      { path: 'progress', component: ProgressComponent  },
      { path: 'account-settings', component: AccountSettingsComponent },
      { path: 'promises', component: PromisesComponent }, 
      { path: 'rxjs', component: RxjsComponent }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
