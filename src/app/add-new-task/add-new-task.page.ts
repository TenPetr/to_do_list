import { Component } from "@angular/core";
import { AddNewLabelsPage } from "../add-new-labels/add-new-labels.page";
import { TimeDateService } from "../services/time-date.service";
import { ModalController, AlertController } from "@ionic/angular";
import { LabelsService } from "../services/labels.service";

@Component({
  selector: "app-add-new-task",
  templateUrl: "./add-new-task.page.html",
  styleUrls: ["./add-new-task.page.scss"]
})
export class AddNewTaskPage {
  color: string;
  label: string;
  timeTask: string;
  dateTask: string;
  currentDate: string;
  currentTime: string;
  nameOfTheTask: string;

  constructor(
    public timeDate: TimeDateService,
    public modalCtrl: ModalController,
    public labelService: LabelsService,
    public modalController: ModalController,
    public alertController: AlertController
  ) {
    this.defaultTimeDate();
    this.labelService.loadLabels();
  }

  labelsColor() {
    if (this.label != undefined) {
      let index = this.labelService.usersLabels.findIndex(
        l => l.name === this.label
      );
      this.color = this.labelService.usersLabels[index].color;
      return this.color;
    }
  }

  saveTheText() {
    if (this.nameOfTheTask != undefined && this.nameOfTheTask != "") {
      this.modalCtrl.dismiss(
        {
          name: this.nameOfTheTask,
          timeTask: this.timeTask,
          dateTask: this.dateTask,
          label: this.label,
          color: this.labelsColor()
        },
        "addRole"
      );
    } else {
      this.showAlert();
    }
  }

  async addNewLabel() {
    const modal = await this.modalController.create({
      component: AddNewLabelsPage
    });

    modal.onDidDismiss().then(data => {
      if (data.role != "closed") {
        this.labelService.addNewLabel(data);
      }
    });

    return await modal.present();
  }

  async showAlert() {
    const alert = await this.alertController.create({
      header: "Warning",
      message: "Please enter a task name",
      buttons: ["OK"]
    });

    await alert.present();
  }

  defaultTimeDate() {
    this.currentDate = this.timeDate.currentDate();
    this.currentTime = this.timeDate.currentTime();
  }

  selectedLabel() {
    console.log(this.label);
  }

  ngOnDestroy() {
    this.label = null;
  }
}
