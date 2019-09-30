import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class LabelsService {
  usersLabels = [];
  avaiableColors = [
    "Blue",
    "Yellow",
    "Purple",
    "Green",
    "Red",
    "Pink",
    "Default"
  ];

  predefinedLabels = [
    {
      name: "School",
      color: "Blue"
    },
    {
      name: "Work",
      color: "Purple"
    },
    {
      name: "Home",
      color: "Green"
    }
  ];

  constructor() {}

  loadLabels(): any {
    this.usersLabels =
      JSON.parse(localStorage.getItem("labels")) == null
        ? (this.usersLabels = this.predefinedLabels)
        : JSON.parse(localStorage.getItem("labels"));
  }

  addNewLabel(label) {
    this.usersLabels.push({
      name: label.data.name,
      color: label.data.color
    });
    localStorage.setItem("labels", JSON.stringify(this.usersLabels));
  }
}
