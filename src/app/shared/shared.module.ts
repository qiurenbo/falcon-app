import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ChipCardComponent } from "./chip-card/chip-card.component";

@NgModule({
  declarations: [ChipCardComponent],
  imports: [CommonModule],
  exports: [ChipCardComponent],
  providers: [],
})
export class SharedModule {}
