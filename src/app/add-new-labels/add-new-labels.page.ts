import { Component } from "@angular/core";
import { LabelsService } from "../services/labels.service";
import { ModalController, AlertController } from "@ionic/angular";

@Component({
  selector: "app-add-new-labels",
  templateUrl: "./add-new-labels.page.html",
  styleUrls: ["./add-new-labels.page.scss"]
})
export class AddNewLabelsPage {
  labelsName: string;
  labelsColor: string;

  constructor(
    public modalCtrl: ModalController,
    public labelService: LabelsService,
    public alertController: AlertController
  ) {}

  saveLabel() {
    if (this.labelsName != undefined && this.labelsName != "") {
      this.modalCtrl.dismiss(
        {
          name: this.labelsName,
          color: this.labelsColor == undefined ? "Default" : this.labelsColor
        },
        "addRole"
      );
    } else {
      this.showAlert();
    }
  }

  async showAlert() {
    const alert = await this.alertController.create({
      header: "Warning",
      message: "Please enter a label name",
      buttons: ["OK"]
    });

    await alert.present();
  }
}
