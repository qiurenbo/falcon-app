import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-chip-card",
  templateUrl: "./chip-card.component.html",
  styleUrls: ["./chip-card.component.css"],
})
export class ChipCardComponent implements OnInit {
  constructor() {}

  @Input()
  title: string;
  ngOnInit() {}
}
