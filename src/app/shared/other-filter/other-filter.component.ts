import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-other-filter",
  templateUrl: "./other-filter.component.html",
  styleUrls: ["./other-filter.component.scss"],
})
export class OtherFilterComponent implements OnInit {
  constructor() {}
  degrees = ["不限", "大专", "本科", "硕士"];
  genders = ["不限", "男", "女"];
  experiences = ["不限", "三支一扶", "社区干部"];
  types = ["不限", "街道", "公安"];
  ngOnInit() {}
}
