import { Component } from "@angular/core";
import {
  ModalController,
  AlertController,
  LoadingController
} from "@ionic/angular";
import { TasksService } from "../services/tasks.service";

@Component({
  selector: "app-done-all",
  templateUrl: "./done-all.page.html",
  styleUrls: ["./done-all.page.scss"]
})
export class DoneAllPage {
  visibleButtons: boolean = false;

  constructor(
    public taskService: TasksService,
    public modalCtrl: ModalController,
    public alertController: AlertController,
    public loadingController: LoadingController
  ) {
    this.loadTasks();
  }

  async loadTasks() {
    let loading = await this.loadingController.create({
      message: "Loading...",
      spinner: "dots"
    });

    await loading.present();

    this.taskService.doneTaskArray = this.taskService.loadDoneTasks();

    await loading.dismiss();
  }

  displayButtons() {
    let count = 0;
    this.taskService.doneTaskArray.forEach(item => {
      if (item.checked === true) {
        count++;
        this.visibleButtons = true;
      }
      if (count === 0) {
        this.visibleButtons = false;
      }
    });
  }

  async deleteTask() {
    let loading = await this.loadingController.create({
      message: "Deleting...",
      spinner: "dots"
    });

    await loading.present();
    this.taskService.deleteDoneTask();
    this.visibleButtons = false;
    this.taskService.updateDoneStorage();
    await loading.dismiss();
  }

  async pushBack() {
    let loading = await this.loadingController.create({
      message: "Moving...",
      spinner: "dots"
    });

    await loading.present();
    this.taskService.pushBack();
    this.visibleButtons = false;
    this.taskService.updateDoneStorage();
    this.taskService.updateStorage();
    await loading.dismiss();
  }
}
