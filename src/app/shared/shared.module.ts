import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ChipCardComponent } from "./chip-card/chip-card.component";
import { PositionFilterComponent } from "./position-filter/position-filter.component";
import { YearFilterComponent } from "./year-filter/year-filter.component";

@NgModule({
  declarations: [
    ChipCardComponent,
    PositionFilterComponent,
    YearFilterComponent,
  ],
  imports: [CommonModule],
  exports: [ChipCardComponent, PositionFilterComponent, YearFilterComponent],
  providers: [],
})
export class SharedModule {}
