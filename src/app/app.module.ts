import { BrowserModule } from '@angular/platform-browser';
import { NgModule,ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { DietPlanComponent } from './home/home.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material';
// import { HomeLayoutComponent } from './home-layout/home-layout.component';
// import { HomeLayoutComponent } from './home-layout/home-layout.component';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { enableTracing: true });

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    HomeLayoutComponent,
    HomeLayoutComponent,
    DietPlanComponent,
    // HomeLayoutComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    rootRouting,
    routing,
    BrowserAnimationsModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
