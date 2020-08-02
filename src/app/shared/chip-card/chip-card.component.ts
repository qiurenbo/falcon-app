import { Component, OnInit, Input, ViewChild, ElementRef } from "@angular/core";
export type ChipType = "medium" | "small" | "large" | null;
@Component({
  selector: "app-chip-card",
  templateUrl: "./chip-card.component.html",
  styleUrls: ["./chip-card.component.scss"],
})
export class ChipCardComponent implements OnInit {
  constructor() {}

  @Input()
  size: ChipType = "medium";

  ngOnInit() {}
}
