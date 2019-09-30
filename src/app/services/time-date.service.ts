import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class TimeDateService {
  constructor() {}

  currentTime(): string {
    let dateTime = new Date();
    let time: string;

    let minutes =
      dateTime.getMinutes() < 10
        ? "0" + String(dateTime.getMinutes())
        : String(dateTime.getMinutes());

    time = String(dateTime.getHours()) + ":" + minutes;

    return time;
  }

  currentDate(): string {
    let dateTime = new Date();
    let date: string;
    let monthNum = dateTime.getMonth() + 1;

    date = dateTime.getDate() + "." + monthNum + "." + dateTime.getFullYear();

    return date;
  }

  currentDateNumber(): number {
    let dateTime = new Date();
    return dateTime.getDate();
  }

  currentMonthNumber(): string {
    let dateTime = new Date();
    let monthNum = dateTime.getMonth() + 1;
    return monthNum < 10 ? "0" + String(monthNum) : String(monthNum);
  }
}
