import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { SharedModule } from "../shared/shared.module";
import { FormsModule } from "@angular/forms";
import { ComponentsModule } from "../components/components.module";
import { ChartsModule } from "ng2-charts";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { ChartsComponent } from "./charts/charts.component";
import { PagesComponent } from "./pages.component";
import { ProgressComponent } from "./progress/progress.component";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ChartsComponent,
        ProgressComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule,
        FormsModule,
        ComponentsModule,
        ChartsModule
    ],
    exports: [
        PagesComponent,
        DashboardComponent,
        ChartsComponent,
        ProgressComponent
    ]
})
export class PagesModule { }