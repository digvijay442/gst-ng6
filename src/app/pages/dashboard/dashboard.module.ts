import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardBaseComponent } from './dashboard-base/dashboard-base.component';
import { DashboardRoutingModule } from './dashboard-routing';
import { DahtestComponent } from './dahtest/dahtest.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [DashboardBaseComponent, DahtestComponent]
})
export class DashboardModule { }
