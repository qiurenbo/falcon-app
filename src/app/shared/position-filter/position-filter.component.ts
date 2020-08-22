import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-position-filter",
  templateUrl: "./position-filter.component.html",
  styleUrls: ["./position-filter.component.scss"],
})
export class PositionFilterComponent implements OnInit {
  constructor() {}
  items = [
    "南湖区",
    "秀洲区",
    "嘉善市",
    "桐乡市",
    "海宁市",
    "海盐市",
    "平湖市",
  ];
  ngOnInit() {}
}
