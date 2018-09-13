import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { Components } from './components';
import {Routes} from '@angular/router'
import { RootRoutingModule } from '../root/root-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RootRoutingModule
  ],
  declarations: [
    HeaderComponent,
    NavBarComponent,
    FooterComponent
  ],
  exports: [Components]
})
export class CoreModule { }
