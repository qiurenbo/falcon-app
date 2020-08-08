import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { HistoryComponent } from "./history";
import { PositionComponent } from "../position/position.component";

const routes: Routes = [
  { path: "", component: HistoryComponent },
  { path: "position", component: PositionComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoryRoutingModule {}
