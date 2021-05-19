import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { SharedModule } from "../shared/shared.module";
import { FormsModule } from "@angular/forms";
import { ComponentsModule } from "../components/components.module";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { ChartsComponent } from "./charts/charts.component";
import { PagesComponent } from "./pages.component";
import { ProgressComponent } from "./progress/progress.component";
import { RouterModule } from "@angular/router";
import { AccountSettingsComponent } from './account-settings/account-settings.component';

@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ChartsComponent,
        ProgressComponent,
        AccountSettingsComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule,
        FormsModule,
        ComponentsModule
    ],
    exports: [
        PagesComponent,
        DashboardComponent,
        ChartsComponent,
        ProgressComponent,
        AccountSettingsComponent
    ]
})
export class PagesModule { }