import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HistoryComponent } from "./history";
import { HistoryRoutingModule } from "./history-routing.module";
import { IonicModule } from "@ionic/angular";

@NgModule({
  declarations: [HistoryComponent],
  imports: [CommonModule, HistoryRoutingModule, IonicModule],
  exports: [],
  providers: [],
})
export class HistoryModule {}
