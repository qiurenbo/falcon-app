import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ChipCardComponent } from "./chip-card/chip-card.component";
import { PositionFilterComponent } from "./position-filter/position-filter.component";
import { YearFilterComponent } from "./year-filter/year-filter.component";
import { OtherFilterComponent } from "./other-filter/other-filter.component";
import { FilterComponent } from "./filter/filter.component";

@NgModule({
  declarations: [
    ChipCardComponent,
    PositionFilterComponent,
    YearFilterComponent,
    OtherFilterComponent,
    FilterComponent,
  ],
  imports: [CommonModule],
  exports: [
    ChipCardComponent,
    PositionFilterComponent,
    YearFilterComponent,
    OtherFilterComponent,
    FilterComponent,
  ],
  providers: [],
})
export class SharedModule {}
