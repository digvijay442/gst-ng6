import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardBaseComponent} from './dashboard-base/dashboard-base.component'
import { DahtestComponent } from './dahtest/dahtest.component';

const routes: Routes = [
    {
      path: '',
      component: DashboardBaseComponent
    },
    {
        path: 'testdash',
        component: DahtestComponent
    }
  ];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule { }
