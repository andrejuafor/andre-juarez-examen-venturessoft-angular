import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { BrandCardItemComponent } from './components/brand-card-item/brand-card-item.component';
import { BrandListItemComponent } from './components/brand-list-item/brand-list-item.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonComponent,
    BrandCardItemComponent,
    BrandListItemComponent
  ],
  exports: [
    ButtonComponent,
    BrandCardItemComponent,
    BrandListItemComponent
  ]
})
export class SharedModule { }
