import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { SharedModule } from "../shared/shared.module";
import { FormsModule } from "@angular/forms";
import { ComponentsModule } from "../components/components.module";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { GraphicComponent } from "./graphic/graphic.component";
import { PagesComponent } from "./pages.component";
import { ProgressComponent } from "./progress/progress.component";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        GraphicComponent,
        ProgressComponent
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
        GraphicComponent,
        ProgressComponent
    ]
})
export class PagesModule { }