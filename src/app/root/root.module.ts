import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RootComponent } from './root.component';
import { CoreModule } from '../core/core.module';
import { DashboardModule } from '../pages/dashboard/dashboard.module';
import { RootRoutingModule } from './root-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    RootComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    RootRoutingModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class RootModule { }
