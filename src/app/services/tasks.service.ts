import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class TasksService {
  tasksArray = [];
  doneTaskArray = [];

  constructor() {}

  loadDoneTasks(): any {
    this.doneTaskArray =
      JSON.parse(localStorage.getItem("doneTasksArray")) == null
        ? (this.doneTaskArray = [])
        : JSON.parse(localStorage.getItem("doneTasksArray"));

    return this.doneTaskArray;
  }

  loadTasks(): any {
    this.tasksArray =
      JSON.parse(localStorage.getItem("tasksArray")) == null
        ? (this.tasksArray = [])
        : JSON.parse(localStorage.getItem("tasksArray"));

    return this.tasksArray;
  }

  pushDoneTasks(task): void {
    this.doneTaskArray.push(task);
    localStorage.setItem("doneTasksArray", JSON.stringify(this.doneTaskArray));
  }

  pushTasks(task): void {
    if (task.role === "addRole") {
      let object = {
        title: task.data.name,
        time: task.data.timeTask,
        date: task.data.dateTask,
        label: task.data.label,
        color: task.data.color,
        checked: false,
        visible: true
      };

      this.tasksArray.push(object);
      this.updateStorage();
    }
  }

  completeTask(): void {
    for (let i = this.tasksArray.length - 1; i >= 0; i--) {
      let index = this.tasksArray.indexOf(this.tasksArray[i]);
      if (this.tasksArray[i].checked === true) {
        if (index > -1) {
          this.tasksArray[i].checked = false;
          this.pushDoneTasks(this.tasksArray[i]);
          this.tasksArray.splice(index, 1);
        }
      }
    }
  }

  deleteTask(): void {
    for (let i = this.tasksArray.length - 1; i >= 0; i--) {
      let index = this.tasksArray.indexOf(this.tasksArray[i]);
      if (this.tasksArray[i].checked === true) {
        if (index > -1) {
          this.tasksArray.splice(index, 1);
        }
      }
    }
  }

  deleteDoneTask(): void {
    for (let i = this.doneTaskArray.length - 1; i >= 0; i--) {
      let index = this.doneTaskArray.indexOf(this.doneTaskArray[i]);
      if (this.doneTaskArray[i].checked === true) {
        if (index > -1) {
          this.doneTaskArray.splice(index, 1);
        }
      }
    }
  }

  pushBack(): void {
    for (let i = this.doneTaskArray.length - 1; i >= 0; i--) {
      let index = this.doneTaskArray.indexOf(this.doneTaskArray[i]);
      if (this.doneTaskArray[i].checked === true) {
        if (index > -1) {
          this.doneTaskArray[i].checked = false;
          this.tasksArray.push(this.doneTaskArray[i]);
          this.doneTaskArray.splice(index, 1);
        }
      }
    }
  }

  updateStorage(): void {
    localStorage.setItem("tasksArray", JSON.stringify(this.tasksArray));
  }

  updateDoneStorage(): void {
    localStorage.setItem("doneTasksArray", JSON.stringify(this.doneTaskArray));
  }
}
