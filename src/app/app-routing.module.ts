import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GraphicComponent } from './pages/graphic/graphic.component';
import { NotpagefoundComponent } from './notpagefound/notpagefound.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  { path: '',
    component: PagesComponent, 
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'graphic', component: GraphicComponent },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  
  { path: '**', component: NotpagefoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }