import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { SharedModule } from "../shared/shared.module";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { GraphicComponent } from "./graphic/graphic.component";
import { PagesComponent } from "./pages.component";
import { ProgressBarComponent } from "./progress-bar/progress-bar.component";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        GraphicComponent,
        ProgressBarComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule
    ],
    exports: [
        PagesComponent,
        DashboardComponent,
        GraphicComponent,
        ProgressBarComponent
    ]
})
export class PagesModule { }