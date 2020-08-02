import { Component, OnInit } from "@angular/core";
import { HistoryFilterComponent } from "../history-filter/history-filter.component";
import { ModalController, IonRouterOutlet } from "@ionic/angular";
@Component({
  selector: "falcon-history",
  templateUrl: "./history.html",
  styleUrls: ["./history.scss"],
})
export class HistoryComponent implements OnInit {
  constructor(
    private modalController: ModalController,
    private routerOutlet: IonRouterOutlet
  ) {}

  ngOnInit(): void {}

  async presentFilter() {
    const modal = await this.modalController.create({
      component: HistoryFilterComponent,
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
    });
    return await modal.present();
  }
}
