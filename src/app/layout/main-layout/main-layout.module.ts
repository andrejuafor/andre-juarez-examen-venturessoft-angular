import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainLayoutRoutingModule } from './main-layout-routing.module';
import { HeaderComponent } from '../../features/header/header.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MainLayoutRoutingModule,
  ]
})
export class MainLayoutModule { }
