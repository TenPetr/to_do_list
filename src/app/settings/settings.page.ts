import { Component } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { LabelsService } from "../services/labels.service";
import { SettingsService } from "../services/settings.service";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.page.html",
  styleUrls: ["./settings.page.scss"]
})
export class SettingsPage {
  selectedLabel: string;

  constructor(
    public settingsService: SettingsService,
    public modalCtrl: ModalController,
    public labelService: LabelsService
  ) {
    this.labelService.loadLabels();
  }

  saveSettings() {
    this.settingsService.currentlySelected = this.selectedLabel;
    this.modalCtrl.dismiss(this.selectedLabel, "addRole");
  }
}
