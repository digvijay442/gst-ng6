import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { ROUTES } from '../config/route.constant';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '', redirectTo: ROUTES.dashboard.route, pathMatch: 'full'
  }, 
  {
    path: ROUTES.dashboard.route,
    loadChildren: '../pages/dashboard/dashboard.module#DashboardModule'
  },
  {
    path : '**',
    component: PageNotFoundComponent
  }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RootRoutingModule { }
