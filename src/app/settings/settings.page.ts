import { Component } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { LabelsService } from "../services/labels.service";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.page.html",
  styleUrls: ["./settings.page.scss"]
})
export class SettingsPage {
  constructor(
    public modalCtrl: ModalController,
    public labelService: LabelsService
  ) {}

  saveSettings() {
    this.modalCtrl.dismiss();
  }
}
