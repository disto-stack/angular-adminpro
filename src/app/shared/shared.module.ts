import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { BreadcrumsComponent } from './breadcrums/breadcrums.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    HeaderComponent,
    BreadcrumsComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    BreadcrumsComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
