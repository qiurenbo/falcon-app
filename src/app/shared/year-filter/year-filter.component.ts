import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-year-filter",
  templateUrl: "./year-filter.component.html",
  styleUrls: ["./year-filter.component.scss"],
})
export class YearFilterComponent implements OnInit {
  constructor() {}
  items = ["2018", "2019", "2020", "2021", "2022"];
  ngOnInit() {}
}
