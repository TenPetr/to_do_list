import { Injectable } from "@angular/core";
import { TasksService } from "./tasks.service";

@Injectable({
  providedIn: "root"
})
export class SettingsService {
  public currentlySelected: string;

  constructor(public taskService: TasksService) {}

  setFilter(selectedLabel) {
    this.taskService.tasksArray.forEach(element => {
      if (selectedLabel != element.label) {
        element.visible = false;
      } else {
        element.visible = true;
      }
    });
  }

  cancelFilter() {
    this.taskService.tasksArray.forEach(element => {
      element.visible = true;
    });
  }
}
