import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "",
    redirectTo: "/es",
    pathMatch: "full"
  },
  {
    path: ":lang",
    loadChildren: () =>
      import("./layout/main-layout/main-layout.module").then((m) => m.MainLayoutModule),
  },
  // {
  //   path: ":lang/not-found/error",
  //   loadChildren: () =>
  //     import("./modules/errors/errors.module").then(
  //       (m) => m.ErrorsModule
  //     ),
  // },
  // {
  //   path: ":lang/:merchant",
  //   canActivate: [AuthGuard],
  //   loadChildren: () =>
  //     import("./pages/layout.module").then((m) => m.LayoutModule),
  // },
];
