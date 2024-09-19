import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "",
    redirectTo: "",
    pathMatch: "full"
  },
  {
    path: "",
    loadChildren: () =>
      import("./layout/main-layout/main-layout.module").then((m) => m.MainLayoutModule),
  },
  {
    path: "coupons",
    loadChildren: () =>
      import("./views/all-coupons/all-coupons.module").then((m) => m.AllCouponsModule),
  },
];
