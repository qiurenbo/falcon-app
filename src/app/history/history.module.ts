import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HistoryComponent } from "./history";
import { HistoryRoutingModule } from "./history-routing.module";
import { IonicModule } from "@ionic/angular";
import { SharedModule } from "../shared/shared.module";
import { HistoryFilterComponent } from "../history-filter/history-filter.component";

@NgModule({
  declarations: [HistoryComponent, HistoryFilterComponent],
  imports: [CommonModule, HistoryRoutingModule, IonicModule, SharedModule],
  exports: [],
  providers: [],
})
export class HistoryModule {}
