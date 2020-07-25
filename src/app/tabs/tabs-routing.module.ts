import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TabsPage } from "./tabs.page";

const routes: Routes = [
  {
    path: "tabs",
    component: TabsPage,
    children: [
      {
        path: "history",
        loadChildren: () =>
          import("../history/history.module").then((m) => m.HistoryModule),
      },
      {
        path: "tab2",
        loadChildren: () =>
          import("../history/history.module").then((m) => m.HistoryModule),
      },
      {
        path: "tab3",
        loadChildren: () =>
          import("../history/history.module").then((m) => m.HistoryModule),
      },
      {
        path: "",
        redirectTo: "/tabs/history",
        pathMatch: "full",
      },
    ],
  },
  {
    path: "",
    redirectTo: "/tabs/history",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
