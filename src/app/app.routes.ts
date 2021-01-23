import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { HomeComponent } from './register/register.component';
import {DietPlanComponent} from './home/home.component';
export const AppRoutes: Routes = [
  

  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      {
        path: '', component: HomeComponent, pathMatch: 'full'
      },
      {
        path: 'register', component: HomeComponent
      },
       {
        path: '',
        component:DietPlanComponent, pathMatch:'full'
      },
      {
        path: 'home', component:DietPlanComponent
      }
    ]
  }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(AppRoutes);