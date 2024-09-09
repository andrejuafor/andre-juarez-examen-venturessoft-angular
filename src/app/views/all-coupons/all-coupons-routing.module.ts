import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCouponsComponent } from './all-coupons.component';

const routes: Routes = [
  {
    path: "",
    component: AllCouponsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllCouponsRoutingModule { }
