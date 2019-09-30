import { Component } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { DoneAllPage } from "../done-all/done-all.page";
import { TasksService } from "../services/tasks.service";
import { TimeDateService } from "../services/time-date.service";
import { AddNewTaskPage } from "../add-new-task/add-new-task.page";
import { LoadingController, AlertController } from "@ionic/angular";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  dateNumber: number = this.timeDate.currentDateNumber();
  monthNumber: string = this.timeDate.currentMonthNumber();

  showButtons: boolean = false;
  activeAddButton: boolean = false;

  constructor(
    public timeDate: TimeDateService,
    public taskService: TasksService,
    public modalController: ModalController,
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
    this.taskService.tasksArray = this.taskService.loadTasks();
    await loading.dismiss();
  }

  async addNewModal() {
    const modal = await this.modalController.create({
      component: AddNewTaskPage
    });

    modal.onDidDismiss().then(data => {
      if (data.role != "closed") {
        this.taskService.pushTasks(data);
      }
      this.headerRefresh();
    });

    return await modal.present();
  }

  async allDoneModal() {
    const modal = await this.modalController.create({
      component: DoneAllPage
    });

    this.headerRefresh();

    return await modal.present();
  }

  async doneTask() {
    let loading = await this.loadingController.create({
      message: "Completing...",
      spinner: "dots"
    });

    await loading.present();
    this.taskService.completeTask();
    this.setButtons();
    this.taskService.updateStorage();
    await loading.dismiss();
  }

  async deleteTask() {
    let loading = await this.loadingController.create({
      message: "Deleting...",
      spinner: "dots"
    });

    await loading.present();
    this.taskService.deleteTask();
    this.setButtons();
    this.taskService.updateStorage();
    await loading.dismiss();
  }

  displayButtons() {
    let count = 0;
    this.headerRefresh();
    this.taskService.tasksArray.forEach(item => {
      if (item.checked === true) {
        count++;
        this.showButtons = true;
        this.activeAddButton = true;
      }
      if (count === 0) {
        this.showButtons = false;
        this.activeAddButton = false;
      }
    });
  }

  headerRefresh() {
    this.dateNumber = this.timeDate.currentDateNumber();
    this.monthNumber = this.timeDate.currentMonthNumber();
  }

  setButtons() {
    this.showButtons = false;
    this.activeAddButton = false;
  }

  async showAlert() {
    const alert = await this.alertController.create({
      header: "Error",
      message: "Failed to load tasks",
      buttons: ["OK"]
    });

    await alert.present();
  }

  ngOnDestroy(): void {
    this.taskService.tasksArray = null;
  }
}
