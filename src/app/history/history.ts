import { Component, OnInit } from "@angular/core";
import { ModalController, IonRouterOutlet } from "@ionic/angular";
import { PositionFilterComponent } from "../shared/position-filter/position-filter.component";
import { YearFilterComponent } from "../shared/year-filter/year-filter.component";
import { Router } from "@angular/router";
@Component({
  selector: "falcon-history",
  templateUrl: "./history.html",
  styleUrls: ["./history.scss"],
})
export class HistoryComponent implements OnInit {
  constructor(
    private modalController: ModalController,
    private routerOutlet: IonRouterOutlet,
    private router: Router
  ) {}

  ngOnInit(): void {}

  async presentPositionFilter() {
    const modal = await this.modalController.create({
      component: PositionFilterComponent,
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
    });
    return await modal.present();
  }

  async presentYearFilter() {
    const modal = await this.modalController.create({
      component: YearFilterComponent,
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
    });
    return await modal.present();
  }

  navigateToDetail() {
    this.router.navigateByUrl("tabs/history/position");
  }
}
